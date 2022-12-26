import React, { Component } from 'react'

export class Carousel extends Component {
  render() {
    return (
    <div className="container-xl">
        <div className="row">
            <div className="col-lg-10 mx-auto">
                <div id="myCarousel" className="carousel slide" data-ride="carousel">
                    {/*<!-- Carousel indicators -->*/}
                    <ol className="carousel-indicators">
                        <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                        <li data-target="#myCarousel" data-slide-to="1"></li>
                        <li data-target="#myCarousel" data-slide-to="2"></li>
                    </ol>   
                    {/*<!-- Wrapper for carousel items -->*/}
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="img-box"><img src="/src/assets/images/accueil1.jpg" alt="accueil1"/></div>
                        </div>
                        <div className="carousel-item">
                            <div className="img-box"><img src="/src/assets/images/accueil2.jpg" alt="accueil2"/></div>
                        </div>
                        <div className="carousel-item">
                            <div className="img-box"><img src="/src/assets/images/accueil3.jpg" alt="accueil3"/></div>
                       </div>
                    </div>
                    {/*<!-- Carousel controls -->*/}
                    <a className="carousel-control-prev" href="#myCarousel" data-slide="prev">
                        <i className="fa fa-angle-left"></i>
                    </a>
                    <a className="carousel-control-next" href="#myCarousel" data-slide="next">
                        <i className="fa fa-angle-right"></i>
                    </a>
                    {/*lien Boutique */}
                    <div className='lienBoutique'>
                       <a href='../src/pages/boutique.html'>Voir la Boutique</a> 
                    </div>

                </div>
            </div>
        </div>
    </div>
    )
  }
}

export default Carousel