  
import discord
from discord.ext    import commands
from discord.ext.commands   import Bot
import asyncio
 
bot = commands.Bot(command_prefix='h')
 
@bot.event
async def on_ready():
    print ("whatever_text_u_want_here")
 
 
@bot.event
async def on_message(message):
    if(message.channel.id == "597329293533511691"):
        await bot.add_reaction(message, "<:2_:598536073999548429>")
 
 
bot.run("NTk4MTk3NjQ4MTY3NTM0NjMy.XSYIww.XYXf0pG_7hHrSso_gji-NzTyUu4")
