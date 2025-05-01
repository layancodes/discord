require('dotenv').config();//config reads the .env file and loads into process.env

//import discord.js
//clinet is the bot class
//gataway intent is the constants to say what type of event sto listen to 
const {Client, GatewayIntentBits} = require("discord.js") //needs intents 
/*
const discordJS = require("discord.js");
const Client = discordJS.Client;
const GatewayIntentBits = discordJS.GatewayIntentBits;
*/
//say what i want to listen to 
//the cline tobject is the bot and it talks between bot and discord server
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,//like joining or leaving 
        GatewayIntentBits.GuildMessages,//read mesages from server
        GatewayIntentBits.MessageContent//read m conent 
      ]
    });

//syntax and where does it logged in as 
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
});

client.on("messageCreate", msg => {
  if (msg.content === "i love my" && msg.author.id == "125270655141675008")  {
    msg.reply("girlfriend so much!");
  }
  else if (msg.content === "i love my" && msg.author.username == "nemeton5511")  {
    msg.reply("boyfriend so much!");
  } 
  else if (msg.content === "i think my girlfriend is" && msg.author.id == "125270655141675008")  {
    msg.reply("super smart and beautiful");
  }


});

client.login(process.env.TOKEN)
//made change
