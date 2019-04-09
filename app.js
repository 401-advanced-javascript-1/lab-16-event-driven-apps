'use strict';

const util = require('util');
const fs = require('fs');
const events = require('./events.js');
const read = util.promisify(fs.readFile);
const write = util.promisify(fs.writeFile);
require('./logger.js');

/**
 * 
 * @param {buffer} text 
 */
const toUpperCase = (text) => {
  let response = text.toString().toUpperCase();
  return Buffer.from(response);
};

/**
 * 
 * @param {text file} file 
 */
const alterFile = (file) => {
  read(file)
    .then(results => {
      return toUpperCase(results);
    })
    .then(results => {
      write(file, results);
    })
    .then( () => {
      events.emit('success', file);
    })
    .catch(err => {
      events.emit('fileError', err);
    });
      
};

let file = process.argv.slice(2).shift();
alterFile(file);

module.exports = {read, write, alterFile};
