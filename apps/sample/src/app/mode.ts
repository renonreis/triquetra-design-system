export const MODE_STORAGE_KEY = 'triquetra-sample-mode';
export const modes = ['system', 'light', 'dark'] as const;
export type Mode = (typeof modes)[number];
