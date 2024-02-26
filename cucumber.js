/* eslint-disable @typescript-eslint/naming-convention */
const common = [
  '--require-module ts-node/register' // Load TypeScript module
];

const campus_backend = [
  ...common,
  'tests/apps/campus/backend/features/**/*.feature',
  '--require tests/apps/campus/backend/features/step_definitions/*.steps.ts'
].join(' ');

module.exports = {
  campus_backend
};
