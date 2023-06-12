const Discord = require('discord.js');
const intents = new Discord.IntentsBitField(3276799)
const bot = new Discord.Client({intents})
const loadCommands = require('./Loader/loadCommands')
const loadEvents = require('./Loader/loadEvents')
const config = require('./configs/config.json')

bot.commands = new Discord.Collection()
loadCommands(bot)
loadEvents(bot)


bot.login(config.TOKEN)