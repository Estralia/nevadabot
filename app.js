const Discord = require('discord.js')
const client = new Discord.Client();
const settings = require('./settings.json');
require('./util/eventLoader')(client);

client.on('guildDelete', guild => {
console.log(`I have left ${guild.name} at ${new Date()}`);
});

client.login(settings.token);