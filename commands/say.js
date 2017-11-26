exports.run = function(client, message, args) {
	let suffix = args.join(" ");
	if(suffix) {
		message.channel.send(suffix);
	} else {
		message.channel.send("**You have to include something for me to say! :facepalm:**");
	}
}