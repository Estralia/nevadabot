const settings = require('../settings.json');

exports.run = function(client, message, args) {
	if (!settings.maintainers.includes(message.author.id)) {
		return message.channel.send(`**${message.author} Maintainers only. (AKA Estralia and Dan) :raised_hand:**`).catch(console.error);
	}
	function clean(text) {
  if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else
      return text;
	}
    try {
      const code = args.join(" ");
      let evaled = eval(code);

      if(code == "client.token") {
      	let Discord = require('discord.js');
      	var embed = new Discord.RichEmbed();
      	embed.setColor("#ffa500")
      	.setImage("https://66.media.tumblr.com/66d1a6b16dfff21ccc00d53047187916/tumblr_inline_nlvk2tmKGF1ssq8c4.gif")
      	return message.channel.send({embed});
      }

      if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);

      message.channel.send(clean(evaled), {code:"xl"});
    } catch (err) {
      message.channel.send(`\`\`\`xl\n${clean(err)}\n\`\`\``);
    }
};