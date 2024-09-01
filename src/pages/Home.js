import React from 'react'
import scooter from '../background-images/scooter.png'
import bustravel from '../background-images/bustravel.png'
import '../stylesheets/Home.css'

function Home() {
  return (
    <div className='Home'>
      <div className='Greetengs'>
        <h1 className='Greeting_text'>
          Вітаю на моєму сайті!
        </h1>
        <h2 className='Sub_Greeting_text'>
          Це невеликий сайт-портфоліо з моїми проєктами та лабами
        </h2>
        <div className='Projects'>
          <a href='https://bustravel.co.ua/' className='ProjectBox'>
            <div className='ImageBox'>
              <img src={bustravel} alt='' />
            </div>
            <div className='TextBox'>
              <div className='Top'>
                <span className='NameProject'>BusTravel</span>
                <span className='InfoProject'>Справжній велкиий сайт проєкт, в якому буди використані навички та знання <span className='React'>React</span>, node.js, javascript, створення серверу на <span className='Heroku'>Heroku</span> та налаштування його, підключення бази <span className='MongoDB'>MongoDB</span>, <span className='GitHub'>GitHub</span> та <span className='Netlify'>Netlify</span>.</span>
              </div>
              <span className='ToProject'><span>Подивитись проєкт</span><i class="fa-solid fa-chevron-right"></i></span>
            </div>
          </a>
          <a href='https://resonant-meerkat-8eb7d2.netlify.app/' className='ProjectBox'>
            <div className='ImageBox'>
              <img src={scooter} alt='' />
            </div>
            <div className='TextBox'>
              <div className='Top'>
                <span className='NameProject'>Scooter</span>
                <span className='InfoProject'>Невеликий сайт-проєкт, створений зі справжнього макета. Був створений задля підсумування курсу з вебтехнологій 2 курсу, 2 семестру. Написаний на <span className='html'>html</span>, <span className='css'>css</span> з дрібкою <span className='js'>javascript</span>, і розміщений на <span className='Netlify'>Netlify</span>.</span>
              </div>
              <span className='ToProject'><span>Подивитись проєкт</span><i class="fa-solid fa-chevron-right"></i></span>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Home