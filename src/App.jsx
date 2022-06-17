import { useState } from 'react'
import { CountdownItem } from './components/CountdownItem'

import ImgTop from './assets/images/top-image.svg'
import ImgRocket from './assets/images/rocket.svg'
import ImgBottom from './assets/images/bottom-image.svg'

import './App.css'

export function App() {
  const releaseDateOf = `22 jun 2022`; // Sua data de lançamento aqui // Your release date here

  const [days, setDays] = useState('')
  const [hours, setHours] = useState('')
  const [minutes, setMinutes] = useState('')
  const [seconds, setSeconds] = useState('')

  function countdown() {
      const forLaunch = new Date(releaseDateOf);
      const currentDate = new Date();

      const allSeconds = (forLaunch - currentDate) / 1000;
      const desiredDays = Math.floor(allSeconds / 3600 / 24)
      const desiredHours = Math.floor(allSeconds / 3600) % 24
      const desiredMinutes = Math.floor(allSeconds / 60) %60
      const desiredSeconds = Math.floor(allSeconds) % 60

      const formattedDays = desiredDays < 10 ? '0'+desiredDays : desiredDays
      const formattedHours = desiredHours < 10 ? '0'+desiredHours : desiredHours
      const formattedMinutes = desiredMinutes < 10 ? '0'+desiredMinutes : desiredMinutes
      const formattedSeconds = desiredSeconds < 10 ? '0'+desiredSeconds : desiredSeconds

      if (desiredDays < 0 || desiredHours < 0 || desiredMinutes < 0 || desiredSeconds < 0 ) {
        setDays('00')
        setHours('00')
        setMinutes('00')
        setSeconds('00')
      } else {
        setDays(formattedDays)
        setHours(formattedHours)
        setMinutes(formattedMinutes)
        setSeconds(formattedSeconds)
      }
  }

  setInterval(countdown, 100);

  const Modal = {
    open() {
      console.log('teste')
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

  return (
    <div className="container">
      <div className="top"><img src={ImgTop} alt="Enfeite do top"/></div>
    <main>
        <h1>
            Ready to launch in...
        </h1>
        <section id="countdown">
            <CountdownItem type="Dias" time={days}/>
            <span>:</span>
            <CountdownItem type="Horas" time={hours}/>
            <span>:</span>
            <CountdownItem type="Minutos" time={minutes}/>
            <span>:</span>
            <CountdownItem type="Segundos" time={seconds}/>
        </section>
        <p>
            Inscreva-se para saber mais sobre o lançamento
        </p>
        <button onClick={Modal.open}>
            Inscreva-se
        </button>
    </main>
    <div className="right">
      <img 
        src={ImgRocket} 
        alt="Imagem de um foguete decolando"
      />
    </div>
    <div className="bottom">
      <img 
        src={ImgBottom} 
        alt="Enfeite de baixo"
      />
    </div>

    <div className="modal-overlay">
        <div className="modal">
            <h1>Inscreva-se</h1>
            <form action="#" onSubmit={Modal.alert}>
                <div className="inputs">
                    <div className="name input">
                        <label htmlFor="name">Nome </label>
                        <input type="text" id="name" placeholder="Seu nome aqui" required/>
                    </div>
                    <div className="email input">
                        <label htmlFor="email">E-mail</label>
                        <input type="email" id="email" placeholder="exemplo@gmail.com" required/>
                    </div>
                </div>
                <div className="buttons">
                    <a href="#" className="button cancel" onClick={Modal.close}>
                        Cancelar
                    </a>
                    <button className="button subscribe">
                        Inscrever-se
                    </button>
                </div>
            </form>
        </div>
    </div>
    </div>
  )
}