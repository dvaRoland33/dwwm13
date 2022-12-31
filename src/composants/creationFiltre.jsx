import React, { Component } from 'react'

/* on gére l'affichage de la liste des catégories */
function visibiliteCategorie(){
    let elm = document.getElementById('panelCategorie')
    let visible= elm.className
    let txt = document.getElementById('legendCategorie')
    
    if (visible=="d-none"){
        elm.className="listeCategorie"  
        txt.innerHTML='Catégories -'     
    }
    else{
        elm.className="d-none"    
        txt.innerHTML='Catégories +' 
    }
    return(
     console.log(elm.children[0].firstChild)
    )
}
/* on gére la coche des options en fonction de l''option Tous */
function selectionTous(){
    let elms = document.getElementById('panelCategorie').children
    let opt= elms[0].firstChild.checked
    
    for (let i=1;i<elms.length;i++){
        elms[i].firstChild.checked=opt
    }
}

/* on crée les options du select */
function rempliSelect(zone,mini,maxi,interval,valeurDefaut)
{   let elm = document.getElementById(zone)
    
    let l=elm.children.length
    //on ne rempli la liste que si elle est vide
    if (l==0) {
        for (let i=mini; i<maxi+1; i+=interval){
            //on cree l'élement
            let o =document.createElement('option')
            o.setAttribute('value',i)
            if (i==valeurDefaut){
                o.setAttribute('selected','selected')
            }
            
            //on cree le texte
            let t=document.createTextNode(i)
            //on relie le texte à la balise
            o.appendChild(t)
          
            //on cree le lien dans le doc
         elm.appendChild(o)
        }
    }
    //return(
    //)
}
/* on gére l'affichage des prix */
function visibilitePrix(){
    rempliSelect('prixMini',0,20,1,0)
    rempliSelect('prixMaxi',0,20,1,20)
    visibiliteOptions('Prix')
}
/* on gére l'affichage des notes */
function visibiliteNotes(){
    rempliSelect('noteMini',0,5,1,0)
    rempliSelect('noteMaxi',0,5,1,5)
    visibiliteOptions('Notes')
}
/* on gére l'affichage des options */
function visibiliteOptions(nom){
    let elm = document.getElementById('panel'+nom)
    let visible= elm.className
    let txt = document.getElementById('legend'+nom)
    
    if (visible=="d-none"){
        elm.className="listeCategorie"  
        txt.innerHTML=nom+' -'     
    }
    else{
        elm.className="d-none"    
        txt.innerHTML=nom+' +' 
    }
    //console.log(listeProduits)

    return(
     console.log('filtrage options')
    )
}

/*export class CreationFiltre extends Component {*/
function CreationFiltre(){ 
  //render() {
    return (
        <div id="filtre" >
            <h3>FILTRE</h3>
          
            <div id="categorie" >  
                <legend onClick={visibiliteCategorie} id="legendCategorie">Catégorie +</legend>
                <div id='panelCategorie' className="d-none" >
                    <label><input onClick={selectionTous} type="checkbox" id="optTous" name="optTous" /> Tous   </label>
                    <label><input type="checkbox" id="optBlanc" name="optBlanc"  /> Chocolat blanc </label>
                    <label><input type="checkbox" id="optLait" name="optLait" /> Chocolat au lait</label>
                    <label><input type="checkbox" id="optNoir" name="optNoir" /> Chocolat noir</label>
                    <label><input type="checkbox" id="optNoix" name="optNoix" /> Noix/Noisette</label>
                    <label><input type="checkbox" id="optFruit" name="optFruit" /> Fruit</label>
                    <label><input type="checkbox" id="optCaramel" name="optCaramel" /> Caramel</label>
                    <label><input type="checkbox" id="optLiqueur" name="optLiqueur" /> Liqueur</label>
                </div>    
            </div>

            <div id="prix">
                <legend onClick={visibilitePrix} id="legendPrix">Prix +</legend>
                <div id="panelPrix"  className="d-none">
                    <label>Prix min <select id="prixMini" > </select></label>
                    <label>Prix max <select id="prixMaxi" > </select></label>
                </div>
            </div>           
            
            <div id="notes" >
                <legend onClick={visibiliteNotes} id="legendNotes">Notes +</legend>
                    <div id="panelNotes"  className="d-none">
                        <label>Note min <select id="noteMini" > </select></label>
                        <label>Note max <select id="noteMaxi" > </select></label>
                    </div>
            </div>
        </div>
    )
 // }
}

export default CreationFiltre
