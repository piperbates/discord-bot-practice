require("dotenv").config()
const Discord = require("discord.js");
const client = new Discord.Client();

client.login(process.env.bot_token);

client.on("ready", readyDiscord);

function readyDiscord() {
  console.log("Server is running");
}

let bot = {
  trigger: "!meow",
  response: ["Meow!", "I'm a cat"],
};

client.on("message", gotMessage);

function gotMessage(msg) {
  if (msg.author.bot) {
    return;
  } else {
    const index = Math.floor(Math.random() * bot.response.length);
    if (msg.channel.id == "803043752347303969" && msg.content === bot.trigger) {
      msg.channel.send(bot.response[index]);
    }
  }
}
