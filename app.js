const Discord = require('discord.js')
const client = new Discord.Client();
const settings = require('./settings.json');

client.on('ready',() => {
    console.log('I\'m Online \nI\'m Online');
});

// client.on('',''=>{});

client.on('guildDelete', guild => {
console.log(`I have left ${guild.name} at ${new Date()}`);
});


var prefix = settings.prefix;

client.on('message', message => {
	if (message.content.startsWith(prefix + 'ping')) {
   		message.channel.send(`${message.author} **Pong!** Our connection is ${client.ping}ms!`);
	}
})

client.on('message', message => {
	if (message.content.startsWith(prefix + 'about')) {
		const embed = new Discord.RichEmbed();
		embed.setTitle("About")
		.setDescription("NevadaBOT is a BETA bot.")
		.setThumbnail("https://cdn.discordapp.com/embed/avatars/0.png")
		.setFooter("This bot is still in BETA, so expect commands to be broken sometimes.")
		message.channel.send({embed});
	}
})

client.on('message', message => {
	if (message.content.startsWith(prefix + 'help')) {
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
})

client.on('message', message => {
  if (message.content.startsWith(prefix + 'testcommand')) {
    const embed = new Discord.RichEmbed();
    embed.setTitle("test")
    .setDescription ("TESTER!")
    .addField ("TEST_TEST")
    .setFooter ("This bot is still in BETA, so expect commands to be broken sometimes.")
    .setThumbnail("https://cdn.discordapp.com/embed/avatars/0.png")
    .setColor("#551a8b")
    message.channel.send({embed});
  }
})

client.login(settings.token);