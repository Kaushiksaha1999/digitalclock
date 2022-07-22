let digitalClock = () => {
    let date = new Date();

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let sesson = 'am';

    if (hours == 0) {
        hours = 12;
    }
    else if (hours > 12) {
        hours = hours - 12;
        sesson = 'pm';
    }

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    document.getElementById('hours').innerHTML = hours;
    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = seconds;
    document.getElementById('amorpm').innerHTML = sesson;

    setTimeout(digitalClock, 1000);
}

digitalClock();

