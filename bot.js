const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === '-help') {
    msg.reply('mmkn ttfdl el Guorp dh fe tklm STAFF ely feh Atfdl https://www.facebook.com/groups/OneDropCF/.!');
  }
});
client.login(process.env.BOT_TOKEN);
