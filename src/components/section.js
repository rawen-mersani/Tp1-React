import React from 'react';
import img1 from './images/img1.jpg';
import img2 from './images/img2.jpg';
import img3 from './images/img3.jpg';
import img4 from './images/img4.jpg';
import img5 from './images/img5.jpg';
import img6 from './images/img6.jpg';


function Section() {
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <form className="form-inline">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </nav>
      <div > 
        <p className="text-center">Featured Destinations</p>
      </div>
      <div className="card-deck">
  
          <div className="card">
            <img src={img1} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Paris</h5>
              <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
            </div>
          </div>
          <div className="card">
            <img src={img2} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Singapore</h5>
              <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
            </div>
          </div>
          <div className="card">
            <img src={img3} className="card-img-top" width="15" />
             <div className="card-body">
               <h5 className="card-title">Thailand</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
              </div>
          </div>
        </div>
      
        
        <div className="container-fluid">  
          <p className="text-center">Travelling Gallery</p>
                 
          <div className="card-deck">
            
            <div className="cards">
              <img src={img4} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Thailand</h5>
              </div>
            </div>


            <div className="cards">
              <img src={img5} className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Greece</h5>
              </div>
            </div>
            <div className="cards">
              <img src={img6} className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Maldive</h5>
              </div>
            </div>
        </div>
    </div>
    </div>
  );
}

export default Section;
