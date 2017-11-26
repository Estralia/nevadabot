const Discord = require('discord.js');

exports.run = function(client, message, args) {
    const embed = new Discord.RichEmbed();
    embed.setTitle("NevadaBOT Help Menu")
    .setDescription("This is the help menu for NevadaBOT, enjoy!\n The prefix for NevadaBOT is `-`")
    .addField("ping", "Tests your connection to the bot. `-ping`")
    .addField("about", "Explains some info about NevadaBOT. `-about`")
    .addField("help", "Sends this embed. `-help`")
    .setThumbnail("https://cdn.discordapp.com/embed/avatars/0.png")
    .setColor("#551a8b")
    message.channel.send({embed});
}