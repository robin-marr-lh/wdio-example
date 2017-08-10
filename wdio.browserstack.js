// Another example config that uses browser stack instead of the selenium grid.
// You'll need to obtain the browserstack API key and username for this to work
// Perhaps someone less security concious pushed these details to github somewhwere:
// https://github.com/loveholidays/loveholidays-automation-tests/blob/421f0f8e3f26d00b97840b54f8be56fea73661b0/lh-framework/src/main/java/com/loveholidays/config/utils/BrowserType.java

const [BROWSERSTACK_USER, BROWSERSTACK_KEY] = process.env
if (!BROWSERSTACK_USER || !BROWSERSTACK_KEY) {
  throw new Error('Browserstack credentials unavailable')
}

module.exports = {
  maxInstances: 2,
  port: null,
  host: null,
  user: BROWSERSTACK_USER,
  key: BROWSERSTACK_KEY,
  services: ['browserstack'],
  capabilities: [
    { browserName: 'chrome' },
    { browserName: 'firefox' }
  ]
}
