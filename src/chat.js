const Utils = require('./utils.js');

let streamTimer = new Date();

exports.HandleMessage = (channel, user, msg, client) => {
    if(msg.includes('pepeJAM') || msg.includes('d(-.-)b'))
        return client.say(channel, 'pepeJAM');

    if(msg.toLowerCase().includes('jd'))
        return client.say(channel, 'JD BloodTrail');

    if(msg.toLowerCase().includes('gachi'))
        return client.say(channel, 'gachiBASS');
    
    switch(msg.toLowerCase()) {
        case '!ping':
            client.say(channel, 'pong');
            break;
        
        case 'legia to':
            client.say(channel, 'huje');
            break;
        
        case '!uptime':
            let timePassed = Utils.GetFormatedTime(Utils.GetTimeInSeconds(streamTimer));
            client.say(channel, `Stream has been on since ${timePassed.hours}h ${timePassed.minutes}m ${timePassed.seconds}s`);
            break;
        
        default:
            break;
    }
}
