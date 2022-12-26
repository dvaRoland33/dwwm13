import React, { Component } from 'react'

export class PiedsDePage extends Component {
  render() {
    return (
      <div className='container degrade'>
          <div className='row'>
                <div id="societe" className='sm-12 lg-6'>
                    <h2>Choco PAP</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores, doloribus itaque aliquid saepe assumenda fugit qui neque officia iusto obcaecati architecto inventore asperiores pariatur quisquam molestias illo. Quis, corrupti debitis.</p>
                </div>
                <div id="Contact" className='sm-12 lg-6'>
                    <h2>Contact</h2>
                    <p>Adresse: 51 rue du chocolat 75000 Paris</p>
                    <p>Téléphone: 01 23 45 67 89</p>
                    <p>Horaires: 9h00-17h00 du Lundi au Vendredi</p> 
     
                    <div className='d-flex'>
                        <a><img className='logo' src='../src/assets/images/logoFaceBook.png' alt='Facebook'/></a>
                        <a><img className='logo' src='../src/assets/images/logoInstagram.png' alt='Instagram'/></a>
                        <a><img className='logo' src='../src/assets/images/logoTweeter.png' alt='Tweeter'/></a>
                    </div> 
                </div>

          </div>
      </div>
    )
  }
}

export default PiedsDePage