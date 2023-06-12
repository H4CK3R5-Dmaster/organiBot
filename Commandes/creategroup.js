const Discord = require('discord.js');
const { groups } = require('../storage/storage');

module.exports = {
  name: "creategroup",
  async run(bot, message, args) {
    if (args.length < 4) {
      message.channel.send('Veuillez fournir les membres du groupe et le nom du groupe.');
      return;
    }

    const memberArgs = args.slice(0, -2); // Extraire les arguments des membres
    const groupNameIndex = args.indexOf('-Namegroup');

    if (groupNameIndex === -1 || groupNameIndex === args.length - 1) {
      message.channel.send('Veuillez fournir le nom du groupe avec l\'option -Namegroup.');
      return;
    }

    const groupName = args.slice(groupNameIndex + 1).join(' '); // Obtenir le nom du groupe

    // Votre code pour créer le groupe et ajouter les membres
    const group = {
      name: groupName,
      members: memberArgs
    };

    groups.set(groupName, group);

    message.channel.send(`Le groupe ${group.name} a été créé avec les membres suivants : ${group.members.join(', ')}.`);
  }
};
