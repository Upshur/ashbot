const { MessageButton } = require('discord-buttons');
const discord = require('discord.js');
exports.run = async(client, message, args) => {
let member = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
  let reyn = message.guild.member(member)
    const embed = new discord.MessageEmbed()
    .setDescription('Banlamak İçin Aşşağıdaki Butona Tıkla')
  .setTitle('BANNN :yum:');
let enginar = new MessageButton()
  .setStyle('green')
  .setLabel('BANLA')
  .setID("click_to_function")
message.channel.send({ button: enginar, embed: embed });
client.on('clickButton', async (button) => {
  if (button.id == "click_to_function") {
    message.guild.member(reyn.id).ban();
  }
});
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    permLevel:0,
    aliases: []
    }
    exports.help = {
    name: "ban"
    } 