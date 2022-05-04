// Countdown

const currentYear = new Date().getFullYear();
const currentDay = new Date().getDay();

const toLaunch = `${currentDay + 1} Jun ${currentYear}`;

function countdown() {
    const toLaunchIn = new Date(toLaunch);
    const currentDate = new Date();

    const allSeconds = (toLaunchIn - currentDate) / 1000;
    const days = Math.floor(allSeconds / 3600 / 24);
    const hours = Math.floor(allSeconds / 3600) % 24;
    const minutes = Math.floor(allSeconds / 60) %60; 
    const seconds = Math.floor(allSeconds) % 60;

    document.querySelector('#days').innerHTML = days < 10 ? '0'+days : days;
    document.querySelector('#hours').innerHTML = hours < 10 ? '0'+hours : hours;
    document.querySelector('#minutes').innerHTML = minutes < 10 ? '0'+minutes : minutes;
    document.querySelector('#seconds').innerHTML = seconds < 10 ? '0'+seconds : seconds;
}

setInterval(countdown, 100)