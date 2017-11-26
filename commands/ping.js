exports.run = function(client, message, args) {
    message.channel.send(`${message.author} **Pong!** Our connection is ${Math.floor(client.ping)}ms!`);
}