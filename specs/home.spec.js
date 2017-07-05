const homePage = require('../pages/home')

describe('Home page', () => {
  before('user goes to the home page', () => {
    homePage.open()
  })

  it('has the correct title', () => {
    homePage.title.should.endWith('home')
  })

  it('has the correct menu item selected', () => {
    homePage.topNavSelected.getText().should.be.string('home')
  })

  it('has links to other pages', () => {
    Object.keys(homePage.topNavItems).should.have.length(2)
    homePage.topNavItems.about.getText().should.be.string('about')
    homePage.topNavItems.contact.getText().should.be.string('contact')
  })

  it('has the home page content', () => {
    homePage.content.getText().should.startWith('this is the home page')
  })
})
