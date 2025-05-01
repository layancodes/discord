require('dotenv').config();

//import discord.js 
const {Client, GatewayIntentBits} = require('discord.js');
//web req for dicitonary api 
const axios = require("axios");

//make bot client 
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,//like joining or leaving 
        GatewayIntentBits.GuildMessages,//read mesages from server
        GatewayIntentBits.MessageContent//read m conent 
    ]
})

//check if bot is ready 
client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`)
  });

//respond to this comamnd 
client.on('messageCreate', async (message) => {
    //ignore bots 
    if(message.author.bot) return;

    //what about input??
    if(message.content.startsWith('define')){
        //get word
        const args = message.content.split(' ');
        const word = args[1];

        if (!word){
            message.channel.send('give word to define');
            return;
        }

        try {
        //call api
        const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
        //feteches data from url
        const response = await axios.get(url);

        //get deficiont
        const definition = response.data[0].meanings[0].definitions[0].definition;
        
        //send back to discord 
        //template string back ticks 
        message.channel.send(`${word}: ${definition}`);
        } catch (error) {
            message.channel.send('⚠️ no definition found');
          }
    }
});

client.login(process.env.TOKEN)

  //client.on("messageCreate", msg => {