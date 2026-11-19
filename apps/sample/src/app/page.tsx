import { Button } from '@renonreis/triquetra';
import { DangerZoneCard } from './danger-zone-card';
import { ModeSwitcher } from './mode-switcher';
import { SignupCard } from './signup-card';

// A Server Component. Triquetra ships as a client module ('use client'), so simple components
// such as Button render here directly. Compound components (`Card.Root`, `Dialog.Content`…)
// can't be dotted into from the server, so they live in client components.
export default function HomePage() {
  return (
    <div className="mx-auto flex max-w-xl flex-col gap-8 px-4 py-12">
      <header className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-col gap-1">
          <h1 className="font-heading text-2xl leading-tight font-semibold">Triquetra Sample</h1>
          <p className="text-sm text-fg-muted">
            Next.js App Router consuming{' '}
            <a className="text-fg-link underline" href="https://triquetra.renon.dev">
              @renonreis/triquetra
            </a>
            .
          </p>
        </div>
        <ModeSwitcher />
      </header>

      <main className="flex flex-col gap-6">
        <Button asChild variant="secondary" className="self-start">
          <a href="https://triquetra.renon.dev">Open the Storybook</a>
        </Button>
        <SignupCard />
        <DangerZoneCard />
      </main>
    </div>
  );
}
