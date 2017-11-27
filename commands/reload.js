const main = require('../app.js');
exports.run = function(client, message, args) {
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.sendMessage("**:gordonmad: You don't have permission to use this command!**");
  let cmd = args.join(' ');
  main.reload(message, cmd);
};