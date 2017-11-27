const Discord = require('discord.js');

exports.run = function(client, message, args) {
    const embed = new Discord.RichEmbed();
    let member = message.mentions.members.first();
    embed.setTitle("🔨")
    .setDescription("Bannè")
    .setDescription (`${member} got bannè™`)
    .setColor("#FF0000")
    message.channel.send({embed});
}