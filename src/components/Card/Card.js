import './Card.css';
import React from "react";
import ItemCount from '../ItemCount/ItemCount';

const Card = (props) => {
  const {title,description,img,price,discount} = props // es un objeto
  const MAX_LENGTH = 125; // límite a los caracteres del párrafo en las cards de productos
  return (
    <div className='col-sm-6 col-md-6 col-lg-4'>
      <div className="card pb-4">
        <a href="/item/detail/1" className="position-absolute top-0 end-0 btn btn-link"><i className="bi bi-heart"></i></a>
        <a href="/item/detail/1"><img src={img} className="card-img-top" alt="..."/></a>
        <a href="/item/detail/1" className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description.substring(0, MAX_LENGTH)} ...</p>
          <div className='row'>
            <div className='col-6'><p className='card-discount'><del>$ {discount}</del></p></div>
            <div className='col-6'><p className='card-price text-end'>$ {price}</p></div>
          </div>        
        </a>
        <ItemCount/>
      </div>
    </div>
    
  );
};

export default Card;
