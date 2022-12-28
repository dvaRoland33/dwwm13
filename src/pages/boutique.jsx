import React, { Component } from 'react'
import ReactDOM from 'react-dom/client'
import '../assets/css/style.css'
import 'https://code.jquery.com/jquery-3.5.1.min.js'
import 'https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js'
import BurgerMenu from '../composants/BurgerMenu'
import PiedsDePage from '../composants/piedsDePage'
import Filtre from '../composants/filtre'

var listeProduits =[]
var cheminOrigine =document.location.origin
/*on récupére le fichier JSON des produits*/
 window.onload = function(){
     var chemin=cheminOrigine+'/src/assets/products.json'
     $.get(chemin,function(data){
        listeProduits= data
         listerProduits()
    })
 }
 
 function listerProduits(){
   listeProduits.forEach (produit =>{
    listerProduit(produit)
   })
 }
 function listerProduit(produit){
    let zoneProduit=document.getElementById("listeProduit")
    /* cree un conteneur produit*/
    let elm = document.createElement('article')
    elm.setAttribute('class','produit')
    zoneProduit.append(elm)

    /* image du produit */
    let ZonesNomFichier= produit.image.split('/')
    let nomFichier= ZonesNomFichier[ZonesNomFichier.length-1]
    let contenu=cheminOrigine+'/src/assets/images/'+nomFichier
    
    /* zone haut avec lien vers détail article*/
    let zoneHaut = document.createElement('div')
    elm.append(zoneHaut)
    let lienDetail = document.createElement('a')
    lienDetail.setAttribute('href','ficheProduit.html#'+produit.id)
    zoneHaut.append(lienDetail)

    let contenuImage = document.createElement('img')
    lienDetail.append(contenuImage)
    contenuImage.setAttribute("src",contenu)
    contenuImage.setAttribute("alt",nomFichier)
    contenuImage.setAttribute('class','imageProduit')
   /* nom du produit */
    let nomProduit = document.createElement('div')
    nomProduit.innerHTML = produit.title
    nomProduit.setAttribute('class','col-12 nomProduit')
    lienDetail.append(nomProduit)  
    
    /*zone bas avec lien pour ajour panier */
    let zoneBas = document.createElement('div')
    zoneBas.setAttribute('class','row')
    elm.append(zoneBas)

    let zonePrix = document.createElement('div')
    zonePrix.setAttribute('class','col-8')
    zoneBas.append(zonePrix)

    /* prix du produit */
    let prixProduit = document.createElement('div')
    prixProduit.innerHTML = produit.price+' €';
    prixProduit.setAttribute('class','prixProduit')
    zonePrix.append(prixProduit)

    /* note du prix */
    let noteProduit = document.createElement('div')
    noteProduit.innerHTML = 'Note: '+produit.note
    noteProduit.setAttribute('class','noteProduit')
    zonePrix.append(noteProduit)

    /* lien produit*/
    let zoneLien = document.createElement('div')
    zoneLien.setAttribute('class','col-4 lienProduit')
    zoneBas.append(zoneLien)
    let lienProduit = document.createElement('a')
    lienProduit.innerHTML = 'Ajouter au Panier'
    lienProduit.setAttribute('class','lienProduit')
    lienProduit.setAttribute('href','#'+produit.id)
    zoneLien.append(lienProduit)
 }

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <BurgerMenu />
      <div className='container'>
        <h1 className='text-center'>BOUTIQUE</h1>
        <div className='row offset-1 col-10 filtre'>
          <Filtre />
        </div>
        <div className='row offset-1 col-10' id='listeProduit'>
           {listerProduits()}
        </div>

      </div>
      <PiedsDePage />
      
    </React.StrictMode>
  )

