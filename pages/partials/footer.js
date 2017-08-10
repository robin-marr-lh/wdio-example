class Footer {
  get container () { return $('.footer') }
  get trustPilot () { return this.container.$('.trust-pilot') }
  get quickLinks () { return this.container.$('.quick-links') }
}

module.exports = Footer
