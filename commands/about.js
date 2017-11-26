const Discord = require('discord.js');

exports.run = function(client, message, args) {
    const embed = new Discord.RichEmbed();
    embed.setTitle("About")
    .setDescription("NevadaBOT is a BETA bot.")
    .setThumbnail("https://cdn.discordapp.com/embed/avatars/0.png")
    .setFooter("This bot is still in BETA, so expect commands to be broken sometimes.")
    message.channel.send({embed});
}