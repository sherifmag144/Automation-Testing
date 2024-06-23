const { defineConfig } = require("cypress");

			module.exports = defineConfig({
				viewportWidth: 1500,
				viewportHeight: 800,
			  
			  reporter: 'cypress-mochawesome-reporter',    // for reports
			  reporterOptions: {
				reportDir: 'cypress/results',
				overwrite: false,
				html: true,
				json: false,
			  },
			  video: true,

			  e2e: {
			    setupNodeEvents(on, config) {
			      // implement node event listeners here
			      require('cypress-mochawesome-reporter/plugin')(on);   // for reports
			    },
			  },
			});