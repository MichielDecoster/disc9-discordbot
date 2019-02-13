const botconfig = require("./botconfig.json");
const Discord = require("discord.js");

const bot = new Discord.Client({disableEveryone: true});

bot.on("Ready", async() =>{
    console.log(`${bot.user.username} is onlin!`)
    
});

bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
    
    let prefix = botconfig.prefix;
    let messageArray = message.content.split(" ");
    let command = messageArray[0];
})

bot.login(botconfig.token);
