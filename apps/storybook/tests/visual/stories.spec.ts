import { readFileSync } from 'node:fs';
import { expect, test } from '@playwright/test';

interface IndexEntry {
  id: string;
  title: string;
  name: string;
  type: 'story' | 'docs';
  tags?: string[];
}

const index = JSON.parse(readFileSync('storybook-static/index.json', 'utf8')) as {
  entries: Record<string, IndexEntry>;
};

const stories = Object.values(index.entries).filter(
  (entry) => entry.type === 'story' && entry.tags?.includes('visual'),
);

for (const story of stories) {
  for (const mode of ['light', 'dark'] as const) {
    test(`${story.title} › ${story.name} (${mode})`, async ({ page }) => {
      await page.goto(`/iframe.html?id=${story.id}&viewMode=story&globals=mode:${mode}`);
      await page.locator('#storybook-root > *').first().waitFor();
      // Wait for the story to finish, including its play function, so interactions never race
      // the screenshot. Fail fast (instead of hanging) if Storybook reports another state.
      await page.waitForFunction(
        () =>
          (window as { __STORYBOOK_PREVIEW__?: { currentRender?: { phase?: string } } })
            .__STORYBOOK_PREVIEW__?.currentRender?.phase === 'finished',
        undefined,
        { timeout: 10_000 },
      );
      await page.evaluate(() => document.fonts.ready);
      await expect(page).toHaveScreenshot(`${story.id}--${mode}.png`, { fullPage: true });
    });
  }
}
