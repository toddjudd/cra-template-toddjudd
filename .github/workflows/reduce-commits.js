const { existsSync } = require('fs');
const path = require('path');
const commitTypes = require('./commit-types');
const versionTypes = ['patch', 'minor', 'major'];

const event = process.env.GITHUB_EVENT_PATH
  ? require(process.env.GITHUB_EVENT_PATH)
  : {};

const determineNewVersion = (messages) => {
  let newVersion = 'patch';
  if (!messages || !messages.length) {
    return newVersion;
  }
  if (
    messages.some((message) =>
      message.match(/(MINOR)|(feat)|(build)|(ci)|(revert)/g)
    )
  ) {
    newVersion = 'minor';
  }
  if (messages.some((message) => message.match(/(BREAKING CHANGE)|(MAJOR)/g))) {
    newVersion = 'major';
  }
  return newVersion;
};

const messages = event.commits?.map((commit) => commit.message);
process.stdout.write(determineNewVersion(messages));

module.exports = determineNewVersion;
