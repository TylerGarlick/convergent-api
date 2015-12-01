'use strict';

import {expect} from 'code';
import Hapi from 'hapi';
import HodgePodge from 'hodgepodge';
import Configuration from '../../configuration';
import Plugin from '../';


describe('Persistence Plugin', () => {

  let server;
  before(done => {
    server = new Hapi.Server();
    server.register([Configuration, Plugin], (err) => {
      if (err) return done(err);
      done();
    });
  });

  let r;
  before(() => {
    r = server.plugins.persistence.r;
    expect(r).to.be.ok;
  });

  it('sets up the rethinkdb correctly', () => {
    
  });

});
