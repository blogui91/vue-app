var
  path = require('path')

module.exports = {
  basePath: path.resolve(__dirname, '../../src/components/**/*.vue'),
  filename: path.resolve(__dirname, '../../src/components.manifest.js')
}


