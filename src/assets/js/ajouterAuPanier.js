//function ajouterAuPanier(idProduit,selection){
function ajouterAuPanier(idProduit){    
    const nbarticle=selection.push(idProduit) ;
    console.log('selection '+selection); 
    if (nbarticle>0) {
        menu = document.getElementById('menuPanier')
        menu.innerHTML=nbarticle+' '
    }
    return selection
} 
