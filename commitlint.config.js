/**
 * @type import("@commitlint/types").UserConfig
 */
module.exports = {
  extends: '@commitlint/config-conventional',
  rules: {
    'subject-min-length': [2, 'always'],
    'scope-enum': [2, 'always', ['web_application', 'server', 'types']],
  },
};
