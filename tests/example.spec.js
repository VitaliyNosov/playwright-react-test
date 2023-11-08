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

// test two

test('test-front-page-two', async ({ page }) => {

  page.setDefaultTimeout(60000);

  await page.goto('https://v2.marketlend.com.au/');

  const locatorTwo = page.locator('.button-front-page-custom-one');
  await locatorTwo.screenshot({ path: 'img/image-button.png' });
  await page.getByRole('link', { name: 'Investor' }).click();
  await page.getByRole('link', { name: 'Borrower' }).click();
  await page.getByLabel('Primary').getByRole('link', { name: 'Contact Us' }).click();
  await page.getByRole('link', { name: 'Blog' }).click();
  await page.getByRole('link', { name: 'About Us' }).click();
  await page.getByRole('link', { name: 'Partner' }).click();
  await page.getByLabel('Primary').getByRole('link', { name: 'Privacy' }).click();

});

test('test-contact-page', async ({ page }) => {

  page.setDefaultTimeout(60000);

  await page.goto('https://v2.marketlend.com.au/contact-us/');

  await page.screenshot({path: 'img/screnshot-contact-page.jpg' });
  await page.getByRole('link', { name: '+610280066798' }).click();
  await page.getByRole('link', { name: 'Call Us Now' }).click();
  await page.getByPlaceholder('First Name').fill('Vitaliy');
  await page.getByPlaceholder('Last Name').fill('Nosov');
  await page.locator('#form div').filter({ hasText: 'I’m interested in investing' }).nth(4).click();
  await page.getByPlaceholder('Your Email Address').fill('vitaliynosov2014@gmail.com');
  await page.getByPlaceholder('Subject').fill('Test works');
  await page.getByPlaceholder('Your Message').fill('Test text');
  await page.getByRole('button', { name: 'Request Callback' }).click();
});


// test consol comand: npx playwright test
// test consol comand open brouser: npx playwright test --headed
// test consol comand code inspect automatic: npx playwright codegen
// show test: npx playwright show-report