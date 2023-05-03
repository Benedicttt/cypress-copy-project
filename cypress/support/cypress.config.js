const { defineConfig } = require('cypress')

module.exports = defineConfig({
    videoCompression: 15,
    projectId: "1",
    browser: "chrome",
    reporter: "mochawesome",
    reporterOptions: {
        reportDir: "cypress/results",
        overwrite: false,
        html: false,
        json: true,
        record: false
    }
})