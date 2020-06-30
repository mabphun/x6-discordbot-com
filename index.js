const Discord = require("discord.js");
const client = new Discord.Client();

var token = "";

const prefix ="!";

client.on("ready", () =>{
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", message => {
   if(message.content.startsWith(prefix + "ping")){
    message.channel.send("pong");
   }
   
});

client.on("message", message => {
    if(message.content.startsWith(prefix + "avatar")){
        message.reply(message.author.avatarURL());
    }
})

const fs = require("fs");
const tokenFilePath = "./token.js";


function login(){
    if (fs.existsSync(tokenFilePath)){
        var tokenFile = require("./token");
        token = tokenFile.token;
    }
    else{
        token = process.env.token;
    }
    client.login(token);
}

login();