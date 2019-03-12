/* eslint-disable no-useless-escape */
module.exports = {
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    [
      '@semantic-release/changelog',
      {
        changelogFile: 'docs/CHANGELOG.md'
      }
    ],
    [
      '@semantic-release/github',
      {
        assets: ['dist/**']
      }
    ],
    '@semantic-release/git'
  ],
  preset: 'angular'
}
