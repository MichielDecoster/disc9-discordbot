const botconfig = require("./botconfig.json");
const Discord = require("discord.js");

const bot = new Discord.Client({disableEveryone: true});
const greetingsArray = ['Hello', 'Hi', 'Waddup', 'Im enjoying memes', 'Living the goodlife'];

const fs = require('fs');
bot.messages = require('messages/messages.json')

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
    
    
    if(cmd === `${prefix}robert`){
        return message.channel.send('yoink its Robert', {
            files: [
                'memes/1.jpg',
            ]});
        }

    if(message.content.startsWith('write')){
        editedMessage = message.content.slice(6);
        
        bot.msg [message.author.username] = {
            message : editedMessage
        }
        fs.writeFile('messages/messages.json', JSON.stringify (bot.msg, null, 4));
        if(error) throw error;
        message.channel.send('Message Written to JSON');
    }
    // if(cmd === `${prefix}commands`){

    //     let fs = require(fs)
    //     let commandsJson = JSON.parse(commands.readFileSync('file', 'utf8'));
    //     let botcommands = new Discord.RichEmbed()
    //     .setDescription=('Bot commands')
    //     .setColor=('#53709e')
    //     .addfield=(commandsJson)
    //     // .addfield=('?robert')
    //     // .addfield=('?commands');
    //     return message.channel.send(botcommands);
    // }
    
});

// bot.emojis("message", async message =>{
//     if(message.author.bot) return;
//     if(message.channel.type === 'dm') return;

//     let prefix = botconfig.prefix;
//     let messageArray = message.content.split(' ');
//     let cmd = messageArray [0];
//     let args = messageArray(1);

bot.login(botconfig.token)
