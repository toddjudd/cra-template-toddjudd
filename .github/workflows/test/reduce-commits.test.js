const determineNewVersion = require('../reduce-commits');
let messages;
test('default output should return patch', () => {
  expect(determineNewVersion(null)).toMatch(/patch/);
  expect(determineNewVersion(undefined)).toMatch(/patch/);
  expect(determineNewVersion([])).toMatch(/patch/);
  expect(determineNewVersion({})).toMatch(/patch/);
  expect(determineNewVersion(messages)).toMatch(/patch/);
});
test('Messages with "MINOR" should return minor', () => {
  messages = ['MINOR'];
  expect(determineNewVersion(messages)).toMatch(/minor/);
});
test('Messages with minor type should return minor', () => {
  messages = ['feat'];
  expect(determineNewVersion(messages)).toMatch(/minor/);
});
test('Messages with "MAJOR" should return major', () => {
  messages.push('MAJOR');
  expect(determineNewVersion(messages)).toMatch(/major/);
});
test('Messages with "BREAKING CHANGE" should return major', () => {
  messages = ['BREAKING CHANGE'];
  expect(determineNewVersion(messages)).toMatch(/major/);
});
