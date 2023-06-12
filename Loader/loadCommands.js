const fs = require('fs');
const colors = require('colors');

module.exports = async function loadCommands(bot) {
  fs.readdirSync('./Commandes').filter((file) => file.endsWith('.js')).forEach(async (file) => {
    try {
      let command = require(`../Commandes/${file}`);
      if (!command.name || typeof command.name !== 'string') {
        throw new TypeError(`La commande ${file.slice(0, file.length - 3)} n'a pas de nom !`);
      }
      bot.commands.set(command.name, command);
      console.log(colors.green('[COMMANDS]') + ` La commande ${file} a chargé avec succès !`);
    } catch (error) {
      console.error(colors.red('[COMMANDS]') + ` Erreur lors du chargement de la commande ${file}:`);
      console.error(error);
    }
  });
};