class laptopsPage {
    elements = {
        laptop: () => cy.get('a:contains("MacBook Pro")'),
        addToCartBtn: () => cy.get('.col-sm-12 > .btn')
    }

    isLaptopDisplayed(){
        this.elements.laptop().should('be.visible')
    }

    selectLaptop(){
        this.elements.laptop().click()
    }

    addLaptopToCart(){//generic add item to cart 
        this.elements.addToCartBtn().click()
    }
}

module.exports = new laptopsPage();