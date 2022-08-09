import homePage from '../pages/homePage'
import phonesPage from '../pages/phonesPage'
import laptopsPage from '../pages/laptopsPage'
import cartPage from '../pages/cartPage'
import placeOrderModal from '../pages/placeOrderModal'

describe('purshase items', () => {
    beforeEach(() => {
      cy.visit('https://www.demoblaze.com/')
    })

    it('Verify user can add items to shopping cart and purshase order', () => {
      //add phone to shopping cart
      homePage.selectPhonesCategory()
      phonesPage.isPhoneDisplayed()
      phonesPage.selectPhone()
      phonesPage.addPhoneToCart()
      homePage.goToHomePage()
 
      //add laptop to shopping cart
      homePage.selectLaptopCategory()
      laptopsPage.isLaptopDisplayed()
      laptopsPage.selectLaptop()
      laptopsPage.addLaptopToCart()
      homePage.goToHomePage()
  
      //go to shopping cart
      homePage.goToShopingCart()
      cartPage.isPhoneDisplayed()
      cartPage.isLaptopDisplayed()
      cartPage.selectPlaceOrder()

      //fill payment form
      placeOrderModal.typeName('John Smith')
      placeOrderModal.typeCountry('United States')
      placeOrderModal.typeCity('San Diego')
      placeOrderModal.typeCardNumber('1111222233334444')
      placeOrderModal.typeMonth('01')
      placeOrderModal.typeYear('2026')
      placeOrderModal.selectPurshase()
      placeOrderModal.successMessageDisplayed()
      placeOrderModal.closePurshaseModal()
    })
})