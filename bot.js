var Discord = require('discord.js');
var botName = require('./package.json');
var bot = new Discord.Client();

bot.on('message', message =>{

    // Variables
    var sender = message.author; //The person who sent the message
    var msg = message.content;
    var prefix = ">" //The text before commands, you can put anything that you prefer

    if(message.author.id != "598197648167534632" && message.channel.id === "597329293533511691"){
        if(msg.startsWith('>', 0)){
            if(msg === prefix + "tf" && message.channel.id === "597329293533511691"){
                message.channel.send('@here **Game Is About To Start...Please React Below.....**') // Sends a message to the channel, with the content
            }
            client.on('message', message => {
	if (message.content === '!fruits') {
		message.react('🍎')
			.then(() => message.react('🍊'))
			.then(() => message.react('🍇'))
			.catch(() => console.error('One of the emojis failed to react.'));
	}
});
        }
    }
});

bot.login(process.env.BOT_TOKEN)
