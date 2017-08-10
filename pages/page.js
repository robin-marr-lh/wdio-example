const { parse: urlParse } = require('url')

class Page {
  get title () { return browser.getTitle() }

  isCurrentPage () {
    return urlParse(browser.getUrl()).pathname === this.url
  }

  constructor () {
    this.url = ''
  }
  open () {
    return browser.url(`${this.url}`)
  }
}

module.exports = Page
