import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  const errors: string[] = [];
  page.on('pageerror', (error) => errors.push(error.message));
  page.on('console', (message) => {
    if (message.type() === 'error') errors.push(message.text());
  });
  await page.goto('/');
  await expect(page.getByRole('heading', { name: 'Triquetra Sample' })).toBeVisible();
  // Hydration and runtime errors would show up here.
  expect(errors).toEqual([]);
});

test('has no axe violations', async ({ page }) => {
  const results = await new AxeBuilder({ page }).analyze();
  expect(results.violations).toEqual([]);
});

test('applies Triquetra styles to components', async ({ page }) => {
  // Proves the app's Tailwind build scanned the package and generated component classes.
  const subscribe = page.getByRole('button', { name: 'Subscribe' });
  const background = await subscribe.evaluate((el) => getComputedStyle(el).backgroundColor);
  expect(background).not.toBe('rgba(0, 0, 0, 0)');
  const radius = await subscribe.evaluate((el) => getComputedStyle(el).borderTopLeftRadius);
  expect(radius).not.toBe('0px');
});

test('loads the Geist font shipped by the package', async ({ page }) => {
  const loaded = await page.evaluate(async () => {
    await document.fonts.ready;
    return [...document.fonts].some((font) => font.family === 'Geist' && font.status === 'loaded');
  });
  expect(loaded).toBe(true);
  const family = await page
    .getByRole('heading', { name: 'Triquetra Sample' })
    .evaluate((el) => getComputedStyle(el).fontFamily);
  expect(family).toMatch(/^Geist\b/);
});

test('validates the email field', async ({ page }) => {
  const email = page.getByRole('textbox', { name: 'Email' });
  await page.getByRole('button', { name: 'Subscribe' }).click();
  await expect(email).toHaveAttribute('aria-invalid', 'true');
  await expect(email).toHaveAccessibleDescription(/Enter a valid email address/);

  await email.fill('ada@example.com');
  await page.getByRole('button', { name: 'Subscribe' }).click();
  await expect(page.getByRole('status')).toContainText('ada@example.com');
});

test('confirms in a dialog and restores focus', async ({ page }) => {
  const trigger = page.getByRole('button', { name: 'Delete workspace' });
  await trigger.click();
  const dialog = page.getByRole('dialog', { name: 'Delete workspace?' });
  await expect(dialog).toBeVisible();
  expect((await new AxeBuilder({ page }).include('[role="dialog"]').analyze()).violations).toEqual(
    [],
  );
  await page.keyboard.press('Escape');
  await expect(dialog).toBeHidden();
  await expect(trigger).toBeFocused();

  await trigger.click();
  await page.getByRole('dialog').getByRole('button', { name: 'Delete', exact: true }).click();
  await expect(page.getByRole('status')).toContainText('Workspace deleted');
});

test('switches and remembers the color mode', async ({ page }) => {
  const html = page.locator('html');
  await expect(html).not.toHaveAttribute('data-mode');

  await page.getByRole('button', { name: 'Dark' }).click();
  await expect(html).toHaveAttribute('data-mode', 'dark');
  await expect(page.getByRole('button', { name: 'Dark' })).toHaveAttribute('aria-pressed', 'true');

  await page.reload();
  await expect(html).toHaveAttribute('data-mode', 'dark');
  await expect(page.getByRole('button', { name: 'Dark' })).toHaveAttribute('aria-pressed', 'true');

  await page.getByRole('button', { name: 'System' }).click();
  await expect(html).not.toHaveAttribute('data-mode');
});
