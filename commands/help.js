const Discord = require('discord.js');

exports.run = function(client, message, args) {
    const embed = new Discord.RichEmbed();
    embed.setTitle("NevadaBOT Help Menu")
    .setDescription("This is the help menu for NevadaBOT, enjoy!\n The prefix for NevadaBOT is `-`")
    .addField("ping", "Tests your connection to the bot. `-ping`")
    .addField("about", "Explains some info about NevadaBOT. `-about`")
    .addField("help", "Sends this embed. `-help`")
    .addField("say", "Allows you to make the bot say whatever you want. `-say [text]`")
    .addField("fban", "A fake ban command that totally bans someone.")
    .addField("kick", "If you are a moderator this allows you to kick someone but it must be for a good reason.")
    .addField("reload", "If you are a CEO then you can reload a command.")
    .addField("agree", "If you are a new member then use this command to gain access to general chats and voice channels!")
    .addField("ban", "This command bans someone. You're allowed to ban if they break rules continously.")
    .setThumbnail("https://cdn.discordapp.com/embed/avatars/0.png")
    .setColor("#551a8b")
    message.channel.send({embed});
}