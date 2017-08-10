class Header {
  get container () { return $('#masthead-wormhole') }
  get logo () { return this.container.find('.logo') }
  get usps () { return this.container('.quick-links') }
}

module.exports = Header
