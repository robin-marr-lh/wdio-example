const Page = require('./page')
const Header = require('./partials/header')
const Footer = require('./partials/footer')

class SearchResultsPage extends Page {
  get header () { return new Header() }
  get footer () { return new Footer() }
  /* bad selector but we have 2 main-content ids on the page 🙁  */
  get content () { return $('#main-content.col-xs-9') }
  get resultsContainer () { return this.content.$('#holidays-search-results') }
  get results () { return this.resultsContainer.$$('.new-late-deal-card') }

  constructor () {
    super()
    this.name = 'search-results-page'
    this.url = '/holidays'
  }

  open () {
    super.open(this.url)
    this.content.waitForVisible()
    return browser
  }
}

module.exports = new SearchResultsPage()
