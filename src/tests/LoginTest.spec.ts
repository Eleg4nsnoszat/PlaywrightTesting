import {test} from "@playwright/test";
import LoginPage from "../pages/LoginPage";
import { decyrpt, encrypt } from "../utils/CryptojsUtil";
import { encryptEnvFile } from "../utils/EncryptEnvFile";


test("test", async({ page })=>{

    const loginPage = new LoginPage(page);
    await loginPage.navigateToLoginPage();
    await loginPage.fillUsername(decyrpt(process.env.username!));
    await loginPage.fillPassword(decyrpt(process.env.password!));
    await loginPage.clickLoginButton();
    //await homePage.expectServiceTitleToBeVisible();
})

test.skip("Sample env test", async ({page})=>{
    /*const plainText = 'Hello, Mars';
    const encryptedText = encrypt(plainText);
    console.log('SALT:', process.env.SALT);
    console.log('Encrypted:', encryptedText);
    const decyrptedText = decyrpt(encryptedText);
    console.log('Decrypted:', decyrptedText);*/
    encryptEnvFile();

})