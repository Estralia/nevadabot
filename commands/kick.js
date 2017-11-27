exports.run = function(client, message, args) {
	const Discord = require('discord.js')
	const embed = new Discord.RichEmbed();
	let member = message.mentions.members.first();
 	let reason = message.content.split(/\s+/g).slice(2).join(" ");
 	var guild = message.guild;
	if(message.mentions.users.size === 0) {
    return message.channel.sendMessage(`**${message.author} You need to mention a user! :gordonmad:**`).catch(console.error);
  }
  if(message.mentions.users.size > 1) {
    return message.channel.sendMessage(`**${message.author} You can only mention one user at one time! :gordonmad:**`).catch(console.error);
  }
  if(reason.length === 0) {
  	return message.channel.sendMessage(`**${message.author} You need to add a reason! :gordonmad:**`).catch(console.eror);
  }
  if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.sendMessage("**:gordonmad: You don't have permission to use this command!**");
  member.kick(reason);
  embed.setTitle("__User Kicked!__")
  .setColor("#551a8b")
  .setDescription(`${member} has been kicked!\n Reason: ${reason} :hammer:`)
  message.channel.send({embed});

  embed.setTitle("__Donkey has been terminated. :gordonyay:__")
  .setColor("#551a8b")
  .setDescription(`It looks like you've been kicked on ${guild.name} by ${message.author}!\n Reason: ${reason} :hammer:`)
  message.mentions.members.first().send({embed});
}