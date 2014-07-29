exports.config = {
  allScriptsTimeout: 11000,
  specs: ['./specs/*.js'],
  capabilities: {
    'browserName': 'chrome'
  },
  chromeOnly: true,
  framework: 'jasmine',
  jasmineNodeOpts: {
    defaultTimeoutInterval: 50000
  }
};
