/* eslint no-console: 0 */
const http = require('http')
const { join } = require('path')
const { address } = require('ip')
const { createReadStream } = require('fs')
const { cyan, yellow } = require('chalk')

const requestHandler = (req, res) => {
  switch (req.url) {
    case '/':
      res.writeHead(200, { 'Content-Type': 'text/html' })
      return createReadStream(join(__dirname, 'sample-site', 'index.html')).pipe(res)
    case '/about':
      res.writeHead(200, { 'Content-Type': 'text/html' })
      return createReadStream(join(__dirname, 'sample-site', 'about.html')).pipe(res)
    case '/contact':
      res.writeHead(200, { 'Content-Type': 'text/html' })
      return createReadStream(join(__dirname, 'sample-site', 'contact.html')).pipe(res)
    default:
      res.writeHead(404, { 'Content-Type': 'text/html' })
      return createReadStream(join(__dirname, 'sample-site', '404.html')).pipe(res)
  }
}

const currentIP = address()
const started = (hostname, port) => () => {
  const message = cyan('Server running at')
  const address = yellow(`http://${hostname}:${port}/`)
  console.log(`${message} ${address}`)
}

exports.start = (hostname = currentIP, port = 1337) => {
  http.createServer(requestHandler).listen(port, hostname, started(hostname, port))
}
