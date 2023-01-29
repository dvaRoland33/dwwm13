import React from 'react'
import ReactDOM from 'react-dom/client'
import '../assets/css/style.css'
import 'https://code.jquery.com/jquery-3.5.1.min.js'
import 'https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js'
import BurgerMenu from '../composants/BurgerMenu'
import Datas from '../composants/datas'

//import as from '../composants/datas'
/* fonctions spécifiques */
import ajouteElementDom from '../assets/js/ajouteElementDom'
import reconstruitNomImage from '../assets/js/reconstruitNomImage'
import extraitNomImage from '../assets/js/extraitNomImage'
import ajouteElementDomImg from '../assets/js/ajouteElementDomImg'
import epureListe from '../assets/js/epureListe'

var cheminOrigine =document.location.origin
var produit 
/*on récupére le fichier JSON des produits*/
 window.onload = function(){
     var chemin=cheminOrigine+'/src/assets/products.json'
     var selection=document.location.hash
     $.get(chemin,function(data){
        listeProduits= data
        reinitialiserQuantites(quantites)
        selectionneArticles(selection)
        calculeTotal()
    })
 }

 function reinitialiserQuantites(quantites){
    quantites.length = [] 
     for (let i=0; i<listeProduits.length;i++){
       quantites.push(0)
     }
 }
 
 function reinitiliaserPanier(selection){
     console.log('entree vide panier')  
     selection=[]
     reinitialiserQuantites(quantites)
     let elmt = document.getElementById('articlesPanier')
     while (elmt.children.length>0){
      elmt.children[0].remove()
     }
     let elmtTotal = document.getElementById('totalPanier')
     elmtTotal.remove()
     selectionneArticles(selection)
     let elmtMessage = document.getElementById('message')
     elmtMessage.setAttribute('class','hidden')
 }

 function validePanier(){
     let elmt = document.getElementById('message')
     elmt.setAttribute('class','message')
 }
    

 function selectionneArticles(selection){
    let boutonReinitialiserPanier = document.getElementById('boutonReinitialiserPanier')
    let boutonValiderPanier = document.getElementById('boutonValiderPanier')
    
    //transformer la selection en liste d'achat
    reinitialiserQuantites(quantites)
    var j
    let selectionAafficher =epureListe(selection)
    for (let i=0; selectionAafficher.length-1; i++)
   {
      j=selectionAafficher[i]
      if (j==undefined){
        break
      }
      else
      {
        quantites[j]+=1
      }
    }
    
    selection=selectionAafficher
    if ((selection.length==0)||(selection.length==undefined)) {
        let elmt = document.getElementById('articlesPanier')
        ajouteElementDom(elmt,"div","le panier est vide",'','','','')
        boutonReinitialiserPanier.setAttribute('class','hidden')
        boutonValiderPanier.setAttribute ('class','hidden')
      } 
    else{
      boutonReinitialiserPanier.setAttribute('class','offset-2 col-8 ');
      boutonValiderPanier.setAttribute ('class','offset-2 col-8 ');
    
      let codeProduit= undefined
      let NomProduit=undefined
      let qte=undefined
      let prix=undefined
      for (let i=0; i<quantites.length;i++)
      {  
        qte=quantites[i]
        codeProduit=listeProduits[i].id
        NomProduit=listeProduits[i].title
        prix=listeProduits[i].price
        if (qte>0){   
          console.log(i+' '+qte+' '+codeProduit+' '+prix+' '+NomProduit)  
          afficheArticleDuPanier(i)
        }
      }
    }
 }

 function afficheArticleDuPanier(numeroArticle) {
     produit=listeProduits[numeroArticle]
     let elm = document.getElementById('articlesPanier')

     let articlePanier = document.createElement('div')
     articlePanier.setAttribute('id','articlePanier_'+numeroArticle)
     articlePanier.setAttribute('class','row articlePanier ')
     elm.append(articlePanier)
     
     let colonneAnnulation = document.createElement('div')
     colonneAnnulation.setAttribute('class','col-1 ')
     colonneAnnulation.setAttribute('id','boutonAnnulerArticle_'+numeroArticle)
     colonneAnnulation.setAttribute('onClick','supprimerArticleDeSelection('+numeroArticle+','+selection+')')
     articlePanier.append(colonneAnnulation) 
     ajouteElementDom(colonneAnnulation,'button','X','','','boutonAnnulerArticle')
     
     let colonneImage = document.createElement('div')
     colonneImage.setAttribute('class','col-5')
     articlePanier.append(colonneImage)
     /* image du produit */
    let nomFichier=extraitNomImage(produit.image)
    let contenu=reconstruitNomImage(nomFichier)
    ajouteElementDomImg(colonneImage,contenu,nomFichier,'imageDetailProduit')
  
    let colonneDesignation = document.createElement('div')
    colonneDesignation.setAttribute('class','col-6')
    articlePanier.append(colonneDesignation)
     ajouteElementDom(colonneDesignation,'div','','','','detailArticlePanier')
     ajouteElementDom(colonneDesignation,'div',produit.title,'','','titreDetailPanier')
     ajouteElementDom(colonneDesignation,'div',produit.price+' €','','','prixArticlePanier')
     
     let quantiteArticle = document.createElement('select')
     quantiteArticle.setAttribute('id','quantiteArticle_'+numeroArticle)
     quantiteArticle.setAttribute('class','quantiteArticleAuPanier')
     quantiteArticle.setAttribute('onClick','ajouteQuantite('+numeroArticle+')')

     for ( let k =1 ; k<10; k++) {
        if (k==quantites[numeroArticle]){
          let quantiteArticleParDefaut = document.createElement('option')
          quantiteArticleParDefaut.setAttribute('selected','');
          quantiteArticleParDefaut.innerHTML=k
          quantiteArticle.append(quantiteArticleParDefaut)
        } else{
          ajouteElementDom(quantiteArticle,'option',k,'','','')
        }
     }
     colonneDesignation.append(quantiteArticle)
 }

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <Datas 
        listeProduits = "exemple"
      />
      <BurgerMenu />
      <div className='container'>
        <h1 className='text-center'>PANIER</h1>
        <div id="contenuPanier">
            <div id="articlesPanier"> </div>
            <div id="totalPanier">TOTAL : <span id="montantTotal"></span> </div>
            <div id='message' className='hidden'> Non Disponible</div>
            <div className='row'> </div>
            <button id='boutonReinitialiserPanier' className='offset-2 col-8 ' onClick={reinitiliaserPanier}>REINITIALISER LE PANIER</button>
            <button id='boutonValiderPanier' className='offset-2 col-8' onClick={validePanier}>VALIDER LE PANIER</button>
        </div>
        
      </div>
      
    </React.StrictMode>
  )
