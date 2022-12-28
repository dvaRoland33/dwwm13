import React, { Component } from 'react'
import ReactDOM from 'react-dom/client'
import '../assets/css/style.css'
import 'https://code.jquery.com/jquery-3.5.1.min.js'
import 'https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js'
import BurgerMenu from '../composants/BurgerMenu'
import PiedsDePage from '../composants/piedsDePage'

var produit
var listeProduits =[]
var cheminOrigine =document.location.origin
/*on récupére le fichier JSON des produits*/
 window.onload = function(){
     var chemin=cheminOrigine+'/src/assets/products.json'
     var idRecherche=document.location.hash
     $.get(chemin,function(data){
        listeProduits= data
        selectionneArticle(idRecherche)
    })
 }

function selectionneArticle(idRecherche){
   console.log(listeProduits)
   console.log(idRecherche)
   produit=undefined
   for (let i=0; i<listeProduits.length;i++)
   {
      if ('#'+listeProduits[i].id==idRecherche){
          produit=listeProduits[i]
          afficheArticle()
          break
      }
   }
}
/* permet d'ajouter une balise HTML dans le DOM  */
function ajouteDiv(source,element,contenu,prefixe,postfixe,classe){
    let nouveau= document.createElement(element)
    source.append(nouveau)
    nouveau.innerHTML=prefixe+contenu+postfixe
    if (classe!=undefined){
        nouveau.setAttribute('class',classe)
    }
}

function afficheArticle(){
    let elm = document.getElementById('detailArticle')
    ajouteDiv(elm,'div',produit.title,'','','titreDetailProduit')
    ajouteDiv(elm,'div',produit.price,'prix ',' €','prixDetailProduit')
    ajouteDiv(elm,'div',produit.description,'','','descriptionDetailProduit')
    ajouteDiv(elm,'div',produit.note,'Note :','','prixDetailProduit')
    /* lien produit*/
    let zoneLien = document.createElement('div')
    zoneLien.setAttribute('class','col-4 lienProduit')
    elm.append(zoneLien)
    let lienProduit = document.createElement('a')
    lienProduit.innerHTML = 'Ajouter au Panier'
    lienProduit.setAttribute('class','lienProduit')
    lienProduit.setAttribute('href','#'+produit.id)
    elm.append(lienProduit)
    /* image du produit */
    let ZonesNomFichier= produit.image.split('/')
    let nomFichier= ZonesNomFichier[ZonesNomFichier.length-1]
    let contenu=cheminOrigine+'/src/assets/images/'+nomFichier
    let contenuImage = document.createElement('img')
    elm.append(contenuImage)
    contenuImage.setAttribute("src",contenu)
    contenuImage.setAttribute("alt",nomFichier)
    contenuImage.setAttribute('class','imageDetailProduit')
    ajouteDiv(elm,'div','Ingrédients','','','prixDetailProduit ')
    ajouteDiv(elm,'div',produit.ingredients,'','')
    
    return(
        <div>           
        </div>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <BurgerMenu />
      <div className='container'>
        <div id='detailArticle'> </div>
      </div>
      <PiedsDePage />
      
    </React.StrictMode>
  )