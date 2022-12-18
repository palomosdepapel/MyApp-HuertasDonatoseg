import React from 'react'
import Breadcrumb from '../Breadcrumb/Breadcrumb'
import ItemCount from '../ItemCount/ItemCount'
//import { Link } from "react-router-dom";



const Item = (props) => {
  const { id, title, description, img, price, discount } = props;
  return (
    
      <main className="App-main mt-5 py-5">
        <div className="container">
          <Breadcrumb />
        </div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-1">
              <div>{id}</div>
            </div>
            <div className="col-sm-5">
              <img src={img} className="card-img-top" alt="..." />
            </div>
            <div className="col-sm-6 position-relative">
              <div className="product pb-4">

                <a href="/" className="btn btn-link text-start">
                  <i className="bi bi-heart"></i>
                </a>

                <div className="product-body pt-5">
                  <h1 className="product-title py-4">{title}</h1>
                  <p className="product-text">
                    {description}
                  </p>
                  <div className="d-flex align-content-center align-items-center flex-wrap">
                    <div className="col-6 col-lg-2 pt-2">
                      <div className="product-discount">
                        <del>$ {discount}</del> (-40%)
                      </div>
                    </div>

                    <div className="col-6 col-lg-4 text-end pt-2">
                      <h4 className="product-price text-center">$ {price}</h4>
                    </div>
                    <div className="col-12 col-lg-6 text-end">
                      <ItemCount />
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </main>
    
  )
}

export default Item