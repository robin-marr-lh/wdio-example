# WDIO example project

This is an exploration of setting up a project with [webdriver.io](http://webdriver.io), using the [mocha](https://mochajs.org/) framework and [chai](http://chaijs.com/) assertions.

## Prequisites
[node](https://nodejs.org/en/download/) at version 6 and npm.

## Setup
Clone the repository and run `npm i` in the projects root, you also need [Chrome v58+](https://www.google.co.uk/chrome/browser/desktop) installed.

## Tasks
Run with `npm run <task-name>`:

* `start` - spins up a simple http server
* `lint` - run eslint against the code using [standard rules](https://standardjs.com/) (except [`no-unused-expressions`](http://eslint.org/docs/rules/no-unused-expressions) which is off because of chai)
* `reset` - delete files ignored by git ignore then reinstalls dependencies
* `clean` - delete generated files (e.g. `reports/`)
* `test` - run the tests
* `report:lint` - lint code and generate an html report
* `report:allure` - generate [allure](http://allure.qatools.ru/) reports
* `report:view` - spins up a server to view reports on [localhost:1729](localhost:1729)
* `report` - run the `report:lint` and `report:allure` tasks


## Local overrides

You can override settings in `wdio.conf.js` by creating a `wdio.local.js` file in the project root, this file will be shallow merged with the current config, see `wdio.local.example.js`.
