class phonesPage {
    elements = {
        phone: () => cy.get('a:contains("Nexus 6")'),
        addToCartBtn: () => cy.get('.col-sm-12 > .btn')
    }

    isPhoneDisplayed(){
        this.elements.phone().should('be.visible')
    }

    selectPhone(index=0){
        //cy.wait(1000).then(()=>{debugger})
        this.elements.phone().should('be.visible').eq(index).click()
        //this.elements.phone().should('be.visible').click({force:true});
    }

    addPhoneToCart(){//generic add item to cart 
        this.elements.addToCartBtn().click()
    }
}

module.exports = new phonesPage();