import React from 'react'
import { BASE_PATH } from '../../utils/constants/constants';
//import ItemCount from '../ItemCount/ItemCount';

const Product = (props) => {
  //console.log(props);
  const {product, addProductCart} = props
  const MAX_LENGTH = 125; // límite a los caracteres del párrafo en las cards de productos
    return (
        <div className='col-sm-6 col-md-6 col-lg-4'>
            <div className='card pb-4'>
                <a href='/' className="position-absolute top-0 end-0 btn btn-link"><i className="bi bi-heart"></i></a>
                <a href='/'> <img className='card-img-top' src={`${BASE_PATH}/${product.image}`} alt='xxx'/></a>
                <a href='/' className='card-body'>
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">{product.description.substring(0, MAX_LENGTH)} ...</p>
                    <div className='row'>
                        <div className='col-6'><p className='card-discount'><del>$ {product.discount}</del></p></div>
                        <div className='col-6'><p className='card-price text-end'>$ {product.price}</p></div>
                    </div>
                </a>
                <button onClick={() => addProductCart(product.id, product.title)} className="btn btn-primary"><i className="bi bi-cart2"></i></button>
            </div>
        </div>
  );
}

export default Product