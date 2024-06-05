import { Page, expect } from "@playwright/test";

export default class HomaPage{
    private readonly serviceTitleSelector = "Service";
    
    constructor(private page : Page){

    }

    async expectServiceTitleToBeVisible(){
        await expect(this.page.getByTitle(this.serviceTitleSelector)).toBeVisible({timeout : 15000});
    }

}