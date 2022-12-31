import React from 'react'

function viderListeProduits() {
  let zoneProduit=document.getElementById("listeProduit");
  //console.log(zoneProduit)
  while (zoneProduit.childElementCount>0){
      zoneProduit.firstChild.remove();
  }
}

export default viderListeProduits

