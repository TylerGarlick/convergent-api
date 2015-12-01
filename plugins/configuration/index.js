'use strict';

import NConf from 'nconf';
import Confidence from 'confidence';

import DefaultEnv from './env/default';

NConf.argv().env();

let plugin = (server, options, next) => {
  process.env.NODE_ENV = process.env.NODE_ENV || 'development';
  const store = new Confidence.Store(DefaultEnv);

  NConf.defaults(store.get('/', { env: process.env.NODE_ENV }));

  server.expose('get', (key) => {
    return NConf.get(key);
  });
  return next();
};

plugin.attributes = {
  pkg: require('./package')
};

export default plugin;
