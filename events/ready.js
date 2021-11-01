const chalk = require("chalk");
const moment = require("moment");
const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
var prefix = ayarlar.prefix;

module.exports = async bot => {
  //bot.shard.fetchClientValues("guilds.size").then(async results => {
  //bot.shard.fetchClientValues("users.size").then(async results2 => {
//  let shardi = bot.shard.id + 1;
  var oyun = [
    "Âsh  #YETKİLİ ALIM ❤️Yusuf",
    "yapımcı Romeo",
    "Version: v0.5",
    "a.help | a.invite | a.prefix",
    "a.yardım | a.invite | a.prefix",
    //`Shard: ${shardi}/${bot.shard.count}`,
    
  ];

  setInterval(async () => {
    var random = Math.floor(Math.random() * (oyun.length - 0 + 1) + 0);

    bot.user.setActivity(oyun[random], { type: "WATCHING" });
  }, 12000);
  bot.user.setStatus("online");
  //});
  //});
};
