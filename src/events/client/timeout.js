const { channelLink } = require("discord.js");

module.exports = {
    name: 'messageCreate',
    async execute(message) {
        String.prototype.cleanup = function() {
            return this.toLowerCase().replace(/[^a-zA-Z0-9]+/g, '');
         }
         
        const msg = message.content.cleanup();
        const fatSynonyms = ['fat', 'obese', 'plump', 'portly', 'corpulent', 'overweight', 'chubby', 'rotund', 
                            'beefy', 'pudgy', 'pleasingly plump', 'fatty', 'jiggly', 'fluffy', 'curvy', 'thick', 'wellfed', 
                            'chunky', 'hefty', 'heavy', 'bulky', 'corpulent', 'full', 'ample', 'paunchy', 'rounded', 'stout', 
                            'gravid', 'rotund', 'wellproportioned', 'plump', 'pleasingly plump', 'wellrounded', 'fleshy', 
                            'wellpadded', 'obesity', 'bmi', 'gargantuan', 'elephantine'];

        if (!message.author.bot) {
            fatSynonyms.some(element => {
                if (msg.includes(element) && message.member.manageable) {
                    message.member.timeout(60 * 1000).catch(console.error);
                    message.reply('Got yo stupid idiot ass');
                    
                } else if (msg.includes(element) && !message.member.manageable) {
                    message.reply('You\'re lucky I don\'t have the permissions to put you on timeout.');
                }
            });
        }

    }
}