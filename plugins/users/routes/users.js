'use strict';

import Joi from 'joi';

export default [
  {
    path: '/v1/users',
    method: 'GET',
    config: {
      tags: ['api', 'v1'],
      handler: {
        async: async (req, reply) => {
          return reply({});
        }
      }
    }
  }
];
