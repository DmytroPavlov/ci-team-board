module.exports = {
  name: 'board',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/board',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
