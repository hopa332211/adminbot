const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'hi') {
    msg.reply('Hello!');
  }
});
client.login(process.env.BOT_TOKEN);

const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'Welcome') {
    msg.reply('Welcome Pro!');
  }
});
client.login(process.env.BOT_TOKEN);
