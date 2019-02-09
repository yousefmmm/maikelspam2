const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("543827634987991051")
setInterval(function() {
channel.send(`hi`);
}, 30)
})

client.login("NTQzODI0MDA3ODUwNDkxOTE1.D0CLWQ.snbLEiJdbwd-URfWjGijXcO3HuY");
