const Discord = require('discord.js');
module.exports = {
        name: "purge",
        cooldown: 10,
        aliases: ["clear", "delete"],
        
    run: async(client, message, args) => {
    const amount = parseInt(args[0])

      if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You cannot delete messages bruh");
      if (!amount) return message.channel.send("Please specify the amount of messages you want me to delete")
        if (amount > 200 || amount < 1) return message.channel.send("Please select a number *between* 200 and 1")

        message.channel.bulkDelete(amount).catch(err => {
              message.channel.send('Cannot delete message further then 14 days ago. Purge failed') })

        const msg = await message.channel.send(`Deleted \`${amount}\` messages`)
        setTimeout(() => {
            msg.delete()
        }, 2000)
    }
}