const Discord = require('discord.js');

  module.exports = {
        name: "serverinfo",
        cooldown: 5,
        aliases: ["info","server"],
        
    run: async(client, message, args) => {

      const name = message.guild.name
      const member = message.guild.memberCount
      const dcp = message.guild.description
      const owner = message.guild.owner.id
      const id = message.guild.id
      const embed = new Discord.MessageEmbed()
      .setTitle(`${name} Server info`)
      .addFields(
		{ name: 'Description', value: dcp },
		{ name: 'Members', value: member },
		{ name: 'Owner ID', value: owner, inline: true },
		{ name: 'Server ID', value: id, inline: true },
	)
      .setAuthor(message.author.tag)
      .setTimestamp()
      message.channel.send(embed)
    }
}