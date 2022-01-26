const { existsSync } = require('fs');
const path = require('path');
const commitTypes = require('./commit-types');
const versionTypes = ['patch', 'minor', 'major'];

const event = process.env.GITHUB_EVENT_PATH
  ? require(process.env.GITHUB_EVENT_PATH)
  : require('./test-env.json');

if (!event.commits) {
  console.log(
    "Couldn't find any commits in this event, incrementing patch version..."
  );
}

const newVersion = event.commits.some((commit) =>
  commit.message.match(/BREAKING CHANGE/gim)
)
  ? 'major'
  : versionTypes[
      Math.max(
        ...event.commits.map((commit) =>
          versionTypes.findIndex(
            (vt) =>
              vt ==
              commitTypes.find(
                (t) => t.type === commit.message.split(/\(|\:/)[0]
              ).newversionType
          )
        )
      )
    ];

process.stdout.write(newVersion || 'broken');
