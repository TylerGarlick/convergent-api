'use strict';

const babel = require('babel-core');

module.exports = (wallaby) => {
  return {
    files: [
      'plugins/**/*',
      'lib/**/*',
      'test/**/*',
      { pattern: '**/*.tests.js', ignore: true }
    ],
    tests: [
      'plugins/**/*.tests.js',
      'test/**/*.tests.js'
    ],
    env: {
      type: 'node'
    },
    bootstrap: () => {
      require('babel-polyfill')
    },
    compilers: {
      '**/*.js': wallaby.compilers.babel({
        babel: babel,
        presets: ['es2015', "stage-0"],
        plugins: ['transform-decorators']
      })
    }
  }
};
