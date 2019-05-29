const Discord = require('discord.js');
const PushBullet = require('pushbullet');

const config = require('./config');
const LocalDatabase = require('./src/localDatabase');
const Presence = require('./src/presence');

const client = new Discord.Client();
const pusher = new PushBullet(config.pushbullet_token);

client.on('ready', async () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.on('presenceUpdate', (oldMember, newMember) => {
  const { user, displayName, presence } = newMember;
  const game = (presence.game) ? presence.game.name : '';
  const changes = LocalDatabase.updateUser(user.id, displayName, presence.status, game);
  if (changes) {
    const action = Presence.generatePresenceChangeAction(changes);
    if (action) {
      pusher.note(config.pushbullet_destination, changes.displayName, changes.game, (error, response) => {
        if (error) {
          console.log('pusher error', error);
        }
      });
    }
  }
});

client.on('error', error => {
  console.log('error:', error.message);
});

client.login(config.discord_token);