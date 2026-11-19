import '@testing-library/jest-dom/vitest';
import { cleanup } from '@testing-library/react';
import { afterEach, expect } from 'vitest';
import { toHaveNoViolations } from './axe.js';

expect.extend({ toHaveNoViolations });

afterEach(() => {
  cleanup();
});

// jsdom gaps that Ark UI's positioned popovers (Select, Menu…) rely on.
class ResizeObserverStub {
  observe() {}
  unobserve() {}
  disconnect() {}
}
globalThis.ResizeObserver = ResizeObserverStub;
Element.prototype.scrollTo = () => {};
Element.prototype.scrollIntoView = () => {};
