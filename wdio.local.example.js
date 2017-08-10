// some example overrides
// these overrides will set timeouts to be very long to enable debugging
// but this will mean tests taking a long time to fail
// it also uses a local selenium server to enable local debugging

module.exports = {
  maxInstances: 1,
  waitforTimeout: 1e9,
  host: 'localhost',
  capabilities: [{
    browserName: 'chrome',
    chromeOptions: {
      // disables ssl warnings for dev envs
      args: ['disable-web-security']
    }
  }],
  services: ['selenium-standalone'],
  mochaOpts: {
    timeout: 1e9
  }
}
