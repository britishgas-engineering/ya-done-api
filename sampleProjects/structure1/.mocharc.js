'use strict';
//Getting the current Time to create Folder to save the evidences
var today = new Date();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

module.exports = {
  diff: true,
  extension: ['js'],
  require: [
    '@babel/polyfill', '@babel/register'
  ],
  package: './package.json',
  reporter: 'mochawesome',
  'reporter-options': [
    `inlineAssets=true`,
    `reportDir=mochawesome-report/${time}`,
    `reportFilename=API-Automation-Test-Report`
  ],
  timeout: 60000,
  slow: '1000'
};