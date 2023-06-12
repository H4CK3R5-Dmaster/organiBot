const Discord = require('discord.js');
const { groups } = require('../storage/storage');

module.exports = {
  name: "deletegroup",
  async run(bot, message, args) {
    if (args.length === 0) {
      message.channel.send('Veuillez fournir le nom du groupe à supprimer.');
      return;
    }

    const groupName = args[0];

    if (groups.has(groupName)) {
      groups.delete(groupName);
      message.channel.send(`Le groupe "${groupName}" a été supprimé.`);
    } else {
      message.channel.send(`Le groupe "${groupName}" n'existe pas.`);
    }
  }
};
