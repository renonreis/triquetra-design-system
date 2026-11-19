'use client';

import { Button } from '@renonreis/triquetra';
import { useSyncExternalStore } from 'react';
import { MODE_STORAGE_KEY, type Mode, modes } from './mode';

const listeners = new Set<() => void>();

function readMode(): Mode {
  const mode = document.documentElement.dataset.mode;
  return mode === 'light' || mode === 'dark' ? mode : 'system';
}

function setMode(mode: Mode) {
  const root = document.documentElement;
  try {
    if (mode === 'system') localStorage.removeItem(MODE_STORAGE_KEY);
    else localStorage.setItem(MODE_STORAGE_KEY, mode);
  } catch {
    // Storage can be blocked; the mode still applies for this page view.
  }
  if (mode === 'system') delete root.dataset.mode;
  else root.dataset.mode = mode;
  listeners.forEach((listener) => {
    listener();
  });
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

const labels: Record<Mode, string> = { system: 'System', light: 'Light', dark: 'Dark' };

/** Switches `data-mode` on `<html>`. Without it, Triquetra follows `prefers-color-scheme`. */
export function ModeSwitcher() {
  const current = useSyncExternalStore(subscribe, readMode, () => 'system' as const);

  return (
    <div role="group" aria-label="Color mode" className="flex gap-1">
      {modes.map((mode) => (
        <Button
          key={mode}
          size="sm"
          variant={mode === current ? 'neutral' : 'ghost'}
          aria-pressed={mode === current}
          onClick={() => {
            setMode(mode);
          }}
        >
          {labels[mode]}
        </Button>
      ))}
    </div>
  );
}
