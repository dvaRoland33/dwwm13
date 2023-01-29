import React, { Component } from 'react'
import ReactDOM from 'react-dom/client'
import '../assets/css/style.css'
import 'https://code.jquery.com/jquery-3.5.1.min.js'
import 'https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js'
import BurgerMenu from '../composants/BurgerMenu'
import PiedsDePage from '../composants/piedsDePage'
import '../assets/js/ajouteElementDom'
/* fonctions spécifiques */
import ajouteElementDom from '../assets/js/ajouteElementDom'
import reconstruitNomImage from '../assets/js/reconstruitNomImage'
import extraitNomImage from '../assets/js/extraitNomImage'
import ajouteElementDomImg from '../assets/js/ajouteElementDomImg'

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

function afficheArticle(){
    let elm = document.getElementById('detailArticle')
    ajouteElementDom(elm,'div',produit.title,'','','titreDetailProduit')
    ajouteElementDom(elm,'div',produit.price,'prix ',' €','prixDetailProduit')
    ajouteElementDom(elm,'div',produit.description,'','','descriptionDetailProduit')
    ajouteElementDom(elm,'div',produit.note,'Note :','','prixDetailProduit')
    /* lien produit*/
    ajouteElementDom(elm,'div','','','','col-4 lienProduit')

    let lienProduit = document.createElement('button')
    lienProduit.innerHTML = 'Ajouter au Panier'
    lienProduit.setAttribute('class','lienProduit')
    lienProduit.setAttribute('onClick','ajouterAuPanier('+produit.id+')') 
 
    elm.append(lienProduit)
    /* image du produit */
    let nomFichier=extraitNomImage(produit.image)
    let contenu=reconstruitNomImage(nomFichier)
    ajouteElementDomImg(elm,contenu,nomFichier,'imageDetailProduit')

    ajouteElementDom(elm,'div','Ingrédients','','','prixDetailProduit ')
    ajouteElementDom(elm,'div',produit.ingredients,'','')
    
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