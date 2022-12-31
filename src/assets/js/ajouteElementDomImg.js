import React from 'react'

function ajouteElementDomImg(source,nomImage,altImage,classe) {
    let nouveau= document.createElement('img')
    source.append(nouveau)
    nouveau.setAttribute("src",nomImage)
    nouveau.setAttribute("alt",altImage)

    if (classe!=undefined){
        nouveau.setAttribute('class',classe)
    }
    return(
        nouveau
    )
}

export default ajouteElementDomImg