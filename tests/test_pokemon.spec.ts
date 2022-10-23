import { test, expect, Page, Locator } from '@playwright/test';
import { MainLinks_HomePage } from "../ui_elements/home_page"
import { T001_TestData } from "../test_data/test_pokemon"

test('Print the Pokemon Data main menu label @T001', async ({ page, isMobile }) => {
  await page.goto('https://pokemondb.net/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("Pokémon Database -- the fastest way to get your Pokémon information");

  // Find "Data" element menu and click it

  //let links: Locator = await page.locator(MainLinks_HomePage(isMobile).POKEMON_DATA_LABEL);
  let links: Locator = await page.locator('.main-menu-list li:nth-child(1) .main-menu-title-long');
  
  //let expectedLabel: string = await T001_TestData(isMobile)
  let expectedLabel: string = "Pokémon data"
  let actualText: string = await links.innerText()
  
  await links.click()

  await new Promise((resolve) => setTimeout(resolve, 5000));
  
  await expect(actualText).toEqual(expectedLabel)
});