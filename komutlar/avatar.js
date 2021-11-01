const dc = require('discord.js');
exports.run = (client, message, args) => {
//OTTOMAN CODE
 let ottoman = message.mentions.users.first() || message.author
 let ottomancode = new dc.MessageEmbed()
 .setImage(ottoman.avatarURL())
  message.channel.send(ottomancode)
  };
exports.conf = { name: true, guildonly: false, aliases: [], permlevel: 0}
//OTTOMAN CODE
exports.help = { name: 'avatar'}