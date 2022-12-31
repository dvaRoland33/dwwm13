import React, { Component, useState } from 'react'
import ReactDOM from 'react-dom/client'
import '../assets/css/style.css'
import 'https://code.jquery.com/jquery-3.5.1.min.js'
import 'https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js'
import BurgerMenu from '../composants/BurgerMenu'
import PiedsDePage from '../composants/piedsDePage'
import CreationFiltre from '../composants/creationFiltre'
import Datas from '../composants/datas'
/* fonctions spécifiques */
import ajouteElementDom from '../assets/js/ajouteElementDom'
import reconstruitNomImage from '../assets/js/reconstruitNomImage'
import extraitNomImage from '../assets/js/extraitNomImage'
import ajouteElementDomImg from '../assets/js/ajouteElementDomImg'
import listerProduits from '../assets/js/listerProduits'
import ajouterAuPanier from '../assets/js/ajouterAuPanier'
import gererFiltre from '../assets/js/gererFiltre'

var listeProduits =[]
var panier=[]

var listeProduitsSelectionnes = []
var cheminOrigine =document.location.origin
/*on récupére le fichier JSON des produits*/
 window.onload = function(){
     var chemin=cheminOrigine+'/src/assets/products.json'
     $.get(chemin,function(data){
        listeProduits= data
        console.log('lecture JSON'+listeProduits)
        listerProduits(listeProduits)
      })
 }

 function filtre(){
   gererFiltre(listeProduits)
 }
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <Datas 
        listeProduits = "exemple"
      />
      <BurgerMenu />
      <div className='container'>
        <h1 className='text-center'>BOUTIQUE</h1>
        <div className='row offset-1 col-10 filtre' onClick={filtre}>
          <CreationFiltre 
          />
        </div>
        <div className='container '>
          <div className='row offset-1 col-10 offset-md-0 col-md-12' id='listeProduit'>
        </div>
        </div>
      </div>
      
      <PiedsDePage />
      <script type="text/javascript" src="../src/assets/js/ajouterAuPanier.js"></script>
    </React.StrictMode>
  )


