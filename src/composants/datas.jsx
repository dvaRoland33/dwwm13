import React from 'react'

var listeProduits
function datas() {  
  var cheminOrigine =document.location.origin
  /*on récupére le fichier JSON des produits*/
   window.onload = function(){
       console.log('tutu0 '+listeProduits)
       var chemin=cheminOrigine+'/src/assets/products.json'
       $.get(chemin,function(data){
          listeProduits= data
          console.log('tutu',data)
          console.log('tutu0 '+listeProduits)
      })
   } 

  return (
    listeProduits
  )
}

export default datas

