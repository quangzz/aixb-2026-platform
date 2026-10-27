const { chromium } = require('playwright');
const fs = require('fs');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://business.edx.org/');

  const designData = await page.evaluate(() => {
    const getStyles = (element) => {
      if (!element) return null;
      const styles = window.getComputedStyle(element);
      return {
        backgroundColor: styles.backgroundColor,
        color: styles.color,
        fontFamily: styles.fontFamily,
        fontSize: styles.fontSize,
        fontWeight: styles.fontWeight,
        padding: styles.padding,
        borderRadius: styles.borderRadius,
      };
    };

    const header = getStyles(document.querySelector('header'));
    const hero = getStyles(document.querySelector('.hero') || document.querySelector('section'));
    const h1 = getStyles(document.querySelector('h1'));
    const p = getStyles(document.querySelector('p'));
    const ctaBtn = getStyles(document.querySelector('a.btn') || document.querySelector('button') || document.querySelector('a[href*="contact"]'));
    const cards = Array.from(document.querySelectorAll('.card, [class*="card"]')).slice(0, 2).map(getStyles);

    return {
      header,
      hero,
      h1,
      p,
      ctaBtn,
      cards
    };
  });

  fs.writeFileSync('edx_design.json', JSON.stringify(designData, null, 2));
  await browser.close();
})();
