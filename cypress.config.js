const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "1zi9g7",
  viewportWidth: 1000,
  viewportHeight: 850,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
