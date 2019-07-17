const TMI   = require('tmi.js');
const Chat  = require('./chat.js');
const Utils = require('./utils.js');

const OPTIONS = {
    options: {
        debug: true
    },

    connection: {
        cluster: 'aws',
        reconnect: true
    },

    identity: {
        username: '<Bot Username>',
        password: '<Bot OAuth>'
    },

    channels: [
        '<Channels that bot connetcs to>'
    ]
};

const client         = new TMI.client(OPTIONS);
let timerBetweenCmds = new Date();

client.connect();

client.on('connected', (addr, port) => {
    console.log('Connected!');
});

client.on('chat', (channel, user, msg, self) => {
    if(self)
        return;
    
    if(Utils.GetTimeInSeconds(timerBetweenCmds) > 2) {
        Chat.HandleMessage(channel, user, msg, client);

        timerBetweenCmds = new Date();
    }
})