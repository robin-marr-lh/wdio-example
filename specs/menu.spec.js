const homePage = require('../pages/home')
const aboutPage = require('../pages/about')
const contactPage = require('../pages/contact')

describe('Menu navigation', () => {
  describe('from the homepage', () => {
    beforeEach('user goes to the home page', () => {
      homePage.open()
    })

    it('clicks the about link and goes to the about page', () => {
      homePage.isCurrentPage().should.be.true
      homePage.topNavItems.about.click()
      aboutPage.isCurrentPage().should.be.true
    })

    it('clicks the contact link and goes to the contact page', () => {
      homePage.isCurrentPage().should.be.true
      homePage.topNavItems.contact.click()
      contactPage.isCurrentPage().should.be.true
    })
  })

  describe('from the about page', () => {
    beforeEach('user goes to the about page', () => {
      aboutPage.open()
    })

    it('clicks the home link and goes to the home page', () => {
      aboutPage.isCurrentPage().should.be.true
      aboutPage.topNavItems.home.click()
      homePage.isCurrentPage().should.be.true
    })

    it('clicks the contact link and goes to the contact page', () => {
      aboutPage.isCurrentPage().should.be.true
      aboutPage.topNavItems.contact.click()
      contactPage.isCurrentPage().should.be.true
    })
  })

  describe('from the contact page', () => {
    beforeEach('user goes to the contact page', () => {
      contactPage.open()
    })

    it('clicks the home link and goes to the home page', () => {
      contactPage.isCurrentPage().should.be.true
      contactPage.topNavItems.home.click()
      homePage.isCurrentPage().should.be.true
    })

    it('clicks the about link and goes to the about page', () => {
      contactPage.isCurrentPage().should.be.true
      contactPage.topNavItems.about.click()
      aboutPage.isCurrentPage().should.be.true
    })
  })
})
