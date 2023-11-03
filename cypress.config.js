const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl:'http://item.no/',
    //baseUrl:'http://localhost:8080/',
    //viewportHeight: 550,
    viewportHeight: 1100,
    //viewportWidth: 660,
    viewportWidth: 1220,
    experimentalStudio: true
  },
});
