import React from 'react'

function extraitNomImage(nomImage) {
    /* image du produit */
    let cheminOrigine =document.location.origin
    let ZonesNomFichier= nomImage.split('/')
    let nomFichier= ZonesNomFichier[ZonesNomFichier.length-1]
    return(
        nomFichier
    )   
}

export default extraitNomImage