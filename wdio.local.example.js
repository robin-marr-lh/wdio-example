module.exports = {
  maxInstances: 10,
  capabilities: [{
    browserName: 'chrome',
    chromeOptions: {
      binary: '/Applications/Google Chrome Canary.app/Contents/MacOS/Google Chrome Canary',
      // disables ssl warnings for dev envs
      args: ['disable-web-security', 'headless']
    }
  }, {
    browserName: 'chrome',
    chromeOptions: {
      // disables ssl warnings for dev envs
      args: ['disable-web-security']
    }
  }, {
    browserName: 'firefox'
  }]
}
