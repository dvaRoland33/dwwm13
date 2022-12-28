import React, { Component } from 'react'

var listeProduits =[]
/*on récupére le fichier JSON des produits*/
/* window.onload = function(){
     var chemin=document.location.origin+'/src/assets/products.json'
   
     $.get(chemin,function(data){
        listeProduits= data
         console.log(listeProduits)
     /*    console.log(listeProduits[0])*/
 /*    listerProduits()
     this.props =({listeProduits : data})
         
    })
 }*/

function listerProduits(){
  console.log(listeProduits[0])
  listeProduits.forEach(produit =>{
    console.log(produit)
    return(
      <div></div>
    )
  }
  )
}

function Produits(liste)  {
    return (
      <div >
        
        
      </div>
    )
  }


export default Produits
