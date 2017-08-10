const homePage = require('../pages/home')
const searchResultsPage = require('../pages/search-results')

describe('Simple search', () => {
  before('user goes to the home page', () => {
    homePage.open()
    homePage.isCurrentPage()
    homePage.searchUnit.isReady()
  })

  it('has the correct title', () => {
    homePage.title.should.startWith('Loveholidays')
    homePage.title.should.endWith('Discover and book your perfect holiday')
  })

  it('allows the user to search', () => {
    homePage.searchUnit.button.click()
    searchResultsPage.isCurrentPage()
  })

  it('shows 10 search results', () => {
    searchResultsPage.results.should.have.lengthOf(10)
  })
})
