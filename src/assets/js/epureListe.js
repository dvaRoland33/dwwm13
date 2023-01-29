function epureListe(liste){
    var retour=[]
    if (liste.length>0){
       let zone1=liste.replace('#','');
       retour=zone1.split(',');
    }
    return ( 
        retour
    )    
}
export default epureListe