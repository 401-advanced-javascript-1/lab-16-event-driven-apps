'use strict';

const events = require('./events.js');

events.on('fileError', errorHandler);
events.on('success', successHandler);


function successHandler(payload){
  console.log(`${payload} was saved!`);
}

console.log('in logger.js');

function errorHandler(payload){
  console.error(payload);
}

module.exports = {errorHandler, successHandler};