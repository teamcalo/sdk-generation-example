import { OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

const registry = new OpenAPIRegistry();

export const sigv4 = registry.registerComponent('securitySchemes', 'sigv4', {
  type: 'apiKey',
  name: 'Authorization',
  in: 'header',
  'x-amazon-apigateway-authtype': 'awsSigv4'
});

export default registry;