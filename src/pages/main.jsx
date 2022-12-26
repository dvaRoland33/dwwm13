import React from 'react'
import ReactDOM from 'react-dom/client'
import '../assets/css/style.css'
import 'https://code.jquery.com/jquery-3.5.1.min.js'
import 'https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js'
import Carousel from '../composants/carousel'
import BurgerMenu from '../composants/BurgerMenu'
import PiedsDePage from '../composants/piedsDePage'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BurgerMenu />
    <h1 className='text-center'>CHOCO PAP</h1>
    <Carousel />
    <PiedsDePage />
    
  </React.StrictMode>
)
