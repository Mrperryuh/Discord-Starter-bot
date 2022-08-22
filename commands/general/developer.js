const Discord = require('discord.js')
const { blue } = require('../../config/embed.json')
module.exports = {
        name: "developer",
        cooldown: 10,
        aliases: "dev",
        
    run: async(client, message, args) => {
const dev = new Discord.MessageEmbed()
	.setColor(blue)
	.setTitle('Developer info')
	.setAuthor(`${message.author.username}`, `${message.author.displayAvatarURL()}`)
	.setDescription('Hello Im Domino, the developer of this bot, It was made with Discord.js and is just a subject for my other bots!')
	.setFooter('Developer: Domimo');

message.channel.send(dev);
    }
};