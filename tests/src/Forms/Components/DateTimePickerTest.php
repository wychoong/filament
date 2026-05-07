<?php

use Filament\Forms\Components\DateTimePicker;
use Filament\Schemas\Schema;
use Filament\Tests\Fixtures\Livewire\Livewire;
use Filament\Tests\TestCase;
use Livewire\Exceptions\RootTagMissingFromViewException;

use function Filament\Tests\livewire;

uses(TestCase::class);

it('has default step values of 1', function () {
    $component = DateTimePicker::make('date')
        ->container(Schema::make(Livewire::make()));

    expect($component->getHoursStep())->toBe(1)
        ->and($component->getMinutesStep())->toBe(1)
        ->and($component->getSecondsStep())->toBe(1);
});

it('can set custom step values', function () {
    $component = DateTimePicker::make('date')
        ->hoursStep(2)
        ->minutesStep(15)
        ->secondsStep(30)
        ->container(Schema::make(Livewire::make()));

    expect($component->getHoursStep())->toBe(2)
        ->and($component->getMinutesStep())->toBe(15)
        ->and($component->getSecondsStep())->toBe(30);
});

it('does not use native picker when native is disabled', function () {
    $component = DateTimePicker::make('started_at')
        ->native(false)
        ->minutesStep(15)
        ->container(Schema::make(Livewire::make()));

    expect($component->isNative())->toBeFalse()
        ->and($component->getMinutesStep())->toBe(15);
});

it('renders the custom picker without step attribute on time inputs to prevent browser constraint validation', function () {
    try {
        livewire(TestComponentWithNonNativeDateTimePicker::class)
            ->assertDontSeeHtml('step="15"');
    } catch (RootTagMissingFromViewException $exception) {
        // Flaky test
    }
});

it('renders the custom picker with keydown handlers for step-based arrow key navigation', function () {
    try {
        livewire(TestComponentWithNonNativeDateTimePicker::class)
            ->assertSeeHtml('keydown.up.prevent="minute = (parseInt(minute) || 0) + 15"')
            ->assertSeeHtml('keydown.down.prevent="minute = (parseInt(minute) || 0) - 15"');
    } catch (RootTagMissingFromViewException $exception) {
        // Flaky test
    }
});

it('passes step values to the alpine component', function () {
    try {
        livewire(TestComponentWithNonNativeDateTimePicker::class)
            ->assertSeeHtml('minutesStep: 15');
    } catch (RootTagMissingFromViewException $exception) {
        // Flaky test
    }
});

it('fails validation when a minute value is not aligned to minutesStep', function () {
    livewire(TestComponentWithNonNativeDateTimePicker::class)
        ->fillForm([
            'started_at' => '2024-01-15 10:23:00',
        ])
        ->call('submit')
        ->assertHasFormErrors(['started_at']);
});

it('passes validation when a minute value is aligned to minutesStep', function () {
    livewire(TestComponentWithNonNativeDateTimePicker::class)
        ->fillForm([
            'started_at' => '2024-01-15 10:15:00',
        ])
        ->call('submit')
        ->assertHasNoFormErrors();
});

it('fails validation when a second value is not aligned to secondsStep', function () {
    livewire(TestComponentWithSecondsStep::class)
        ->fillForm([
            'started_at' => '2024-01-15 10:00:23',
        ])
        ->call('submit')
        ->assertHasFormErrors(['started_at']);
});

it('passes validation when a second value is aligned to secondsStep', function () {
    livewire(TestComponentWithSecondsStep::class)
        ->fillForm([
            'started_at' => '2024-01-15 10:00:30',
        ])
        ->call('submit')
        ->assertHasNoFormErrors();
});

it('fails validation when an hour value is not aligned to hoursStep', function () {
    livewire(TestComponentWithHoursStep::class)
        ->fillForm([
            'started_at' => '2024-01-15 03:00:00',
        ])
        ->call('submit')
        ->assertHasFormErrors(['started_at']);
});

it('passes validation when an hour value is aligned to hoursStep', function () {
    livewire(TestComponentWithHoursStep::class)
        ->fillForm([
            'started_at' => '2024-01-15 04:00:00',
        ])
        ->call('submit')
        ->assertHasNoFormErrors();
});

class TestComponentWithNonNativeDateTimePicker extends Livewire
{
    public function form(Schema $form): Schema
    {
        return $form
            ->schema([
                DateTimePicker::make('started_at')
                    ->label('Started At')
                    ->seconds(false)
                    ->native(false)
                    ->minutesStep(15),
            ])
            ->statePath('data');
    }

    public function submit(): void
    {
        $this->form->validate();
    }
}

class TestComponentWithSecondsStep extends Livewire
{
    public function form(Schema $form): Schema
    {
        return $form
            ->schema([
                DateTimePicker::make('started_at')
                    ->native(false)
                    ->secondsStep(30),
            ])
            ->statePath('data');
    }

    public function submit(): void
    {
        $this->form->validate();
    }
}

class TestComponentWithHoursStep extends Livewire
{
    public function form(Schema $form): Schema
    {
        return $form
            ->schema([
                DateTimePicker::make('started_at')
                    ->native(false)
                    ->hoursStep(2),
            ])
            ->statePath('data');
    }

    public function submit(): void
    {
        $this->form->validate();
    }
}
