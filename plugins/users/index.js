'use strict';

import pkg from './package';
import routes from './routes';

let plugin = (server, options, next) => {
  server.route(routes);
  return next();
};

plugin.attributes = pkg;

export default plugin;
