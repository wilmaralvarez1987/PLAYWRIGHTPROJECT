import { test, expect } from '@playwright/test';
import { match } from 'assert';
import { LoginPage } from './pageObjectModel/LoginPage.ts';
import { PurchaseRandom } from './pageObjectModel/PurchaseRandom.ts';



test('PurchaseSau', async ({ page }) => {

   await page.goto(process.env.URL);

    const login = new LoginPage(page)
    await login.LoginSaudemo('standard_user','secret_sauce')
    const purchase = new PurchaseRandom(page)
    await purchase.PurchaseRandom()
    await purchase.Assercion()


  });