import React, { Component } from 'react'
import ReactDOM from 'react-dom/client'
import '../assets/css/style.css'
import 'https://code.jquery.com/jquery-3.5.1.min.js'
import 'https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js'
import { BrowserRouter, Route, Link } from 'react-router-dom'

import Datas from '../composants/datas'
import BurgerMenu from '../composants/BurgerMenu'
import PiedsDePage from '../composants/piedsDePage'

import boutique from '../pages/boutique'
import ficheProduit from '../pages/ficheProduit'
n 


ReactDOM.createRoot(document.getElementById('rootPrincipal')).render(
    <React.StrictMode>  
      {/*<h1 className='text-center'>CHOCO PAP</h1>*/}
      <Datas 
        listeProduits = "exemple"
      />
      <BrowserRouter>
        <BurgerMenu />

        {/* gestion du contenu de page */}
            <ul className="navbar-nav mr-auto">
                <li><Link to={'/'} className="nav-link"> test </Link></li>
                <li><Link to={'/ficheProduit'} className="nav-link"> fichieProduit </Link></li>
            </ul>
            <switch>
                <Route path='/' Component={boutique}> </Route>
                <Route path='/ficheProduit' Component={ficheProduit}> </Route>

            </switch>
        </BrowserRouter>
      
      <PiedsDePage />
    </React.StrictMode>
  )