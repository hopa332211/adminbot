const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});
client.login(process.env.BOT_TOKEN);


const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'Hi') {
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
    msg.reply('Welcome Pro <3!');
  }
});
client.login(process.env.BOT_TOKEN);

const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === '-help') {
    msg.reply('Mmkn tfdl tklm 7d mn el STAFF fe el Guorp https://www.facebook.com/groups/OneDropCF/');
  }
});
client.login(process.env.BOT_TOKEN);








