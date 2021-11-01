const Discord = require("discord.js");
exports.run = (client, message, args) => {
  let every = message.guild.roles.cache.find(r => r.name === "@everyone");
 message.channel.createOverwrite(every, {
    SEND_MESSAGES: null
  });

 const ottomancode = new Discord.MessageEmbed()
    .setAuthor("Ash")
    .setDescription(`Sohbet yazılabilir hale geldi`)
    .setFooter('açtım') 
    .setTimestamp()
    message.channel.send(ottomancode)
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  kategori: "sohbet",
  permLevel: 3
};

exports.help = {
  name: "aç",
  description: "Sohbetinizi açmaya yarar.",
  usage: "aç"
};