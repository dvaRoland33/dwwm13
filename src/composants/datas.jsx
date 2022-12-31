import React, { Component, useState } from 'react'


function litDatas(retour) {  
  var cheminOrigine =document.location.origin
  /*on récupére le fichier JSON des produits*/
       var chemin=cheminOrigine+'/src/assets/products.json'
       $.get(chemin,function(data){
          retour=data
          console.log('lecture JSON ',retour)
         // setListeProduits(listeProduits=retour)
      })
  return (
    retour
  )
}


export class Datas extends Component {
  constructor (props){
    super(props)
    //const [listeProduits, setListeProduits]  = useState([])
    //this.setState({listeProduits : litDatas(listeProduits)})
    //console.log('r'+this.state)
  }
  
  mounted() {
    this.setState({listeProduits : litDatas(listeProduits)})
    console.log('r'+this.state)
  }
  
  
  render() {
    <div>  
    </div>
    return (
      <div></div>
    )
  }
}
export default Datas







