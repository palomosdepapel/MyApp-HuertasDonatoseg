import './Card.css';
import React from "react";
import ItemCount from '../ItemCount/ItemCount';
import { Link } from "react-router-dom";

const Card = (props) => {
  const {id,title,description,img,price,discount} = props // es un objeto
  const MAX_LENGTH = 125; // límite a los caracteres del párrafo en las cards de productos
  return (
    <div className='col-sm-6 col-md-6 col-lg-4'>
      <div className="card pb-4">
        <Link to={`/item/detail/${id}/${title}`} className="position-absolute top-0 end-0 btn btn-link"><i className="bi bi-heart"></i></Link>
        <Link to={`/item/detail/${id}/${title}`}><img src={img} className="card-img-top" alt="..."/></Link>
        <Link to={`/item/detail/${id}/${title}`} className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description.substring(0, MAX_LENGTH)} ...</p>
          <div className='row'>
            <div className='col-6'><p className='card-discount'><del>$ {discount}</del></p></div>
            <div className='col-6'><p className='card-price text-end'>$ {price}</p></div>
          </div>        
        </Link>
        <ItemCount/>
      </div>
    </div>
    
  );
};

export default Card;
