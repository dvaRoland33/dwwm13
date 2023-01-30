import React from 'react'

function reconstruitNomImage(nomImage) {
    var cheminOrigine =document.location.origin
    return(
        cheminOrigine+'/ressources/images/'+nomImage
    )
}

export default reconstruitNomImage