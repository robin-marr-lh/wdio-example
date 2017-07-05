const Page = require('./page')

class ContactPage extends Page {
  get content () { return this.main.$('p') }

  constructor () {
    super()
    this.name = 'contact-page'
    this.url = '/contact'
  }

  open () {
    super.open()
    this.main.waitForVisible()
  }
}

module.exports = new ContactPage()
