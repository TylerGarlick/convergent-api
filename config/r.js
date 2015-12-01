'use strict';

import rethinkdb from 'rethinkdbdash';

export default (config = { discovery: true, db: 'convergent' }) => {
  return rethinkdb(config);
};