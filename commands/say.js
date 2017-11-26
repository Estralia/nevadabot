exports.run = function(client, message, args) {
	if (!message.member.hasPermission("VIEW_AUDIT_LOG")) return message.channel.sendMessage("**:angry: You don't have permission to use this command!**");
	let suffix = args.join(" ");
	if(suffix) {
		message.channel.send(suffix);
	} else {
		message.channel.send("**You have to include something for me to say! :facepalm:**");
	}
}