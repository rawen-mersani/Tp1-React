import React from 'react';
import header1 from './images/header1.jpg';
import header2 from './images/header2.jpg';
import header3 from './images/header3.jpg';


function Header() {
  return (
    
        
        <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
          </ol>

          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={header1} className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h1>Travel Across The Globe</h1>
                <p>Travel is our passion </p>
                
              </div>
            </div>
          
            <div className="carousel-item">
              <img src={header2} className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h1>Travel Across The Globe</h1>
                <p>Travel is our passion</p>
                
              </div>
            </div>

            <div className="carousel-item">
              <img src={header3} className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h1>Travel Across The Globe</h1>
                <p>Travel is our passion</p>
                
              </div>
            </div>
        </div>

        <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>


      
        
  );
}

export default Header;
