module.exports = function(config) {
  config.set({
    browsers: ['ChromeHeadless'],
    singleRun: true,
    basePath: '',
    files: ['tests/dist/index.js'],

    frameworks: ['mocha', 'chai'],
    reporters: ['mocha', 'coverage', 'progress'],
    client: {
      mocha: {
        ui: 'bdd',
        timeout: 5000,
        slow: 250
      }
    },
    coverageReporter: {
      type : 'html',
      dir : 'coverage/'
    }

  });
};
