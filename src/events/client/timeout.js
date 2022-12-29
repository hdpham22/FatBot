const { channelLink } = require("discord.js");

module.exports = {
    name: 'messageCreate',
    async execute(message) {
        if (message.content.toLowerCase().includes('fat')) {
            if (message.member.manageable) {
                message.member.timeout(60 * 1000).catch(console.error);
                message.channel.send('You have no friends');
            } else {
                message.channel.send('You\'re lucky I don\'t have the permissions to put you on timeout.');
            }

        }

    }
}