<?php

namespace Filament\Schemas\Commands;

use Filament\Schemas\Commands\FileGenerators\LayoutComponentClassGenerator;
use Filament\Support\Commands\Concerns\CanAskForComponentLocation;
use Filament\Support\Commands\Concerns\CanAskForViewLocation;
use Filament\Support\Commands\Concerns\CanManipulateFiles;
use Filament\Support\Commands\Exceptions\FailureCommandOutput;
use Illuminate\Console\Command;
use Illuminate\Support\Str;
use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputOption;

use function Laravel\Prompts\text;

#[AsCommand(name: 'make:filament-schema-layout', aliases: [
    'filament:layout',
    'filament:form-layout',
    'filament:infolist-layout',
    'filament:schema-layout',
    'forms:layout',
    'forms:make-layout',
    'infolists:layout',
    'infolists:make-layout',
    'make:filament-layout',
    'make:infolist-layout',
    'make:form-layout',
])]
class MakeLayoutComponentCommand extends Command
{
    use CanAskForComponentLocation;
    use CanAskForViewLocation;
    use CanManipulateFiles;

    protected $description = 'Create a new schema layout component class and view';

    protected $name = 'make:filament-schema-layout';

    protected string $fqnEnd;

    protected string $fqn;

    protected string $path;

    protected string $view;

    protected string $viewPath;

    /**
     * @var array<string>
     */
    protected $aliases = [
        'filament:layout',
        'filament:form-layout',
        'filament:infolist-layout',
        'filament:schema-layout',
        'forms:layout',
        'forms:make-layout',
        'infolists:layout',
        'infolists:make-layout',
        'make:filament-layout',
        'make:infolist-layout',
        'make:form-layout',
    ];

    /**
     * @return array<InputArgument>
     */
    protected function getArguments(): array
    {
        return [
            new InputArgument(
                name: 'name',
                mode: InputArgument::OPTIONAL,
                description: 'The name of the layout component to generate, optionally prefixed with directories',
            ),
        ];
    }

    /**
     * @return array<InputOption>
     */
    protected function getOptions(): array
    {
        return [
            new InputOption(
                name: 'force',
                shortcut: 'F',
                mode: InputOption::VALUE_NONE,
                description: 'Overwrite the contents of the files if they already exist',
            ),
        ];
    }

    public function handle(): int
    {
        try {
            $this->configureFqnEnd();

            $this->configureLocation();

            $this->createLayoutComponent();
            $this->createView();
        } catch (FailureCommandOutput) {
            return static::FAILURE;
        }

        $this->components->info("Filament layout component [{$this->fqn}] created successfully.");

        return static::SUCCESS;
    }

    protected function configureFqnEnd(): void
    {
        $this->fqnEnd = (string) str($this->argument('name') ?? text(
            label: 'What is the layout component name?',
            placeholder: 'InlineSection',
            required: true,
        ))
            ->trim('/')
            ->trim('\\')
            ->trim(' ')
            ->studly()
            ->replace('/', '\\');
    }

    protected function configureLocation(): void
    {
        [
            $namespace,
            $path,
            $viewNamespace,
        ] = $this->askForComponentLocation(
            path: 'Schemas/Components',
            question: 'Where would you like to create the component?',
        );

        $this->fqn = "{$namespace}\\{$this->fqnEnd}";
        $this->path = (string) str("{$path}\\{$this->fqnEnd}.php")
            ->replace('\\', '/')
            ->replace('//', '/');

        [
            $this->view,
            $this->viewPath,
        ] = $this->askForViewLocation(
            str($this->fqn)
                ->afterLast('\\Schemas\\Components\\')
                ->prepend('Filament\\Schemas\\Components\\')
                ->replace('\\', '/')
                ->explode('/')
                ->map(Str::kebab(...))
                ->implode('.'),
            defaultNamespace: $viewNamespace,
        );
    }

    protected function createLayoutComponent(): void
    {
        if (! $this->option('force') && $this->checkForCollision($this->path)) {
            throw new FailureCommandOutput;
        }

        $this->writeFile($this->path, app(LayoutComponentClassGenerator::class, [
            'fqn' => $this->fqn,
            'view' => $this->view,
        ]));
    }

    protected function createView(): void
    {
        if (blank($this->view)) {
            return;
        }

        if (! $this->option('force') && $this->checkForCollision($this->viewPath)) {
            throw new FailureCommandOutput;
        }

        $this->copyStubToApp('LayoutComponentView', $this->viewPath);
    }
}