module.exports = function (wallaby) {
  return {
    files: [
      'src/**/*.+(ts|tsx)',
      'src/**/*.scss',
      '!src/**/*-test.+(ts|tsx)',
      'test/setup/*',
    ],

    tests: [
      'src/**/*-test.+(ts|tsx)',
    ],

    compilers: {
      '**/*.+(ts|tsx)': wallaby.compilers.typeScript()
    },

    testFramework: 'mocha',

    env: {
      type: 'node',

      params: {
        env: 'NODE_ENV=test'
      }
    },

    setup: function () {
      require('./test/setup/setup-mocha');
      require('./test/setup/setup-dom');
      require('./test/setup/setup-mobx');
    }
  }
};