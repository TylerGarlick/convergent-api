'use strict';

import rethinkdb from 'rethinkdbdash';
import pkg from './package';

let plugin = (server, options, next) => {

  const config = server.plugins.configuration;
  console.log(config.get('db'));

  let dbConfig = config.get('db');
  if(typeof(dbConfig.servers) !== 'array'){
    delete dbConfig.servers;
  }
  //const db = rethinkdb(dbConfig);
  //server.expose('r', db);

  return next();
};

plugin.attributes = pkg;

export default plugin;
