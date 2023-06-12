const Discord = require('discord.js');

module.exports = async (bot) => {
  console.log('-----------------------------');
  console.log('Bot Connecté : ' + bot.user.tag);
  console.log('Serveurs : ' + bot.guilds.cache.size);
  console.log('Utilisateurs : ' + bot.users.cache.size);
  console.log('Salons : ' + bot.channels.cache.size);
  console.log('-----------------------------');

  const status = [
    `sur ${bot.guilds.cache.size} serveurs`,
    'avec des commandes personnalisées',
    'avec les utilisateurs',
  ];

  let index = 0;
  setInterval(() => {
    bot.user.setActivity(status[index], { type: 'WATCHING' });
    index = (index + 1) % status.length;
  }, 5000);

  /*const embed = new Discord.MessageEmbed()
    .setTitle('Bot Connecté')
    .setDescription(`Le bot **${bot.user.tag}** est connecté !`)
    .setColor('#00ff00')
    .addField('Serveurs', bot.guilds.cache.size, true)
    .addField('Utilisateurs', bot.users.cache.size, true)
    .addField('Salons', bot.channels.cache.size, true)
    .setTimestamp();

  const logChannel = bot.channels.cache.get('ID_DU_SALON_DE_LOGS');
  if (logChannel && logChannel instanceof Discord.TextChannel) {
    logChannel.send({ embeds: [embed] });
  }*/
};