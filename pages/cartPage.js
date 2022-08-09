class cartPage {
    elements = {
        laptop: () => cy.contains('td','MacBook Pro'),
        phone: () => cy.contains('td','Nexus 6'),
        placeOrderBtn: () => cy.get(".btn-success[data-target='#orderModal']")
    }

    isPhoneDisplayed(){
        this.elements.phone().should('be.visible')
    }

    isLaptopDisplayed(){
        this.elements.laptop().should('be.visible')
    }

    selectPlaceOrder(){
        this.elements.placeOrderBtn().click()
    }
}

module.exports = new cartPage();