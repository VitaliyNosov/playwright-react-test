// @ts-check
const { test, expect } = require('@playwright/test');

// test one

test('test-front-page-one', async ({ page }) => {

  page.setDefaultTimeout(60000);

  await page.goto('https://v2.marketlend.com.au/');

  await page.screenshot({path: 'screen/screnshot-front-page.jpg' });
  await page.locator('.custom-button-header-one').click();
  await page.locator('#wpforms-242-field_1').fill('vitaliynosov2014@gmail.com');
  const locator = page.locator('.custom-button-header-one');
  await locator.screenshot({ path: 'screen/image.png' });
  
});


// test consol comand: npx playwright test
// test consol comand open brouser: npx playwright test --headed
// test consol comand code inspect automatic: npx playwright codegen
// show test: npx playwright show-report