import logo from '../Navbar/logo.svg'

import React from 'react'
import Cartwidget from './CartWidget/Cartwidget'
import './CartWidget/Cartwidget.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-xl bg-light fixed-top px-2">
      <div className="container-fluid">
        <a className="navbar-brand d-none d-xl-block" href="index.html"
        ><img src={logo} className="App-logo" alt="Sue Jewellery" title="Sue Jewellery" /></a>
        <a className="navbar-brand d-xl-none d-xl-block" title="Sue Jewellery" href="index.html"
        ><img src={logo} className="App-logo" alt="Sue Jewellery" /></a>
        <form className="flex-fill d-xl-none d-xl-block flexi" role="search">
          <input
            className="form-control"
            type="search"
            placeholder="Buscar..."
            aria-label="Buscar..."
          />
        </form>
        <button
          className="navbar-toggler ms-2"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <a href="index.html" className="btn btn-light btn-lg position-relative" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions" title="Cart">
          <i className="bi bi-cart"></i><Cartwidget/>
        </a>
        <div
          className="collapse navbar-collapse px-2"
          id="navbarSupportedContent"
        >
          <form className="d-flex d-none d-xl-block" role="search">
            <input
              className="form-control"
              type="search"
              placeholder="Buscar..."
              aria-label="Buscar..."
            />
          </form>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 px-3">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="index.html" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Matrimonio
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="index.html">Compromiso</a></li>
                <li><a className="dropdown-item" href="index.html">- Anillo Solitario</a></li>
                <li><a className="dropdown-item" href="index.html">- Anillo con Declaración</a></li>
                <li><a className="dropdown-item" href="index.html">- Argolla Pisaargolla</a></li>
                <li><a className="dropdown-item" href="index.html">- Anillos con piedra Certificada</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="index.html">Argollas</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="index.html" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Aretes
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="index.html">Topos</a></li>
                <li><a className="dropdown-item" href="index.html">Candongas</a></li>
                <li><a className="dropdown-item" href="index.html">Aretes</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="index.html">Dijes</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="index.html">Anillos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="index.html">Cadenas</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="index.html" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Pulseras y cadenas
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="index.html">Aros</a></li>
                <li><a className="dropdown-item" href="index.html">Pulseras</a></li>
                <li><a className="dropdown-item" href="index.html">Esclavas</a></li>
                <li><a className="dropdown-item" href="index.html">Denarios</a></li>
                <li><a className="dropdown-item" href="index.html">Tobilleras</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="index.html" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Collares
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="index.html">Gargantillas</a></li>
                <li><a className="dropdown-item" href="index.html">Collares</a></li>
                <li><a className="dropdown-item" href="index.html">Rosarios</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle active" href="index.html" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Relojes
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="index.html">Relojes Hombre</a></li>
                <li><a className="dropdown-item" href="index.html">Relojes Mujer</a></li>
                <li><a className="dropdown-item" href="index.html">Relojes Inteligentes</a></li>
                <li><a className="dropdown-item" href="index.html">Fashion</a></li>
                <li><a className="dropdown-item" href="index.html">Deportivos</a></li>
                <li><a className="dropdown-item" href="index.html">Clásicos</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="index.html">Huevos</a>
            </li>
          </ul>
          <a href="index.html" className="btn btn-primary d-sm-inline-flex"
          >Suscripción <i className="bi bi-arrow-right-circle ms-2"></i
          ></a>
          <a href="index.html" className="btn btn-light btn-lg" title="Ingrese o regístrese"
          ><i className="bi bi-person-fill"></i></a>

        </div>
      </div>
    </nav>
  )
}

export default Navbar