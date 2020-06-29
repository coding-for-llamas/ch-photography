import 'core-js/stable';
import 'regenerator-runtime/runtime';

describe('Home', () => {
  it('should be titled "C.H Photography"', async () => {
    const page = await browser.newPage();
    await page.goto('http://localhost:8787/', {
      waitUntil: 'load',
    });
    await expect(page.title()).resolves.toMatch('C.H Photography');
  });
});
