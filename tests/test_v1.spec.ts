import { test, expect, Locator } from '@playwright/test';

test('Print the Pokemon Data main menu label @T001', async ({ page, isMobile }) => {
  await page.goto('https://pokemondb.net/');

  // Expect title to have this Name
  await expect(page).toHaveTitle("Pokémon Database -- the fastest way to get your Pokémon information");

  // Find "Data" element menu and click it

  let link_label: Locator = await page.locator('.main-menu-list>li:nth-child(1) .main-menu-title-long');
  
  let expectedLabel: string = "Pokémon data"
  let actualText: string = await link_label.innerText()
  
  await link_label.click()

  await new Promise((resolve) => setTimeout(resolve, 1000));
  
  await expect(actualText).toEqual(expectedLabel)
});


test('Print the Pokemon Data main menu label @T002', async ({ page }) => {
  await page.goto('https://pokemondb.net/');
  await new Promise((resolve) => setTimeout(resolve, 5000));

  // Expect title to have this Name
  await expect(page).toHaveTitle("Pokémon Database -- the fastest way to get your Pokémon information");

  // Find "Data" element menu and click it

  let links: Locator = await page.locator('.main-menu-list li:nth-child(1) .main-menu-title-long');
  let link_label: Locator = await page.locator('.main-menu-list>li:nth-child(1) .main-menu-title-long');
  
  let expectedLabel: string = "Pokémon data"
  let actualText: string = await link_label.innerText()
  
  await links.click()

  await new Promise((resolve) => setTimeout(resolve, 1000));
  
  await expect(actualText).toEqual(expectedLabel)
});