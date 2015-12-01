'use strict';

import {expect} from 'code';
import Hapi from 'hapi';
import Plugin from '../';

describe('Configuration Plugin', () => {

  let server;
  before(done => {
    server = new Hapi.Server();
    server.register(Plugin, (err) => {
      if (err) return done(err);
      done();
    });
  });

  let testVariable;
  beforeEach(() => {
    const value = 'testing testing 123';
    testVariable = process.env.TEST_VARIABLE = value;
    expect(testVariable).to.be.equal(value);
    expect(process.env.TEST_VARIABLE).to.be.equal(value);
  });

  let config;
  beforeEach(() => {
    config = server.plugins.configuration;
    expect(config).to.be.ok;
  });



  it('can retrieve values from an environment variable', () => {
    expect(config.get('TEST_VARIABLE')).to.be.equal(testVariable);
  });

  it('can retrieve a default value', () => {
    const db = config.get('db');
    expect(db.name).to.be.equal('convergent');
    expect(db.tables).to.not.be.empty();
  });

});
