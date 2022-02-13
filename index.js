const Discord = require("discord.js")
require("dotenv").config()
const client = new Discord.Client({ intents: 32757});

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})

client.on("messageCreate", (message) => {
    const prefix = "-"
    if (!message.content.startsWith(prefix)) return;

    if(message.content === `${prefix}test`) {
        message.channel.send("Your test has worked!")
    }
})

client.login("OTQyNDgyNDU5ODU2MDgwOTA2.YglJMA.MpCgDULLGWVWj0wfwIu5Ei0lcro")