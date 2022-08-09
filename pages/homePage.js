class homePage{

    elements = {
        phonesCategory: () => cy.get('a:contains("Phones")'),
        homePageLink: () => cy.get('a:contains("Home")'),
        laptopsCategory: () => cy.get('a:contains("Laptops")'),
        cartLink: () => cy.get('#cartur')
    }

    selectPhonesCategory(){
        this.elements.phonesCategory().click()
    }

    selectLaptopCategory(){
        this.elements.laptopsCategory().click()
    }

    goToHomePage(){//add to base page
        this.elements.homePageLink().click()
    }

    goToShopingCart(){//add to base page
        this.elements.cartLink().click()
    }
}

module.exports = new homePage();