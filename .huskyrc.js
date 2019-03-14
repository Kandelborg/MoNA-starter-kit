const tasks = (arr) => arr.join(' && ')

module.exports = {
  hooks: {
    'pre-commit': tasks([
      'tslint -p tsconfig.json --config tslint.json',
      'lint-staged'
    ]),
    'commit-msg': tasks(['commitlint -E HUSKY_GIT_PARAMS'])
  }
}
