const Discord = require('discord.js');
const { groups } = require('../storage/storage');

module.exports = {
  name: "updategroup",
  async run(bot, message, args) {
    if (args.length < 2) {
      message.channel.send('Veuillez fournir le nom du groupe et les modifications à apporter.');
      return;
    }

    const groupName = args[0];
    const group = groups.get(groupName);

    if (!group) {
      message.channel.send(`Le groupe "${groupName}" n'existe pas.`);
      return;
    }

    const action = args[1].toLowerCase();
    const membersToUpdate = args.slice(2);

    switch (action) {
      case "add":
        group.members.push(...membersToUpdate);
        message.channel.send(`Membres ajoutés au groupe "${groupName}" : ${membersToUpdate.join(', ')}`);
        break;
      case "remove":
        const removedMembers = [];
        membersToUpdate.forEach(member => {
          const index = group.members.indexOf(member);
          if (index !== -1) {
            group.members.splice(index, 1);
            removedMembers.push(member);
          }
        });
        message.channel.send(`Membres supprimés du groupe "${groupName}" : ${removedMembers.join(', ')}`);
        break;
      case "rename":
        if (membersToUpdate.length !== 1) {
          message.channel.send('Veuillez fournir le nouveau nom du groupe.');
          return;
        }
        const newGroupName = membersToUpdate[0];
        group.name = newGroupName;
        message.channel.send(`Le groupe a été renommé de "${groupName}" à "${newGroupName}".`);
        break;
      default:
        message.channel.send('Action non valide. Veuillez utiliser "add", "remove" ou "rename".');
        break;
    }
  }
};
