const Discord = require('discord.js')
const config = require('../../config/bot.json')
module.exports = {
        name: "say",
        cooldown: 5,
        aliases: [],
        
    run: async(client, message, args) => {
      const descrip = args.join(' ')
      if(!descrip) return message.channel.send(`Provide text after ${config.prefix}say`)
      const sayEmbed = new Discord.MessageEmbed()
	.setAuthor(`${message.author.username}`, `${message.author.displayAvatarURL()}`)
  .setDescription(descrip)
	.setTimestamp()

      message.channel.send(sayEmbed)
      message.delete()
    }
};