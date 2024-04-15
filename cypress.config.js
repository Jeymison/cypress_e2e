const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/relatorio', // crie a pasta para alocar os relatorios
    overwrite: true, // subescreve os arquivos para nao gerar novos
    hmtl: true,
    json: false, // para nao criar arquivos Json
    timestamp: 'ddmmyyyy_HHMMss' // data
  }
}); 
