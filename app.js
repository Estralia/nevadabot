const Discord = require('discord.js')
const client = new Discord.Client();
const settings = require('./settings.json');
require('./util/eventLoader')(client);

client.on('guildDelete', guild => {
console.log(`I have left ${guild.name} at ${new Date()}`);
});

var reload = (message, cmd) => {
    delete require.cache[require.resolve('./commands/' + cmd)];
    try {
      let cmdFile = require('./commands/' + cmd);
    } catch (err) {
      message.channel.sendMessage(`Problem booting up ${cmd}: ${err}`).then(
        response => response.delete(1000).catch(error => console.log(error.stack))
      ).catch(error => console.log(error.stack));
    }
    message.channel.sendMessage(`${cmd} restart was a success :gordonyay:!`).then(
      response => response.delete(1000).catch(error => console.log(error.stack))
    ).catch(error => console.log(error.stack));
  };
  exports.reload = reload;
  
client.login(settings.token);