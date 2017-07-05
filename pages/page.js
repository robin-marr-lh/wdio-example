const { parse: urlParse } = require('url')

class Page {
  get title () { return browser.getTitle() }
  get main () { return $('main') }
  get header () { return $('header') }
  get heading () { return $('header h1') }
  get topNav () { return $('header nav') }
  get topNavItems () { return $$('header nav a').reduce((items, item) => { items[item.getText()] = item; return items }, {}) }
  get topNavSelected () { return $('header nav span') }

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
