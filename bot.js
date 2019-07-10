var Discord = require('discord.js');
var botName = require('./package.json');
var bot = new Discord.Client();

bot.on('message', message =>{

    // Variables
    var sender = message.author; //The person who sent the message
    var msg = message.content;
    var prefix = ">" //The text before commands, you can put anything that you prefer

    bot = commands.Bot(command_prefix='whatever_prefix_u_want_here')
}
@bot.event
async def on_message(message):
    if(message.channel.id == "597329293533511691"):
        await bot.add_reaction(message, "discord_emote_id_here")
            }
            
        }
    }
});

bot.login(process.env.BOT_TOKEN)
