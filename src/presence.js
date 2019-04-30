const config = require('../config');

function generatePresenceChangeMessage(changes) {
  let outputChanges = [];
  if (changes.status) {
    outputChanges.push(`status changed to ${changes.status}`);
  }
  if (changes.game) {
    outputChanges.push(`started playing ${changes.game}`);
  }
  if (outputChanges.length > 0) {
    return `${changes.displayName}: ${outputChanges.join(' and ')}`;
  }
  return null;
}

function generatePresenceChangeAction(changes) {
  const followingGames = config.watching_games || [];

  if (changes.game) {
    if (followingGames.length === 0 || followingGames.includes(changes.game)) {
      return changes;
    }
  }

  return null;
}

module.exports = {
  generatePresenceChangeMessage,
  generatePresenceChangeAction
};
