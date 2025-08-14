const { Client, GatewayIntentBits } = require('discord.js');
require('dotenv').config();

const BOT_TOKEN = process.env.BOT_TOKEN; // Replace with your bot token
const GENERAL_CHANNEL_ID = '1358550826788065435';
const USERID = '696071031953162270'; //XThejamabronX
const GUILDID = '881620734269591603'; //XThejamabronX's server

const client = new Client({ intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildVoiceStates,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildPresences,
] });

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.login('');

function sendToChannel(channelId, message) {
    const channel = client.channels.cache.get(channelId);
    if (channel) {
        channel.send(message)
            .catch(console.error);
    } else {
        console.error(`Channel with ID ${channelId} not found.`);
    }
}

function checkUserStatus(guildID, userId) {
    const guild = client.guilds.cache.get(guildID);
    const member = guild.members.cache.get(userId);
    const status = member.presence?.status ?? 'offline'; // Default to 'offline' if no presence is available
    console.log(`User ${userId} status: ${status}`);
    if (status === 'offline') {
        return true;
    }
}


function sendToUser(userId, message) {
    const user = client.users.cache.get(userId); //retruns user as true if user is found 
    if (user) {
        user.send(message)
            .catch(console.error);
    } else {
        console.error(`User with ID ${userId} not found.`);
    }
}


client.on('messageCreate', message => {
    if (message.content === '!ping') {
        message.channel.send('Pong!');
    }
});

client.on('voiceStateUpdate', (oldState, newState) => {
    if (!oldState.channelId && newState.channelId) {
        // User joined a voice channel
        if(checkUserStatus(GUILDID, USERID)) {
            sendToUser(USERID, `${newState.member.user.tag} joined ${newState.channel.name}`);
        }
    }

});