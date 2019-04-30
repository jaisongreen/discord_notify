let users = {};

function getUserById(id) {
  const user = users[id];
  return user || {};
}

function updateUser(id, displayName, status, game) {
  const user = this.getUserById(id);
  const updatedUser = { displayName, status, game };
  let changes = { id, displayName };
  if (user.status !== status) {
    changes.status = status;
  }
  if (game && user.game !== game) {
    changes.game = game;
  }
  if (user.status !== status || user.game !== game) {
    users[id] = updatedUser;
    return changes;
  }
  return null;
}


module.exports = {
  getUserById,
  updateUser
}