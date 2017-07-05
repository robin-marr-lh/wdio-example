const Page = require('./page')

class AboutPage extends Page {
  get content () { return this.main.$('p') }

  constructor () {
    super()
    this.name = 'about-page'
    this.url = '/about'
  }

  open () {
    super.open()
    this.main.waitForVisible()
  }
}

module.exports = new AboutPage()
