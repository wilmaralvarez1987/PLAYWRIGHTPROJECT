import { expect, Locator, Page } from "@playwright/test";

export class PurchaseRandom {

        private readonly itemscontainer: Locator
        private readonly expectDescription: Locator
        private readonly expectName: Locator
        private readonly expectPrice: Locator
        private readonly addcarbutton: Locator
        private readonly shoppinfLink: Locator
        private readonly checkoutLink: Locator
        private readonly actualDescription: Locator
        private readonly actualName: Locator
        private readonly actualPrice: Locator
        private expectDescriptio: string
        private expectNam: string
        private expectPric: string
        private actualDescriptio: string
        private actualNam: string
        private actualPric: string
      
       




            constructor(page: Page){
               
                this.itemscontainer = page.locator('#inventory_container .inventory_item')
                this.expectDescription = page.locator('.inventory_item_desc')
                this.expectName = page.locator('.inventory_item_name')
                this.expectPrice = page.locator('.inventory_item_price')
                this.addcarbutton = page.getByRole('button', {name: 'Add to cart'})
                this.shoppinfLink = page.locator('a.shopping_cart_link')
                this.checkoutLink = page.getByRole('link',{name: 'CHECKOUT'})
                this.actualDescription = page.locator('.inventory_item_desc')
                this.actualName = page.locator('.inventory_item_name')
                this.actualPrice = page.locator('.inventory_item_price')
            
        
            }

            async PurchaseRandom( ){

                const container = this.itemscontainer.all()
                const randomIndex = Math.floor(Math.random() * ((await container).length))
                this.expectDescriptio = await(this.expectDescription.nth(randomIndex)).innerText()
                this.expectNam = await(this.expectName.nth(randomIndex)).innerText()
                this.expectPric = await(this.expectPrice.nth(randomIndex)).innerText()

                await this.addcarbutton.nth(randomIndex).click()
                await this.shoppinfLink.click()

                this.actualDescriptio = await this.actualDescription.innerText()
                this.actualNam = await this.actualName.innerText()
                this.actualPric = '$'+ await this.actualPrice.innerText()
                       
            }

            async Assercion( ){

               await expect(this.actualDescriptio).toEqual(this.expectDescriptio)
               await expect(this.actualNam).toEqual(this.expectNam)
               await expect(this.actualPric).toEqual(this.expectPric)
                       
            }


}