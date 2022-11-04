import { test, expect, Page, Locator } from '@playwright/test';
import { MainLinks_HomePage } from "../ui_elements/home_page"
import { T001_TestData } from "../test_data/test_pokemon"

test('Print the Pokemon Data main menu label @T003', async ({ page, isMobile }) => {
    await page.goto('https://pokemondb.net/');
  
    // Expect title to have this Name
    await expect(page).toHaveTitle("Pokémon Database -- the fastest way to get your Pokémon information");
  
    // Find "Data" element menu and click it
  
    let links: Locator = await page.locator(MainLinks_HomePage(isMobile).POKEMON_DATA_LINK);
    let link_label: Locator = await page.locator(MainLinks_HomePage(isMobile).POKEMON_DATA_LABEL);
    
    let expectedLabel: string = await T001_TestData(isMobile)
    let actualText: string = await link_label.innerText()
    
    await links.click()
  
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    await expect(actualText).toEqual(expectedLabel)
  });