const Page = require('./page')

class HomePage extends Page {
  get content () { return this.main.$('p') }

  constructor () {
    super()
    this.name = 'home-page'
    this.url = '/'
  }

  open () {
    super.open(this.url)
    this.main.waitForVisible()
    return browser
  }
}

module.exports = new HomePage()
