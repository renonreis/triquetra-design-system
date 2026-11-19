import type { NextConfig } from 'next';

const config: NextConfig = {
  reactStrictMode: true,
  // The monorepo root holds the lockfile; pin it so Next.js doesn't guess.
  turbopack: { root: new URL('../..', import.meta.url).pathname },
};

export default config;
