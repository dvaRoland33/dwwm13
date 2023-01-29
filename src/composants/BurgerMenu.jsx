import React, { Component } from 'react'

export class BurgerMenu extends Component {
    render() {
      return (
        <div className="m-0 ">
          <nav className="navbar navbar-expand-lg navbar-light right degrade">
            <div className="container-fluid">
              <a href="#" className="navbar-brand">
                <img src="../src/assets/images/logo.png" height="35" alt="ChocoPAP"/>
              </a>
              <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse " id="navbarCollapse">
                <div className="navbar-nav" id="liens">
                  <a href="./index.html" className="nav-item nav-link active">Accueil</a>
                  <a href="./boutique.html" className="nav-item nav-link">Boutique</a>
                  <a id="menuPanier" href="./panier.html" className="nav-item nav-link ">Panier <span id ='quantitePanier'></span><img src='./src/assets/images/caddy.png' alt='logo du caddy' className='logoMenu'></img></a>     
                </div>
              </div>
            </div>
          </nav>
        </div>         
      )
    }
  
}
export default BurgerMenu