'use strict';

import Promise from 'bluebird';
import Joi from 'joi';

export default [
  {
    path: '/v1/teams',
    method: 'GET',
    config: {
      handler: {
        async: Promise.coroutine(function* (request, reply) {
          let result = yield Promise.resolve([]);
          reply(result);
        })
      }
    }
  },
  {
    path: '/v1/teams',
    method: 'POST',
    config: {
      validate: {
        payload: Joi.object({
          name: Joi.string().required().min(2).description('Team Name'),
          description: Joi.string().description('Team description'),
          members: Joi.array().unique().min(1).items(Joi.string().required()).description('Team Members'),
          isPublic: Joi.boolean().default(false).description('Is Public'),
          isActive: Joi.boolean().default(true).description('Is Active')
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
    path: '/v1/teams/:id',
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
    path: '/v1/teams/:id',
    method: 'PUT',
    config: {
      validate: {
        params: {
          id: Joi.string()
        },
        payload: Joi.object({
          name: Joi.string().required().min(2).description('Team Name'),
          description: Joi.string().description('Team description'),
          isPublic: Joi.boolean().default(false).description('Is Public'),
          isActive: Joi.boolean().default(true).description('Is Active')
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
    path: '/v1/teams/:id',
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
    path: '/v1/teams/:id/users/:userId',
    method: 'POST',
    config: {
      validate: {
        params: {
          id: Joi.string(),
          userId: Joi.string()
        },
        payload: Joi.array().items(Joi.string())
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
    path: '/v1/teams/:id/users/:userId',
    method: 'DELETE',
    config: {
      validate: {
        params: {
          id: Joi.string(),
          userId: Joi.string()
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
]