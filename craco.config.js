const path = require("path")
const CracoLessPlugin = require('craco-less');

function resolve(url) {
  return path.resolve(__dirname, url)
}

module.exports = {
  webpack: {
    alias: {
      "@": resolve("src"),
      "utils": resolve("src/utils"),
      "components": resolve("src/components")
    }
  },
  plugins: [
    { plugin: CracoLessPlugin }
  ]
}