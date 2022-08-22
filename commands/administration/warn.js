const Discord = require('discord.js');
const warnShema = require('../../schemas/warn-schema.js')

module.exports = {
        name: "warn",
        cooldown: 5,
        aliases: [],
        
    run: async(client, message, args) => {


const target = message.mentions.members.first()
      if(!message.member.hasPermission('TIMEOUT_MEMBERS')) return message.channel.send('You cannot warn members');
      if(!target) return message.channel.send("Please mention the user you want to warn");

      arguments.shift()

      const guildId = message.guild.id
      const userId = message.member.id
      const reason = arguments.join(' ')

    }
}