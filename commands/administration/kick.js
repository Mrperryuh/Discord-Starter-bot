const Discord = require('discord.js');

module.exports = {
        name: "kick",
        cooldown: 5,
        aliases: "leave",
        
    run: async(client, message, args) => {


const target = message.mentions.members.first()
      if(!target.kickable) return message.channel.send('You cannot kick this user');
      if(!target.guild.owner) return ('Never try to ban the owner bruh');
      
  if(!target) return message.channel.send('Did your seriously just try to kick yourself...');
      if (!target) {
            const embed1 = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle("Error")
            .setDescription("User does not exist in this server")
            message.channel.send(embed1);
            return
        }


            target.kick('not cool man')
            .then(async(target) => {
                
                const embed2 = new Discord.MessageEmbed()
                .setColor('#0099ff')
                .setTitle(`Kicked!`)
                .setDescription(`You've kicked ${target.tag} successfully`)
                message.channel.send(embed2);
                
            }).catch(() => {
                // Failmessage
});
    }
}