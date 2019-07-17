exports.GetFormatedTime = (_seconds) => {
    let _minutes = Math.floor(_seconds / 60);
    _seconds -= _minutes * 60;

    let _hours = Math.floor(_minutes / 60);
    _minutes -= _hours * 60;

    return {hours: _hours, minutes: _minutes, seconds: _seconds};
}

exports.GetTimeInSeconds = (timer) => {
    let currTime = new Date();

    return Math.round((currTime - timer) / 1000);
}