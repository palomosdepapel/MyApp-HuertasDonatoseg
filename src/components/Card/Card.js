import './Card.css';
import React from "react";

const Card = (props) => {
  const {title,description,img,price,discount} = props // es un objeto
  return (
    <div className='col-sm-6 col-md-6 col-lg-4'>
      <div className="card">
      <a href="/" className="position-absolute top-0 end-0 btn btn-link"><i className="bi bi-heart"></i></a>
      <a href="/"><img src={img} className="card-img-top" alt="..."/></a>
      <a href='/' className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <div className='row'>
          <div className='col-6'><p className='card-discount'><del>$ {discount}</del></p></div>
          <div className='col-6'><p className='card-price text-end'>$ {price}</p></div>
        </div>        
        <a href="/" className="btn btn-primary stretched-link"><i className="bi bi-cart2"></i></a>
      </a>
    </div>
    </div>
    
  );
};

export default Card;
