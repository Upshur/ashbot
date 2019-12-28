const Discord = require("discord.js"),
      db = require(`quick.db`)

exports.run = async (client, message, args) => {
  let kişi = message.mentions.users.first()
  let para = args[1]
  if(!kişi) return message.reply(`Lütfen birini etiketle!`)
  if(!para) return message.reply(`Lütfen bir puan gir!`)
  message.channel.send(`<@${kişi.id}> adlı şahsa ${para} kadar puan eklendi!`)
  db.add(`para_${message.author.id}`, +para);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["puanekle"],
  permLevel: 4
};

exports.help = {
  name: "puan-ekle",
  description: "puan-ekle",
  usage: "puan-ekle"
};