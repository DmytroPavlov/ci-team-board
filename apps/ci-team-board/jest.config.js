module.exports = {
  name: 'ci-team-board',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/ci-team-board',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
