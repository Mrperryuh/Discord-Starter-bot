module.exports = {
        name: "ping",
        cooldown: 5,
        aliases: ["timetaken","latency"],
        
    run: async(client, message, args) => {
      message.channel.send("Getting ping...").then(m => m.edit(`Pong! Latency: ${client.ws.ping}`))
 
    }
};