
module.exports = async (client) => {

  console.log('_____________________________')
  console.log(`${client.user.tag} is ready`);
  console.log(`Servers : ${client.guilds.cache.size}`)
  console.log(`Channels : ${client.channels.cache.size}`)
  console.log(`Users : ${client.users.cache.size}`)
  console.log(`Bot ID : ${client.user.id}`)
  console.log(`Bot ping : ${client.ws.ping}`)
  console.log('_____________________________')
  client.user
    .setActivity(`Made by Domino! | Custom bots`, { type: "WATCHING" })

};