const { channelLink } = require("discord.js");

module.exports = {
    name: 'messageCreate',
    async execute(message) {
        if (message.content.includes('fat')){
            message.channel.send('You have no friends');
        }
        
    }
}