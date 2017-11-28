const Discord = require('discord.js');

exports.run = function(client, message, args) {
    const embed = new Discord.RichEmbed();
    embed.setTitle("Source Code")
    .setDescription("Source Code for the bot")
    .addField("https://github.com/Estralia/NevadaBOT")
    .addField("settings.json file is not included for security reasons.")
    .setColor("333BFF")
    message.channel.send({embed});
}