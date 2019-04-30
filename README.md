
# Discord Notify
Discord Notify is a node.js application that monitors Discord and sends notifications to PushBullet when someone starts playing a new game.

## Requirements
- Discord login token. You can follow the instructions here (https://discordhelp.net/discord-token) to retrieve your token.
- PushBullet account and token.

## Setup
Edit the `config.json` file.

|  |  |
|--|--|
| `discord_token` | The Discord token |
| `pushbullet_token` | PushBullet token |
| `pushbullet_destination` | The PushBullet email address or deviceId to send notifications to. *Use an email address if you want the notification to goto all of your PushBullet devices* |
| `watching_games` | A string array of all of the games you would like to get notifications for. *All games will be watched if left blank*. |

