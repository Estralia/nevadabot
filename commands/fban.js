const Discord = require('discord.js');

exports.run = function(client, message, args) {
    const embed = new Discord.RichEmbed();
    embed.setTitle("🔨")
    .setDescription("Bannè")
    .addField("Are you sure you want to bannè")
    .setDescription ("get bannè™")
    .setColor("#FF0000")
    message.channel.send({embed});
}