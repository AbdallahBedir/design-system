module.exports = {
  branches: ['develop'],
  preset: 'conventionalcommits',
  tagFormat: 'v${version}🚀',
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
      },
    ],
    '@semantic-release/github',
    [
      '@semantic-release/git',
      {
        message: 'chore(release): ${nextRelease.version} [skip ci]',
        assets: ['CHANGELOG.md'],
      },
    ],
  ],
};
