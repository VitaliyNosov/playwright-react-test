// @ts-check
const { test, expect } = require('@playwright/test');



// test site https://v2.marketlend.com.au/

test('test-front-page-navigation', async ({ page }) => {

  page.setDefaultTimeout(60000);

  await page.goto('https://v2.marketlend.com.au/');

  const locatorTwo = page.locator('.button-front-page-custom-one');
  await locatorTwo.screenshot({ path: 'screen/image-button.png' });
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

  await page.screenshot({path: 'screen/screnshot-contact-page.jpg' });
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



// test form local:

// test 1

test('test-page-start', async ({ page }) => {

  page.setDefaultTimeout(60000);

  await page.goto('http://localhost:3000/');

  await page.screenshot({path: 'screen/screnshot-front-page.jpg' });

  await page.locator('.start-btn').click();
  
});


// test 2

test.beforeEach(async ({ page }) => {
  await test.step('navigate', async () => {

    await page.goto('http://localhost:3000/');

  });
});

test('should take screenshot', async ({ page }) => {

  const element = page.getByText('Start your Application');

  await element.evaluate(element => element.textContent = 'New text Test');

  await expect(page).toHaveScreenshot();
});

// test 3

test('test-form-step-one', async ({ page }) => {

  page.setDefaultTimeout(60000);

  await page.goto('http://localhost:3000/');

  await page.getByRole('button', { name: 'Start your Application' }).click();
  await page.getByPlaceholder('First Name').fill('Name Text');
  await page.getByPlaceholder('Last Name').fill('Last Name Text');
  await page.getByPlaceholder('Business Name').fill('Busines Name Text');
  await page.getByPlaceholder('Email').fill('emailtext@gmail.com');
  await page.locator('#mobileNumber').fill('5474569843');
  await page.locator('#agree').check();
  await page.getByRole('button', { name: 'Next' }).click();

});

// test 4

test('test-form-step-two', async ({ page }) => {

  page.setDefaultTimeout(80000);

  await page.goto('http://localhost:3000/');

  await page.getByRole('button', { name: 'Start your Application' }).click();

  await page.getByPlaceholder('First Name').fill('Name Text2');
  await page.getByPlaceholder('Last Name').fill('Last Name Text2');
  await page.getByPlaceholder('Business Name').fill('Busines Name Text2');
  await page.getByPlaceholder('Email').fill('emailtex2t@gmail.com');
  await page.locator('#mobileNumber').fill('54745698432');
  await page.locator('#agree').check();
  await page.getByRole('button', { name: 'Next' }).click();


  await page.locator('#code').fill('234563274652');
  
  await page.getByRole('button', { name: /Confirm/i}).click();

});



// test consol comand: npx playwright test
// test consol comand open brouser: npx playwright test --headed
// test consol comand code inspect automatic: npx playwright codegen
// show test: npx playwright show-report