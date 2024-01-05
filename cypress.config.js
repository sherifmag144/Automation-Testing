const { defineConfig } = require("cypress");

			module.exports = defineConfig({

			  reporter: 'cypress-mochawesome-reporter',    // for reports
			  video: true,

			  e2e: {
			    setupNodeEvents(on, config) {
			      // implement node event listeners here
			      require('cypress-mochawesome-reporter/plugin')(on);   // for reports
			    },
			  },
			});