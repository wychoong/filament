<?php

namespace Filament\Auth\Pages\EmailVerification;

use DanHarrin\LivewireRateLimiting\Exceptions\TooManyRequestsException;
use DanHarrin\LivewireRateLimiting\WithRateLimiting;
use Exception;
use Filament\Actions\Action;
use Filament\Auth\Notifications\VerifyEmail;
use Filament\Facades\Filament;
use Filament\Notifications\Notification;
use Filament\Pages\Auth\EmailVerification\view;
use Filament\Pages\SimplePage;
use Filament\Schemas\Schema;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Contracts\Support\Htmlable;

/**
 * @property-read Schema $form
 */
class EmailVerificationPrompt extends SimplePage
{
    use WithRateLimiting;

    /**
     * @var view-string
     */
    protected static string $view = 'filament-panels::auth.pages.email-verification.email-verification-prompt';

    public function mount(): void
    {
        if ($this->getVerifiable()->hasVerifiedEmail()) {
            redirect()->intended(Filament::getUrl());
        }
    }

    protected function getVerifiable(): MustVerifyEmail
    {
        /** @var MustVerifyEmail */
        $user = Filament::auth()->user();

        return $user;
    }

    protected function sendEmailVerificationNotification(MustVerifyEmail $user): void
    {
        if ($user->hasVerifiedEmail()) {
            return;
        }

        if (! method_exists($user, 'notify')) {
            $userClass = $user::class;

            throw new Exception("Model [{$userClass}] does not have a [notify()] method.");
        }

        $notification = app(VerifyEmail::class);
        $notification->url = Filament::getVerifyEmailUrl($user);

        $user->notify($notification);
    }

    public function resendNotificationAction(): Action
    {
        return Action::make('resendNotification')
            ->link()
            ->label(__('filament-panels::auth/pages/email-verification/email-verification-prompt.actions.resend_notification.label') . '.')
            ->action(function (): void {
                try {
                    $this->rateLimit(2);
                } catch (TooManyRequestsException $exception) {
                    $this->getRateLimitedNotification($exception)?->send();

                    return;
                }

                $this->sendEmailVerificationNotification($this->getVerifiable());

                Notification::make()
                    ->title(__('filament-panels::auth/pages/email-verification/email-verification-prompt.notifications.notification_resent.title'))
                    ->success()
                    ->send();
            });
    }

    protected function getRateLimitedNotification(TooManyRequestsException $exception): ?Notification
    {
        return Notification::make()
            ->title(__('filament-panels::auth/pages/email-verification/email-verification-prompt.notifications.notification_resend_throttled.title', [
                'seconds' => $exception->secondsUntilAvailable,
                'minutes' => $exception->minutesUntilAvailable,
            ]))
            ->body(array_key_exists('body', __('filament-panels::auth/pages/email-verification/email-verification-prompt.notifications.notification_resend_throttled') ?: []) ? __('filament-panels::auth/pages/email-verification/email-verification-prompt.notifications.notification_resend_throttled.body', [
                'seconds' => $exception->secondsUntilAvailable,
                'minutes' => $exception->minutesUntilAvailable,
            ]) : null)
            ->danger();
    }

    public function getTitle(): string | Htmlable
    {
        return __('filament-panels::auth/pages/email-verification/email-verification-prompt.title');
    }

    public function getHeading(): string | Htmlable
    {
        return __('filament-panels::auth/pages/email-verification/email-verification-prompt.heading');
    }
}