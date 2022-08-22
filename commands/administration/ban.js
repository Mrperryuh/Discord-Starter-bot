const Discord = require('discord.js');

 module.exports = {
        name: "ban",
        cooldown: 5,
        aliases: [],
        
    run: async(client, message, args) => {
      const target = message.mentions.members.first()
      const banEmbed = new Discord.MessageEmbed()
      .setTitle(`${target.tag} Banned`)
      .addFields(
		{ name: 'User ID', value: target.id },
		{ name: 'Server ID', value: target.guild.id },
    { name: 'Ban author', value: message.author.tag }
	)
     .setAuthor('Ban')
     .setTimestamp()
        if(!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send('You cannot ban users!');
      if(!target.bannable) return message.channel.send('You cannot ban this user');
      if(!target.guild.owner) return message.channel.send('Bro just tried to ban the owner :skull:');
      if(!target.author) return message.channel.send('Get someone else to ban u');
      if(!target) return message.channel.send('Error: Invalid user');
      else {
        member.ban()
        message.channel.send(banEmbed)
      }
    }
}

// Note: the if's are in the wrong order, it will not cause an error but messages will send in the wrong order