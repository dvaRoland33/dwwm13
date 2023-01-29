import React from 'react'
/* fonctions spécifiques */
import extraitNomImage from './extraitNomImage'
import reconstruitNomImage from './reconstruitNomImage'
import ajouteElementDomImg from './ajouteElementDomImg'
import ajouteElementDom from './ajouteElementDom'

function listerProduits(props) {
    var listeProduits= props

    if (listeProduits.length==0) {
      let zoneProduit=document.getElementById("listeProduit")
      ajouteElementDom(zoneProduit,'div','Aucun Article ne correspond à ces filtres','','','col-12 message')
    }
    else{
      listeProduits.forEach (produit =>{   
         listerProduit(produit)
      })
    }
    
    
}
export default listerProduits

  function listerProduit(produit){
     let zoneProduit=document.getElementById("listeProduit")
     /* cree un conteneur produit*/
     let elm = document.createElement('article')
     elm.setAttribute('class','produit col-12 col-md-6 col-lg-4 col-xl-3 col-xxl-2')
     zoneProduit.append(elm)
 
     /* image du produit */
     let nomFichier=extraitNomImage(produit.image)
     let contenu=reconstruitNomImage(nomFichier)
 
     /* zone haut avec lien vers détail article*/
     let zoneHaut = document.createElement('div')
     elm.append(zoneHaut)
 
     let lienDetail = document.createElement('a')
     lienDetail.setAttribute('href','ficheProduit.html#'+produit.id)
     lienDetail.setAttribute('id','produit'+produit.id)
     zoneHaut.append(lienDetail)
 
     ajouteElementDomImg(lienDetail,contenu,nomFichier,'imageProduit')
 
    /* nom du produit */
     ajouteElementDom(lienDetail,'div',produit.title,'','','col-12 nomProduit')
     
     /*zone bas avec lien pour ajour panier */
     let zoneBas = document.createElement('div')
     zoneBas.setAttribute('class','row')
     elm.append(zoneBas)
   
     let zonePrix = document.createElement('div')
     zonePrix.setAttribute('class','col-8 col-md-7 col-xxl-6')
     zoneBas.append(zonePrix)
 
     /* prix du produit */
     ajouteElementDom(zonePrix,'div',produit.price,'',' €','prixProduit')
 
     /* note du prix */
     ajouteElementDom(zonePrix,'div',produit.note,'Note: ','','noteProduit')
 
     /* lien produit*/
     let zoneLien = document.createElement('div')
     zoneLien.setAttribute('class','col-4 col-md-5 col-xxl-6')
     zoneBas.append(zoneLien)
     let lienProduit = document.createElement('button')
     lienProduit.innerHTML = 'Ajouter au Panier'
     lienProduit.setAttribute('class','lienProduit')
     //lienProduit.setAttribute('href','#'+produit.id)
     lienProduit.setAttribute('onClick','ajouterAuPanier('+produit.id+')') 
     zoneLien.append(lienProduit)
  }