var Discord = require('discord.js');
var botName = require('./package.json');
var bot = new Discord.Client();

bot.on('message', message =>{

    // Variables
   if(message.author.id != "598197648167534632" && message.channel.id === "597329293533511691"){
        if(msg.startsWith('>', 0)){
            if(msg === prefix + "tf" && message.channel.id === "597329293533511691"){
}
@bot.event
async def on_message(message):
    if(message.channel.id == "597329293533511691"):
        await bot.add_reaction(message, "\:white_check_mark: ")
            }
            
        }
    }
});

bot.login(process.env.BOT_TOKEN)
