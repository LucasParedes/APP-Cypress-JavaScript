const { defineConfig } = require('cypress')

module.exports = defineConfig({
  viewportWidth: 1360,
  viewportWidthMobile: 375,
  video: false,
  pageLoadTimeout: 90000, // tiempo de carga de la pagina
  defaultCommandTimeout: 35000,  // tiempo para cada comando en Cypress
  requestTimeout: 90000, // tiempo para que una solicitud HTTP se complete.
  chromeWebSecurity: false, //permite realizar peticiones entre dominios diferentes durante las pruebas
  reporter: 'cypress-mochawesome-reporter',
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    reporterEnabled: 'cypress-mochawesome-reporter',
    cypressMochawesomeReporterReporterOptions: {
      reportDir: '../reports/MiMovistar',
      charts: true,
      reportTitle: 'Regresion APP Mi Movistar',
      reportPageTitle: 'Regresion Lucas',
      timestamp: 'dd-mm-yyyy HH:MM:ss',
      reportFilename: 'MiMovistar',
      saveJson: true,
      saveHtml: true
    }
  },

  e2e: {
    setupNodeEvents(on, config) {
      //return require('./cypress/plugins/index.js')(on, config)
      return config;
    },
    retries: 2, //Este comando hace que se re ejecute el caso más de 1 vez si algo falló.
    excludeSpecPattern: ['**/__snapshots__/*', '**/__image_snapshots__/*'],
  },
  env: {
    urlMiMovistar: 'https://app.movistar.com.ar/',

    //Ingreso OTP/IDP
    urlLoginIdpAni: 'login_B',
    urlLoginIdpMail: 'login_A',
  }
});
