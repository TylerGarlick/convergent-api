'use strict';

import Promise from 'bluebird';
import Joi from 'joi';
import r from '../config';

export default [
  {
    path: '/v1/users',
    method: 'GET',
    config: {
      handler: {
        async: Promise.coroutine(function* (request, reply) {
          let result = yield r.table('users').run();
          reply(result);
        })
      }
    }
  },
  {
    path: '/v1/users',
    method: 'POST',
    config: {
      validate: {
        payload: Joi.object({
          firstName: Joi.string().min(1).required().trim().description('First Name'),
          lastName: Joi.string().min(1).required().trim().description('Last Name'),
          email: Joi.string().email().lowercase().required().trim().description('Email'),
          password: Joi.string().min(6).required().description('Password'),
          isActive: Joi.boolean().default(true).description('Active')
        })
      },
      handler: {
        async: Promise.coroutine(function* (request, reply) {
          let result = yield Promise.resolve(request.payload);
          reply(result);
        })
      }
    }
  },
  {
    path: '/v1/users/:id',
    method: 'GET',
    config: {
      validate: {
        params: {
          id: Joi.string()
        }
      },
      handler: {
        async: Promise.coroutine(function* (request, reply) {
          let result = yield Promise.resolve({});
          reply(result);
        })
      }
    }
  },
  {
    path: '/v1/users/:id',
    method: 'PUT',
    config: {
      validate: {
        params: {
          id: Joi.string()
        },
        payload: Joi.object({
          firstName: Joi.string().min(1).required().trim().description('First Name'),
          lastName: Joi.string().min(1).required().trim().description('Last Name'),
          email: Joi.string().email().required().lowercase().trim().description('Email'),
          password: Joi.string().min(6).optional().description('Password'),
          isActive: Joi.boolean().default(true).description('Active')
        })
      },
      handler: {
        async: Promise.coroutine(function* (request, reply) {
          let result = yield Promise.resolve({});
          reply(result);
        })
      }
    }
  },
  {
    path: '/v1/users/:id',
    method: 'DELETE',
    config: {
      validate: {
        params: {
          id: Joi.string()
        }
      },
      handler: {
        async: Promise.coroutine(function* (request, reply) {
          let result = yield Promise.resolve({});
          reply(result);
        })
      }
    }
  },
  {
    path: '/v1/users/:id/teams',
    method: 'GET',
    config: {
      validate: {
        params: {
          id: Joi.string()
        }
      },
      handler: {
        async: Promise.coroutine(function* (request, reply) {
          let result = yield Promise.resolve({});
          reply(result);
        })
      }
    }
  }
];