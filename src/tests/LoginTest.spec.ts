import {test} from "@playwright/test";
import LoginPage from "../pages/LoginPage";


test("test", async({ page })=>{

    const loginPage = new LoginPage(page);

    await loginPage.navigateToLoginPage();
    await loginPage.fillUsername("dominikvarga70@gmail.com");
    await loginPage.fillPassword("Ac345Ksp");

    const homePage = await loginPage.clickLoginButton();
    await homePage.expectServiceTitleToBeVisible();
})