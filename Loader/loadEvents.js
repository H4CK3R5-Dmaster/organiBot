const fs = require('fs');
const colors = require('colors');

module.exports = async function loadEvents(bot) {
  fs.readdirSync('./Events').filter((file) => file.endsWith('.js')).forEach(async (file) => {
    try {
      const event = require(`../Events/${file}`);
      const eventName = file.split('.js').join('');

      bot.on(eventName, event.bind(null, bot));
      console.log(colors.blue('[EVENTS]') + ` Chargement de l'événement ${eventName}`);
    } catch (error) {
      console.error(colors.red('[EVENTS]') + ` Erreur lors du chargement de l'événement ${file}:`);
      console.error(error);
    }
  });
};