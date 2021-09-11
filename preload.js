// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
const Path = require('path')
const Config = require(Path.join(__dirname, 'config.js'))

window.addEventListener('DOMContentLoaded', () => {
    document.getElementById('host').innerHTML = "can't find the server at " + Config.host + ':' + Config.port
})