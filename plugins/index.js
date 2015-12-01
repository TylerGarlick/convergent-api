'use strict';

import Hapi from 'hapi';
import HodgePodge from 'hodgepodge';

import persistence from './persistence';
import users from './users';


const server = new Hapi.Server({
  connections: {
    router: {
      stripTrailingSlash: true
    },
    routes: {
      cors: true
    }
  },
  load: {
    sampleInterval: 1000
  }
});
const port = process.env.PORT || 3000;

server.connection({ port });

server.register(HodgePodge([
  require('blipp'),
  require('inert'),
  require('vision'),
  require('tv'),
  require('hapi-async-handler'),
  {
    register: require('good'),
    options: {
      requestHeaders: true,
      reporters: [
        {
          reporter: 'good-console',
          events: { response: '*', log: '*', error: '*'}
        }
      ]
    }
  },
  {
    register: require('hapi-swaggered'),
    options: {
      tags: {},
      info: {
        title: 'Convergent API',
        description: 'Convergent API',
        version: require('../package').version
      }
    }
  },
  {
    register: require('hapi-swaggered-ui'),
    options: {
      title: 'Convergent API',
      swaggerOptions: {
        docExpansion: 'list'
      }
    }
  },
  persistence,
  users
]), err => {
  if (err) throw err;

  server.start(() => {
    console.log(`Server started at ${server.info.uri}`);
  });

});

export default server;
