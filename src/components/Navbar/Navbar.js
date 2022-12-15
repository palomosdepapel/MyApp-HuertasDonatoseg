import logo from '../Navbar/logo.svg'
import './Navbar.css';
import React from 'react'
import Cartwidget from './CartWidget/Cartwidget'
import './CartWidget/Cartwidget.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-xxl bg-light fixed-top px-2">
        <div className="container-fluid">

          <NavLink className={'navbar-brand d-none d-xxl-block'} to="/"><img src={logo} className="App-logo" alt="Sue Jewellery" title="Sue Jewellery" /></NavLink>
          <NavLink className={'navbar-brand d-xxl-none d-xxl-block'} to="/"><img src={logo} className="App-logo" alt="Sue Jewellery" title="Sue Jewellery" /></NavLink>
          
          <form className="flex-fill d-xxl-none d-xxl-block flexi" role="search">
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
          <a href="#OpenCart" className="btn btn-light btn-lg position-relative" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions" title="Cart">
            <i className="bi bi-cart"></i><Cartwidget />
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
                <a className="nav-link dropdown-toggle" href="/category/:id" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Matrimonio
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/category/:id">Compromiso</a></li>
                  <li><a className="dropdown-item" href="/category/:id">- Anillo Solitario</a></li>
                  <li><a className="dropdown-item" href="/category/:id">- Anillo con Declaración</a></li>
                  <li><a className="dropdown-item" href="/category/:id">- Argolla Pisaargolla</a></li>
                  <li><a className="dropdown-item" href="/category/:id">- Anillos con piedra Certificada</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="/category/:id">Argollas</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/category/:id" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Aretes
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/category/:id">Topos</a></li>
                  <li><a className="dropdown-item" href="/category/:id">Candongas</a></li>
                  <li><a className="dropdown-item" href="/category/:id">Aretes</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/category/:id">Dijes</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/category/:id">Anillos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/category/:id">Cadenas</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/category/:id" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Pulseras y cadenas
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/category/:id">Aros</a></li>
                  <li><a className="dropdown-item" href="/category/:id">Pulseras</a></li>
                  <li><a className="dropdown-item" href="/category/:id">Esclavas</a></li>
                  <li><a className="dropdown-item" href="/category/:id">Denarios</a></li>
                  <li><a className="dropdown-item" href="/category/:id">Tobilleras</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/category/:id" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Collares
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/category/:id">Gargantillas</a></li>
                  <li><a className="dropdown-item" href="/category/:id">Collares</a></li>
                  <li><a className="dropdown-item" href="/category/:id">Rosarios</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle active" href="/category/:id" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Relojes
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/category/:id">Relojes Hombre</a></li>
                  <li><a className="dropdown-item" href="/category/:id">Relojes Mujer</a></li>
                  <li><a className="dropdown-item" href="/category/:id">Relojes Inteligentes</a></li>
                  <li><a className="dropdown-item" href="/category/:id">Fashion</a></li>
                  <li><a className="dropdown-item" href="/category/:id">Deportivos</a></li>
                  <li><a className="dropdown-item" href="/category/:id">Clásicos</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/category/:id">Huevos</a>
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
    </header>

  )
}

export default Navbar