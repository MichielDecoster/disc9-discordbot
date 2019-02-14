const botconfig = require("./botconfig.json");
const Discord = require("discord.js");

const bot = new Discord.Client({disableEveryone: true});
const greetingsArray = ['Hello', 'Hi', 'Waddup', 'Im enjoying memes', 'Living the goodlife'];

//const memesArray = [images]

bot.on("Ready", async() =>{
    console.log(`${bot.user.username} is online!`);
    
});

// bot.emojis("Ready", async() =>{
//     console.log(`${bot.user.username} is online!`);
// })

bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === 'dm') return;
    
    let prefix = botconfig.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    //?say Hello

    if(cmd === `${prefix}hello`){
        theGreeting = Math.floor(Math.random()*greetingsArray.length)
        randomGreeting = greetingsArray[theGreeting]
        return message.channel.send(randomGreeting);
    }
    if (cmd === `${prefix}emoji`){
        return message.channel.send(':eggplant:');
         }
    
    
    if(cmd === `${prefix}sendmeme`){
        return message.channel.send('yoink another meme', {
            files: [
                'memes/fatmeme.jpg'
            ]})
    }
});

// bot.emojis("message", async message =>{
//     if(message.author.bot) return;
//     if(message.channel.type === 'dm') return;

//     let prefix = botconfig.prefix;
//     let messageArray = message.content.split(' ');
//     let cmd = messageArray [0];
//     let args = messageArray(1);

bot.login(botconfig.token)
