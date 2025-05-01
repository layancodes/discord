require('dotenv').config();

const {Client, GatewayIntentBits} = require("discord.js") //needs intents 

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
      ]
    });


client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
});

client.on("messageCreate", msg => {
  if (msg.content === "i love my") {
    msg.reply("bestest boyfriend in the world mwaah");
  }
});

client.login(process.env.TOKEN)
