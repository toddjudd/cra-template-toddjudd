module.exports = [
  {
    type: 'feat',
    description: 'Features -	A new feature',
    emoji: '✨',
    newversionType: 'minor',
  },
  {
    type: 'fix',
    description: 'Bug - Fixes	A bug Fix',
    emoji: '🐛',
    newversionType: 'patch',
  },
  {
    type: 'docs',
    description: 'Documentation -	Documentation only changes',
    emoji: '📚',
    newversionType: 'patch',
  },
  {
    type: 'style',
    description:
      'Styles -	Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)',
    emoji: '💎',
    newversionType: 'patch',
  },
  {
    type: 'refactor',
    description:
      'Code - Refactoring	A code change that neither fixes a bug nor adds a feature',
    emoji: '📦',
    newversionType: 'patch',
  },
  {
    type: 'perf',
    description:
      'Performance - Improvements	A code change that improves performance',
    emoji: '🚀',
    newversionType: 'patch',
  },
  {
    type: 'test',
    description: 'Tests -	Adding missing tests or correcting existing tests',
    emoji: '🚨',
    newversionType: 'patch',
  },
  {
    type: 'build',
    description:
      'Builds -	Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)',
    emoji: '🛠',
    newversionType: 'minor',
  },
  {
    type: 'ci',
    description:
      'Continuous - Integrations	Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)',
    emoji: '⚙️',
    newversionType: 'minor',
  },
  {
    type: 'chore',
    description: "Chores -	Other changes that don't modify src or test files",
    emoji: '♻️',
    newversionType: 'patch',
  },
  {
    type: 'revert',
    description: 'Reverts -	Reverts a previous commit',
    emoji: '🗑',
    newversionType: 'minor',
  },
];
