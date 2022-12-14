import React from 'react'

const ItemDetailContainer = () => {
  return (
    <main className="App-main mt-5 py-5">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-sm-1">

                    </div>
                    <div className="col-sm-5">
                        <img src="https://kevins.com.co/img/productos/6R06810172.jpg" className="card-img-top" alt="..." />
                    </div>
                    <div className="col-sm-6 position-relative">
                        <div className="product pb-4">

                            <a href="index.html" className="btn btn-link text-start">
                                <i className="bi bi-heart"></i>
                            </a>

                            <div className="product-body pt-5">
                                <h1 className="product-title py-4">Reloj Guess Análogo</h1>
                                <p className="product-text">
                                    Reloj guess análogo, para hombre, tablero redondo colores azul y rosa, estilo index + arabigo, pulso silicona color azul, calendario , Diámetro: 44.00mm , Resistencia al agua: 10 bares
                                </p>
                                <div className="d-flex align-content-center align-items-center flex-wrap">
                                    <div className="col">
                                        <p className="product-discount">
                                            <del>$ 1950000</del> (-40%)
                                        </p>
                                    </div>

                                    <div className="col">
                                        <h4 className="product-price text-end">$ 1076000</h4>
                                    </div>
                                    <div className="col-2 text-end">
                                        <a href="index.html" className="btn btn-primary">
                                            <i className="bi bi-cart2"></i>
                                        </a>
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

export default ItemDetailContainer