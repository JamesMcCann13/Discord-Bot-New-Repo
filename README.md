# Discord-Bot
Overview
-------------------------------------------------------------------------
This bot connects to a Discord server and monitors a specific voice channel. It notifies a designated user when someone joins the channel, but only if that user is offline. This prevents spam notifications when the user is already aware of who is in the call.

Hosting
-------------------------------------------------------------------------
The bot is ran on a free hosting site https://dashboard.render.com/ and kept online with https://uptimerobot.com/


Deployment:
-------------------------------------------------------------------------
1. Render installs dependencies:
      npm install
2. Render starts the bot:
      node BotConnector.js
3. The bot retrieves the Discord token from environment variables (stored securely in Render).
4. Bot boots up and connects to the Discord server.
5. UptimeRobot pings the bot every 5 minutes to prevent it from sleeping.


Functionality
-------------------------------------------------------------------------
Connects to a Discord server with the provided server ID.

Monitors a specific channel by ID for members joining.

Checks if the designated user is offline.

If the user is offline, sends them a direct message notifying who joined the voice channel.

Prevents sending spam notifications if the user is already aware of members in the call.
