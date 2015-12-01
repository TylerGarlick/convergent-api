'use strict';

import Joi from 'joi';

export default [
  {
    path: '/v1/register',
    method: 'POST',
    config: {
      tags: ['api', 'v1'],
      validate: {
        payload: Joi.object({
          firstName: Joi.string().trim().required().min(2).description('First Name'),
          lastName: Joi.string().trim().required().min(2).description('Last Name'),
          email: Joi.string().email().lowercase().trim().required().description('Email'),
          password: Joi.string().trim().min(6).required().description('Password')
        })
      },
      handler: {
        async: async (req, reply) => {
          return reply({});
        }
      }
    }
  },
  {
    path: '/v1/forgot-password',
    method: 'POST',
    config: {
      tags: ['api', 'v1'],
      validate: {
        payload: Joi.object({
          email: Joi.string().email().lowercase().trim().required().description('Email')
        })
      },
      handler: {
        async: async (req, reply) => {
          return reply({});
        }
      }
    }
  }
];
