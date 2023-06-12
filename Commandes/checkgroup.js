const Discord = require('discord.js');
const { groups } = require('../storage/storage');

module.exports = {
  name: "checkgroup",
  async run(bot, message, args) {
    if (args.length === 0) {
      message.channel.send('Veuillez fournir le nom du groupe.');
      return;
    }

    const groupNames = args;

    let membersList = '';

    groupNames.forEach(groupName => {
      const group = groups.get(groupName);

      if (group) {
        const members = group.members;
        membersList += `\nMembres du groupe ${group.name} : ${members.join(', ')}`;
      } else {
        membersList += `\nLe groupe ${groupName} n'existe pas.`;
      }
    });

    message.channel.send(membersList);
  }
};
