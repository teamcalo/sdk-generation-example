import fs from 'node:fs';

import { OpenApiGeneratorV3 } from '@asteasolutions/zod-to-openapi';
import yaml from 'yaml';

import registry from './registry';

import { route as CreateUserRoute } from './v1/route';

function getOpenApiDocumentation() {
  const generator = new OpenApiGeneratorV3([
    ...registry.definitions,
    CreateUserRoute
  ]);

  return generator.generateDocument({
    openapi: '3.0.1',
    info: {
      version: '1.0.0',
      title: 'User Service'
    }
  });
}

function writeDocumentation() {
  const docs = getOpenApiDocumentation();
  const fileContent = yaml.stringify(docs);

  fs.writeFileSync(`${__dirname}/openapi.yml`, fileContent, {
    encoding: 'utf8'
  });
}

writeDocumentation();