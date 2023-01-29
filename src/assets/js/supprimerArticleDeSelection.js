function supprimerArticleDeSelection(numeroArticle){   
    //console.log(quantites)
   // console.log('asupprimer '+numeroArticle)
    quantites[numeroArticle]=0

    let elmt = document.getElementById('articlePanier_'+numeroArticle)
    while (elmt.children.length>0){
     elmt.children[0].remove()
    }
    //let elmtTotal = document.getElementById('totalPanier')
    elmt.remove()
    //selectionneArticles(selection)

    //console.log(quantites)
    return(
      quantites
    )
    
 }