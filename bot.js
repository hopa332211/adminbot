const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === '-help') {
    msg.reply('يجب عليك تنزيل منشور داخل الجورب الفيس لينك https://www.facebook.com/groups/OneDropCF/ .!');
  }
});
client.login(process.env.BOT_TOKEN);
