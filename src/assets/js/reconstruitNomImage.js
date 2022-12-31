import React from 'react'

function reconstruitNomImage(nomImage) {
    var cheminOrigine =document.location.origin
    return(
        cheminOrigine+'/src/assets/images/'+nomImage
    )
}

export default reconstruitNomImage