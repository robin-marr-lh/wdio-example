module.exports = {
  maxInstances: 10,
  waitforTimeout: 60000,
  host: 'localhost',
  capabilities: [{
    browserName: 'chrome',
    chromeOptions: {
      // disables ssl warnings for dev envs
      args: ['disable-web-security']
    }
  }, {
    browserName: 'firefox'
  }],
  services: ['selenium-standalone'],
  mochaOpts: {
    timeout: 60000
  }
}
