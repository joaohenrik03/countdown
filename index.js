// Countdown

const currentYear = new Date().getFullYear();
const currentDay = new Date().getDay();

const releaseDateOf = `${currentDay + 1} Jun ${currentYear}`;

function countdown() {
    const forLaunch = new Date(releaseDateOf);
    const currentDate = new Date();

    const allSeconds = (forLaunch - currentDate) / 1000;
    const days = Math.floor(allSeconds / 3600 / 24);
    const hours = Math.floor(allSeconds / 3600) % 24;
    const minutes = Math.floor(allSeconds / 60) %60; 
    const seconds = Math.floor(allSeconds) % 60;

    document.querySelector('#days').innerHTML = days < 10 ? '0'+days : days;
    document.querySelector('#hours').innerHTML = hours < 10 ? '0'+hours : hours;
    document.querySelector('#minutes').innerHTML = minutes < 10 ? '0'+minutes : minutes;
    document.querySelector('#seconds').innerHTML = seconds < 10 ? '0'+seconds : seconds;
}

setInterval(countdown, 100);

// Modal

const Modal = {
    open() {
        document.querySelector('.modal-overlay').classList.add('show');
    },
    close() {
        document.querySelector('.modal-overlay').classList.remove('show');
    },
    alert() {
        window.alert(`
            Inscrição realizada com sucesso!
            Você irá receber novas atualizações pelo seu e-mail!
            #Let'sSakeOff
        `)
    }
}