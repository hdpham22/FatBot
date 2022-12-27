const { Client, GatewayIntentBits, Partials, Collection, Events } = require('discord.js');
require('dotenv/config');
const fs = require('fs');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ],
    partials: [
        Partials.User, 
        Partials.Message, 
        Partials.GuildMember,
        Partials.ThreadMember
    ]
});

client.commands = new Collection();
client.commandArray = [];

const functionFolders = fs.readdirSync('./src/functions');
for (const folder of functionFolders) {
    const functionFiles = fs
        .readdirSync(`./src/functions/${folder}`)
        .filter((file) => file.endsWith('.js'));
    for (const file of functionFiles) 
        require(`./functions/${folder}/${file}`)(client);
}

/*client.on('ready', () => {
    console.log('FatBot is online')
})*/

client.handleEvents();
client.handleCommands();

client.login(process.env.TOKEN)