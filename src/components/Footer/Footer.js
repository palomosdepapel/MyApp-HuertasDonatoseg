import logofooter from '../Footer/logofooter.svg'

import React from 'react'

const Footer = () => {
  return (
    <footer>
        <div className="container py-5">
            <div className="row">
                <div className="col-md-8">
                    <div className="row">
                        <div className="col-sm-3 py-3">
                            <h6 className="py-2">Productos</h6>
                            <ul>
                                <li><a href="index.html">Matrimonio</a></li>
                                <li><a href="index.html">Aretes</a></li>
                                <li><a href="index.html">Dijes</a></li>
                                <li><a href="index.html">Anillos</a></li>
                                <li><a href="index.html">Cadenas</a></li>
                            </ul>
                        </div>
                        <div className="col-sm-6 py-3">
                            <h6 className="py-2">Productos</h6>
                            <ul>
                                <li><a href="index.html">Pulseras</a></li>
                                <li><a href="index.html">Collares</a></li>
                                <li><a className='active' href="index.html">Relojes</a></li>
                                <li><a href="index.html">Huevos de Fabergé</a></li>
                            </ul>
                        </div>
                        <div className="col-sm-3 py-3">
                            <h6 className="py-2">Información</h6>
                            <ul>
                                <li><a href="index.html">Términos y condiciones</a></li>
                                <li><a href="index.html">Horario de entregas</a></li>
                                <li><a href="index.html">Horatio de atención</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 text-center text-md-end">
                    <div className="py-3">
                        <a href="index.html" className="btn btn-link btn-lg"
                          ><i className="bi bi-facebook"></i
                        ></a>
                        <a href="index.html" className="btn btn-link btn-lg"
                          ><i className="bi bi-twitter"></i
                        ></a>
                        <a href="index.html" className="btn btn-link btn-lg"
                          ><i className="bi bi-linkedin"></i
                        ></a>
                        <a href="index.html" className="btn btn-link btn-lg"
                          ><i className="bi bi-envelope-fill"></i
                        ></a>
                        <a href="index.html" className="btn btn-link btn-lg"
                          ><i className="bi bi-pinterest"></i
                        ></a>
                    </div>
                    <div className="py-3">
                        <a href="index.html" className="btn btn-primary d-sm-inline-flex"
                        >Suscripción <i className="bi bi-arrow-right-circle ms-2"></i
                        ></a>
                    </div>
                    <div className="py-3">
                        
                    </div>
                </div>
                <div className="col-md-8">
                    <div className="row">
                        <div className="col-sm-3 text-center text-md-start"><img src={logofooter} className="App-logo" alt="Logo"/></div>
                        <div className="col-sm-9 text-center text-md-start">
                            <small>© 2023, Sue Joyeros. Bogotá Colombia</small> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer