const { EmbedBuilder } = require("discord.js");
const { groups } = require("../storage/storage");

module.exports = {
  name: "checkallgroups",
  async run(bot, message, args) {
    const detailgroup = [];
    if (groups.length === 0) {
      message.channel.send("Aucun groupe n'a été créé.");
      return;
    }
    groups.forEach((group, groupName) => {
      detailgroup.push(group);
    });

    const details = detailgroup.map((grp, index) => {
      const members = grp.members;
      return {
        name: `Groupe ${grp.name}`,
        value: `Membres : ${members.join(", ")}`,
        inline: false,
      };
    });
    const embed = new EmbedBuilder()
      .setTitle("Liste des groupes créés")
      .setColor("Random")
      .addFields(details);

    message.channel.send({ embeds: [embed] });
  },
};
