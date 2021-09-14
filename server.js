const { Client } = require("discord.js");
const {
  AbortController
} = require("abortcontroller-polyfill/dist/cjs-ponyfill");
const client = new Client({ intents: 513 });
const smartestchatbot = require("smartestchatbot");
const x = new smartestchatbot.Client();
client.on("ready", () => {
  console.log("Ready for chatting!| Bot by XR7");
});
client.on("messageCreate", async message => {
  // when client detects a message
  if (message.author.bot) return; // if the author of the message is a bot ignore the case
   if (message.content.length == 0 || message.content.split(" ")[0] != "O")https://glitch.com/ return;
  message.content = message.content
    .replace(/@(everyone)/gi, "everyone")
    .replace(/@(here)/gi, "here");
  if (message.content.includes(`@`)) {
    return message.reply({
      content: `**:x: Please dont mention anyone while talking to me I feel attacked 😭**`,
      ephemeral: true
    });
  }
  if (!message.content)
    return message.reply({
      content: "I can only reply to text messages",
      ephemeral: true
    });
  x.chat({
    message: message.content,
    name: client.user.username,
    owner: "mike",
    user: message.author.id,
    language:"fr"
  }).then(reply => {
    message.channel.sendTyping();
    message.reply(`${reply}`);
  });
});
client.login(process.env.TOKEN); //login using the token
global.AbortController = AbortController;
