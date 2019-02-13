const botconfig = require("./botconfig.json");
const Discord = require("discord.js");

const bot = new Discord.Client({disableEveryone: true});

bot.on("Ready", async() =>{
    console.log(`${bot.user.username} is onlin!`)
})

bot.login(botconfig.token);
