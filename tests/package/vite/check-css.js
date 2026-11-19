// The app's Tailwind build must generate Triquetra's component classes from the packed dist.
import { readdirSync, readFileSync } from 'node:fs';

const dir = 'dist/assets';
const css = readdirSync(dir)
  .filter((file) => file.endsWith('.css'))
  .map((file) => readFileSync(`${dir}/${file}`, 'utf8'))
  .join('\n');

const expected = [
  '--tq-color-bg-canvas',
  '.bg-action-secondary-bg',
  '.rounded-control',
  'font-family:Geist',
];
const missing = expected.filter((needle) => !css.includes(needle));
if (missing.length > 0) {
  console.error(`Missing from the built CSS: ${missing.join(', ')}`);
  process.exit(1);
}
console.log('CSS check passed.');
