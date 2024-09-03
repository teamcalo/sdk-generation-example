import type { OpenAPIDefinitions } from '@asteasolutions/zod-to-openapi/dist/openapi-registry';

import { RequestSchema, ResponseSchema } from './schemas';

export const route: OpenAPIDefinitions = {
  type: 'route',
  route: {
    method: 'post',
    path: '/v1/user',
    operationId: 'createCreate',
    summary: 'Create a user',
    request: {
      body: {
        content: {
          'application/json': {
            schema: RequestSchema
          }
        }
      }
    },
    responses: {
      '200': {
        description: '',
        content: {
          'application/json': {
            schema: ResponseSchema
          }
        }
      }
    }
  }
};