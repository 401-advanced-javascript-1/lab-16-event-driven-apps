'use strict';

jest.mock('fs');
const reader = require('../__mocks__/fs.js');

describe('File reader module', () => {

  it('When given a bad file, returns an error', () => {
    let file = ['bad.txt'];
    reader(file, (err, data) => {
      expect(err).toBeDefined();
    });
  });
});