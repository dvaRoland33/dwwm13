import React from 'react'

function ajouteElementDom(source,element,contenu,prefixe,postfixe,classe) {
  let nouveau= document.createElement(element)
    source.append(nouveau)
    if ((contenu != undefined)||
        (contenu != '')){
       nouveau.innerHTML=prefixe+contenu+postfixe 
    }
    if (classe!=undefined){
        nouveau.setAttribute('class',classe)
    }
    return(
        nouveau
    )
}

export default ajouteElementDom