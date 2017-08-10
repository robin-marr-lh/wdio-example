class SearchUnit {
  get container () { return $('#home-search-horizontal-module') }
  get button () { return this.container.$('.search-action') }

  isReady () {
    this.button.waitForVisible()
  }
}

module.exports = SearchUnit
