import { test, expect, Locator } from '@playwright/test';

test('Open multiple tabs', async ({ context }) => {
    await new Promise((resolve) => setTimeout(resolve, 5000));
    const page1 = await context.newPage();
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const page2 = await context.newPage();
    await new Promise((resolve) => setTimeout(resolve, 2000));


    await page1.bringToFront()
    await page1.goto("http://www.facebook.com")
    await new Promise((resolve) => setTimeout(resolve, 2000));
    await page1.locator('#email').fill('abc@qaminds.com')
    await new Promise((resolve) => setTimeout(resolve, 1000));
    await page1.locator('button[name="login"]').click()
    await new Promise((resolve) => setTimeout(resolve, 5000));

    await page2.bringToFront()
    await page2.goto("http://www.twitter.com")
    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log(context.pages().length)
    await context.pages()[0].bringToFront()
    await new Promise((resolve) => setTimeout(resolve, 2000));
  });