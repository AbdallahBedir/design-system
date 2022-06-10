module.exports = {
  branches: ['main'],
  preset: 'conventionalcommits',
  plugins: [
    [
      '@semantic-release/commit-analyzer',
      {
        releaseRules: [
          {
            type: 'revert',
            release: 'patch',
          },
          {
            type: 'build',
            release: 'patch',
          },
        ],
      },
    ],
    '@semantic-release/release-notes-generator',
    [
      '@semantic-release/changelog',
      {
        changelogTitle: '# Changelog',
      },
    ],
    [
      '@semantic-release/npm',
      {
        pkgRoot: 'dist',
        npmPublish: true,
      },
    ],
    ['@semantic-release/github'],
    [
      '@semantic-release/git',
      {
        message: 'chore(release): ${nextRelease.version} [skip ci]',
        assets: ['CHANGELOG.md'],
      },
    ],
  ],
};
