# Discord Notify
Discord Notify is a node.js application that monitors Discord and sends notifications to PushBullet when someone starts playing a new game.

## Requirements
- Discord login token. You can follow the instructions here (https://discordhelp.net/discord-token) to retrieve your token.
- PushBullet account and token.

## Setup
Edit the `config.json` file.

| Config | Type | Description |
| --- | --- | --- |
| `discord_token` | String | The Discord token |
| `pushbullet_token` | String | PushBullet token |
| `pushbullet_destination` | String | The PushBullet email address or deviceId to send notifications to. *Use an email address if you want the notification to goto all of your PushBullet devices* |
| `watching_games` | String Array | A string array of all of the games you would like to get notifications for. *All games will be watched if left blank*. |
| `watching_members` | String Array | A string array of all of the member IDs you would like to get notifications for. *All members will be watched if left blank*. |
  

## Discord Member ID:
You can retrieve Discord member IDs by enabling "Developer Mode" in the Discord settings. This will allow you to "Copy ID" if you right click on any member.