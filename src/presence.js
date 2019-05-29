const config = require('../config');
const moment = require('moment');

function generatePresenceChangeAction(changes) {
  const followingGames = config.watching_games || [];
  const followingMembers = config.watching_members || [];

  if (changes.game) {
    const includesGame = (followingGames.length === 0 || followingGames.includes(changes.game));
    const includesMember = (followingMembers.length === 0 || followingMembers.includes(changes.id));
    if (includesGame) {
      console.log(`${moment.format()}: ${changes.displayName} started playing ${changes.game}`);
    }
    if (includesGame && includesMember) {
      return changes;
    }
  }

  return null;
}

module.exports = {
  generatePresenceChangeAction
};