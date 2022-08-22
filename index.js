const keepAlive = require('./server');
const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
const { Collection } = require('discord.js');
const prefix = require('./config/bot.json');

fs.readdir('./events/', (err, files) => {
  if (err) return console.log(err);
  files.forEach(file => {
    const event = require(`./events/${file}`);
    let eventName = file.split('.')[0];
    console.log(`Loading ${eventName}.js!`);
    client.on(eventName, event.bind(null, client));
  });
});
fs.readdir("./commands/", (err, categories) => {
    if (err) console.log(err)
    console.log(`Found total ${categories.length} categories.`)
    categories.forEach(category => {
          let categoryName = category.split('.')[0];
      console.log(`Loading ${categoryName}.js!`);
fs.readdir(`./commands/${category}`, (error,files) => {
  if (error) { return console.log("error i can not find commands"); };
  files.filter(file=>file.endsWith(".js")).forEach(file => {
    const command = require(`./commands/${category}/${file}`);
    client.commands.set(command.name, command);
  })
})
    })
 })
client.config = require('./config/bot.json');
client.commands = new Discord.Collection();
client.login(process.env.token);
keepAlive();