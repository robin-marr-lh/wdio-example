const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')
const chaiString = require('chai-string')
const chaiUrl = require('chai-url')
const chaiDatetime = require('chai-datetime')
const { address } = require('ip')
const { spawn } = require('child_process')
const { browserstackUser, browserstackKey } = require('./config')

let local = {}
try {
  /* enable local overrides via wdio.local.json */
  /* see wdio.local.example.json */
  /* eslint vars-on-top: 0, global-require: 0, import/no-unresolved: 0 */
  // local = require('./wdio.local.js')
} catch (err) {
  // ignore errors
}

const baseUrl = process.env.SELENIUM_BASE_URL || `http://${address()}:9876`

let app
exports.config = Object.assign({
  specs: ['./specs/**/*.js'],
  exclude: [],
  maxInstances: 2,
  baseUrl,
  // host: 'hub.docker.loveholidays.com',
  // port: 4444,
  capabilities: [{
    browserName: 'chrome',
    chromeOptions: {
      // disables ssl warnings for dev envs
      args: ['disable-web-security']
    }
  }],
  logLevel: 'silent',
  coloredLogs: true,
  screenshotPath: 'reports/screenshots',
  waitforTimeout: 10000,
  framework: 'mocha',
  reporters: ['spec', 'allure'],
  services: ['browserstack'],
  user: browserstackUser,
  key: browserstackKey,
  browserstackLocal: true,
  mochaOpts: {
    timeout: 10000
  },
  onPrepare () {
    app = spawn('node', ['server.js'], { stdio: 'inherit' })
  },
  before () {
    chai.use(chaiAsPromised)
    chai.use(chaiString)
    chai.use(chaiUrl)
    chai.use(chaiDatetime)
    global.expect = chai.expect
    global.should = chai.Should()
  },
  onComplete () {
    app.kill()
  }
}, local)
