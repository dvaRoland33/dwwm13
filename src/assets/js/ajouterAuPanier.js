//function ajouterAuPanier(idProduit,selection){
function ajouterAuPanier(idProduit){    
    const nbarticle=selection.push(idProduit) ;
   // console.log('selection '+selection); 
    if (nbarticle>0) {
        quantiteMenu = document.getElementById('quantitePanier')
        quantiteMenu.innerHTML=nbarticle+' '
        menuPanier= document.getElementById('menuPanier')
        menuPanier.setAttribute('href','./panier.html#'+selection)
        appelPanier = document.getElementById('AppelPanier')
        appelPanier.setAttribute('href','./panier.html#'+selection)
    }
    return selection
} 
