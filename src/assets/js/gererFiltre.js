import React from 'react'
import listerProduits from './listerProduits'
import viderListeProduits from './viderListeProduits'

function gererFiltre(props) {
    var listeProduits= props
    let listeProduitsSelectionnes= [] 
    console.log('application filtres ='+listeProduits)
    
    listeProduits.forEach (produit =>{   
       //console.log(produit.category)
       var selection=applicationFiltres(produit)
       //console.log(selection)
       if (selection){
         listeProduitsSelectionnes.push(produit)
       }   
    })
    //console.log(listeProduitsSelectionnes)
    viderListeProduits()
    listerProduits(listeProduitsSelectionnes)
}

export default gererFiltre

/**Retourne la valeur du select selectId*/
function getSelectValue(selectId)
{
    var textselectionne=""
    /**On récupère l'élement html <select>*/
	var selectElmt = document.getElementById(selectId);
    if (selectElmt.options[selectElmt.selectedIndex]!=undefined){
        var valeurselectionnee = selectElmt.options[selectElmt.selectedIndex].value;
        textselectionne = selectElmt.options[selectElmt.selectedIndex].text;
    }
    
	/**
	selectElmt.options correspond au tableau des balises <option> du select
	selectElmt.selectedIndex correspond à l'index du tableau options qui est actuellement sélectionné
	*/ 
	return textselectionne;
}
function testeIngredient(filtre,produit){
    let retour=false;
    if (filtre){
        if (produit){
            retour=true ;
        }
    }    
    return retour
}

/* application des filtres*/
function applicationFiltres(produit){
    //console.log(produit)
    let optTous = document.getElementById('optTous').checked;
    let optBlanc = document.getElementById('optBlanc').checked;
    let optLait = document.getElementById('optLait').checked;
    let optNoir = document.getElementById('optNoir').checked;
    let optNoix = document.getElementById('optNoix').checked;
    let optFruit = document.getElementById('optFruit').checked;
    let optCaramel = document.getElementById('optCaramel').checked;
    let optLiqueur = document.getElementById('optLiqueur').checked;
    let prixMini = getSelectValue('prixMini');
    let prixMaxi = getSelectValue('prixMaxi');
    let noteMini =  getSelectValue('noteMini');
    let noteMaxi =  getSelectValue('noteMaxi');
    
    /* on filtre les catégories */
    let selectCategorie = false;
    if (optTous) {
        selectCategorie = true;
    }else{
        if (testeIngredient(optBlanc,produit.category.blanc) ) {selectCategorie=true};
        if (testeIngredient(optCaramel,produit.category.caramel)) { selectCategorie=true };
        if (testeIngredient(optFruit,produit.category.fruit )) {selectCategorie= true};
        if (testeIngredient(optLait,produit.category.lait)) {selectCategorie= true};
        if (testeIngredient(optLiqueur,produit.category.liqueur)) {selectCategorie= true};
        if (testeIngredient(optNoir,produit.category.noir)) {selectCategorie= true};
        if (testeIngredient(optNoix,produit.category.noix)) {selectCategorie= true};
    }

    let select = selectCategorie;
    /* on filtre le prix */
    if (selectCategorie){
        console.log(prixMaxi)
        if ((prixMaxi!="") && (produit.price>prixMaxi)) {select=false };
        if ((prixMini!="") && (produit.price<prixMini)) {select=false };
        if ((noteMaxi!="") && (produit.note>noteMaxi)) {select=false};
        if ((noteMini!="") && (produit.note<noteMini)) {select=false};
        //console.log(produit.price+' '+produit.note+' >'+prixMaxi+' '+select)
    }
    return select;  
    
}
