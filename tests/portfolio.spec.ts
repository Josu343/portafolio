import { test, expect } from '@playwright/test';

test('contenido, contacto, filtros y preferencia de tema', async ({ page }) => {
  const errors: string[] = [];
  page.on('pageerror', error => errors.push(error.message));
  await page.goto('/');
  await expect(page).toHaveTitle(/Marco Mamani/);
  await expect(page.getByRole('heading', { level: 1 })).toContainText('soluciones web');
  await expect(page.getByText('Disponible para trabajar').first()).toBeVisible();
  const portrait = page.getByRole('img', { name: 'Retrato de Marco Antonio Mamani Mamani' });
  await expect(portrait).toBeVisible();
  await expect(portrait).toHaveJSProperty('naturalWidth', 222);
  await expect(page.locator('.project-card')).toHaveCount(2);
  await expect(page.locator('.timeline-item')).toHaveCount(4);
  await expect(page.locator('a[href="mailto:sheldoners2@gmail.com"]').first()).toBeAttached();
  await expect(page.locator('a[href="tel:+59178844351"]')).toBeAttached();
  const theme = await page.locator('html').getAttribute('data-theme');
  await page.locator('#theme-toggle').click();
  await expect(page.locator('html')).toHaveAttribute('data-theme', theme === 'dark' ? 'light' : 'dark');
  await page.reload();
  await expect(page.locator('html')).toHaveAttribute('data-theme', theme === 'dark' ? 'light' : 'dark');
  await page.locator('.course-catalog summary').click();
  await expect(page.locator('.course-list li:visible')).toHaveCount(38);
  await page.getByRole('button', { name: 'DevOps', exact: true }).click();
  await expect(page.locator('.course-list li:visible')).toHaveCount(6);
  await page.getByRole('button', { name: 'Todos', exact: true }).click();
  await expect(page.locator('.course-list li:visible')).toHaveCount(38);
  const brokenAnchors = await page.locator('a[href^="#"]').evaluateAll(links => links.map(link => link.getAttribute('href')!).filter(href => !document.getElementById(href.slice(1))));
  expect(brokenAnchors).toEqual([]);
  expect(errors).toEqual([]);
});

for (const width of [360, 390, 768, 1280]) {
  test(`sin desbordamientos a ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.goto('/');
    const fits = await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth);
    expect(fits).toBe(true);
    await page.locator('.course-catalog summary').click();
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
    if (width < 761) {
      await page.locator('#menu-toggle').click();
      await expect(page.locator('#menu-toggle')).toHaveAttribute('aria-expanded', 'true');
      await page.locator('#navigation a[href="#proyectos"]').click();
      await expect(page.locator('#menu-toggle')).toHaveAttribute('aria-expanded', 'false');
    }
  });
}
