import { Locator, Page } from "@playwright/test";


export class LoginPage {

    private readonly usernameTextbox: Locator
    private readonly userpasswordTextbox: Locator
    private readonly loginButton: Locator

    constructor(page: Page){
       
        this.usernameTextbox = page.getByRole('textbox', {name:'Username'})
        this.userpasswordTextbox = page.getByRole('textbox', {name:'Password'})
        this.loginButton = page.getByRole('button', {name:'Login'})   

    }

    async LoginSaudemo(userName: string, userPassword: string ){

        await this.usernameTextbox.fill(userName)
        await this.userpasswordTextbox.fill(userPassword)
        await this.loginButton.click()

    }

}