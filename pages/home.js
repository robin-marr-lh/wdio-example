const Page = require('./page')
const Header = require('./partials/header')
const Footer = require('./partials/footer')
const SearchUnit = require('./partials/search-unit')

class HomePage extends Page {
  get header () { return new Header() }
  get footer () { return new Footer() }
  get content () { return $('#page-content') }
  get searchUnit () { return new SearchUnit() }
  constructor () {
    super()
    this.name = 'home-page'
    this.url = '/'
  }

  open () {
    super.open(this.url)
    this.content.waitForVisible()
    return browser
  }
}

module.exports = new HomePage()
