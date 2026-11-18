import { expect, test } from '@playwright/test';

test('leaving the 3D main stops drawing, including after repeated visits', async ({ page }) => {
  await page.addInitScript(() => {
    const state = window as typeof window & { auditDraws: number };
    state.auditDraws = 0;
    for (const prototype of [WebGLRenderingContext.prototype, WebGL2RenderingContext.prototype]) {
      for (const method of ['drawArrays', 'drawElements'] as const) {
        const original = prototype[method];
        prototype[method] = function (...args: Parameters<typeof original>) {
          state.auditDraws++;
          return original.apply(this, args);
        };
      }
    }
  });
  const draws = () => page.evaluate(() => (window as typeof window & { auditDraws: number }).auditDraws);
  await page.goto('main');
  for (let visit = 0; visit < 2; visit++) {
    await expect(page.locator('#three-canvas')).toBeVisible();
    const before = await draws();
    await expect.poll(draws).toBeGreaterThan(before + 10);
    await page.getByRole('button', { name: 'START', exact: true }).click();
    await page.locator('#btn-menu').click();
    await page.getByRole('link', { name: '연락하기 페이지로 이동' }).click();
    await expect(page.locator('#contact_name')).toBeVisible();
    await page.waitForTimeout(100);
    const stopped = await draws();
    await page.waitForTimeout(300);
    expect(await draws()).toBe(stopped);
    if (visit === 0) {
      await page.locator('#btn-menu').click();
      await page.getByRole('link', { name: '메인 페이지로 이동', exact: true }).click();
    }
  }
});
