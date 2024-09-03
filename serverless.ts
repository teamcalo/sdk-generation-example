import { AWS } from "@serverless/typescript";

module.exports = {
  provider: {
    name: "aws",
    runtime: "nodejs20.x",
    stage: '${opt:stage, self:custom.defaultStage}',
    deploymentMethod: 'direct',
    memorySize: 1024,
    architecture: 'arm64',
    versionFunctions: false,
    logRetentionInDays: 365,
    environment: {
      STAGE: '${sls:stage}',
      REGION: "us-east-1",
    }
  },
  plugins: ["serverless-esbuild", "serverless-iam-roles-per-function", "serverless-export-env"],
  service: "workshop-qasim",
  package: {
    individually: true
  }
} as AWS;