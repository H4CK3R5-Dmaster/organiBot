const Discord = require('discord.js')
const configprefix = require('../configs/prefix.json')
module.exports = async (bot, message) => { 

    let Messagearray = message.content.split(" ")
    let commandName = Messagearray[0].slice(configprefix.prefix.length)
    let args = Messagearray.slice(1)

    if(!message.content.startsWith(configprefix.prefix)) return;

    let command = require(`../Commandes/${commandName}`)
    if(!command) return;

    command.run(bot, message, args)
}