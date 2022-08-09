class placeOrderModal {
    elements = {
        nameInput: () => cy.get('#name'),
        countryInput: () => cy.get('#country'),
        cityInput: () => cy.get('#city'),
        cardNumberInput: () => cy.get('#card'),
        monthInput: () => cy.get('#month'),
        yearInput: () => cy.get('#year'),
        purshaseBtn: () => cy.get('button[onclick="purchaseOrder()"]'),
        successMessage: () => cy.get('.sweet-alert > h2'),
        paymentConfirmation: () => cy.get('p[class="lead text-muted "]'),
        confirmBtn:() => cy.get('.confirm')
    }

    typeName(cardName){
        this.elements.nameInput().type(cardName)
    }

    typeCountry(country){
        this.elements.countryInput().type(country)
    }

    typeCity(city){
        this.elements.cityInput().type(city)
    }

    typeCardNumber(cardNumber){
        this.elements.cardNumberInput().type(cardNumber)
    }

    typeMonth(month){
        this.elements.monthInput().type(month)
    }

    typeYear(year){
        this.elements.yearInput().type(year)
    }

    selectPurshase(){
        this.elements.purshaseBtn().click()
    }

    successMessageDisplayed(){
        this.elements.successMessage().should('have.text', 'Thank you for your purchase!')
        this.elements.paymentConfirmation().should('be.visible')
    }

    closePurshaseModal(){
        this.elements.confirmBtn().click()
    }
}

module.exports = new placeOrderModal();