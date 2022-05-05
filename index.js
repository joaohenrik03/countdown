// Countdown

const releaseDateOf = `11 jun 2022`; // Sua data de lançamento aqui // Your release date here

function countdown() {
    const forLaunch = new Date(releaseDateOf);
    const currentDate = new Date();

    const allSeconds = (forLaunch - currentDate) / 1000;
    const days = Math.floor(allSeconds / 3600 / 24);
    const hours = Math.floor(allSeconds / 3600) % 24;
    const minutes = Math.floor(allSeconds / 60) %60; 
    const seconds = Math.floor(allSeconds) % 60;
    
    if (days < 0 || hours < 0 || minutes < 0 || seconds < 0) {
        document.querySelector('#days').innerHTML = '00';
        document.querySelector('#hours').innerHTML = '00';
        document.querySelector('#minutes').innerHTML = '00';
        document.querySelector('#seconds').innerHTML = '00';
    } else {
        document.querySelector('#days').innerHTML = days < 10 ? '0'+days : days;
        document.querySelector('#hours').innerHTML = hours < 10 ? '0'+hours : hours;
        document.querySelector('#minutes').innerHTML = minutes < 10 ? '0'+minutes : minutes;
        document.querySelector('#seconds').innerHTML = seconds < 10 ? '0'+seconds : seconds;
    }  
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