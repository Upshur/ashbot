//istek üzerine
//plasmic
//cannot read property 'members' of undefined hatası alırsanız, idleri girmemişsinizdir.
//iyi kullanımlar!
const Discord = require("discord.js");

const mapping = {
  " ": "   ",
   "0": ":zero:", //emojileri falan ayarlarsınız kafanıza göre ama bunlar da çok güzel
  "1": ":one:",
  "2": ":two:",
  "3": ":three:",
  "4": ":four:",
  "5": ":five:",
  "6": ":six:",
  "7": ":seven:",
  "8": ":eight:",
  "9": ":nine:",
  "!": ":exclamation:",
  "?": ":question:",
  "#": ":hash:",
  "*": ":asterisk:"
};

let tagcik = 'ム'//sizin taginiz
"abcdefghijklmnopqr".split("").forEach(c => {
mapping[c] = mapping[c.toUpperCase()] = `:regional_indicator_${c}:`;
});

exports.run = function(client, message, args) {

let selam = message.guild.members.cache.filter(
m => m.user.presence.status === "offline"
).size; 
let offlinee = '**Çevrimdışı Kişi Sayısı: **' +
`${selam}`
.split("")
.map(c => mapping[c] || c)
.join(" ")
let plasmic = message.guild.memberCount;
let sunucu = '**Sunucudaki Kişi Sayısı: **' + 
`${plasmic}`
.split("")
.map(c => mapping[c] || c)
.join(" ")
let abcqwe = message.guild.members.cache.filter(m => !m.user.bot && m.user.presence.status !== "offline").size;;
let onlinee = '**Çevrimiçi Kişi Sayısı: **' +
`${abcqwe}`
.split("")
.map(c => mapping[c] || c)
.join(" ")

let aw = message.guild.members.cache.filter(m => m.user.username.includes(tagcik)).size
let tagg = '**Tagi Kullanan Kişi Sayısı: **' +
`${aw}`
.split("")
.map(c => mapping[c] || c)
.join("")

let keremtheartist = message.guild.members.cache.filter(
m => m.user.presence.status === "idle"
).size; 
let idlee = '**Boştaki Kişi Sayısı: **' +
`${keremtheartist}`
.split("")
.map(c => mapping[c] || c)
.join(" ")

let donotdisturb = message.guild.members.cache.filter(
m => m.user.presence.status === "dnd"
).size; 
let dndd = '**Rahatsız Etmeyindeki Kişi SayısI: **' +
`${donotdisturb}`
.split("")
.map(c => mapping[c] || c)
.join(" ")


const ciguli = message.guild.channels.cache.filter(channel => channel.type == "voice").map(channel => channel.members.size).reduce((a, b) => a + b); 
let sess = '**Sesteki Kişi Sayısı: **' +
`${ciguli}`
.split("")
.map(c => mapping[c] || c)
.join(" ")

const kizciklar = message.guild.roles.cache.get("892075763283673118").members.size //KADINROLÜNÜZÜNIDSİNİGİRİN
let kizz = '**Kadın Kullanıcıların Sayısı: **' +
`${kizciklar}`
.split("")
.map(c => mapping[c] || c)
.join(" ")



const erkekcikler = message.guild.roles.cache.get("892075764235776000").members.size; //ERKEK ROLÜNÜZÜN IDSİNİ GİRİN
let erkekk = '**Erkek Kullanıcıların Sayısı: **' +
`${erkekcikler}`
.split("")
.map(c => mapping[c] || c)
.join(" ")


const theartist = new Discord.MessageEmbed()
.setTitle(`Sunucu İstatikleri`)
.setDescription(`
${sunucu}

${tagg}

${offlinee}

${onlinee}

${idlee}

${dndd}

${sess}

${kizz}

${erkekk}
`)
.setColor("BLACK")
.setFooter(`Ash`)


message.channel.send(theartist)

};

exports.conf = {
enabled: true,
guildOnly: false,
aliases: ["gelişmiş-say"],
permLevel: 0
};

exports.help = {
name: "say",
usage: "say",
description: "sunucuyu sayar sj"
};