const interfaces = require('os').networkInterfaces()
const byIPv4 = (iface) => iface.family === 'IPv4'
const byInternal = (iface) => iface.internal === false

// this method dervies the current machine's ip address
// it's very crude just picking the first v4 ip found on an external interface.
module.exports = () => {
  return Object.keys(interfaces).map((ifname) => {
    return interfaces[ifname].filter(byIPv4).filter(byInternal).map(item => item.address)
  }).filter(item => item.length).map(item => item.pop()).pop()
}
