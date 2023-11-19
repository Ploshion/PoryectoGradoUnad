import React from "react";
import { Link , NavLink} from "react-router-dom";
import { useSelector } from 'react-redux';
import logo from './image/Log.jpg';
import './styles/Navbar.css'

function Navbar() {

    const state = useSelector((state) => state.handleCart )

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light bg-white py-3 shadow-sm">
      <div className="container">
      <Link className="navbar-brand fw-bold fs-4" to="/">
        <img
          src={logo}
          alt="Productos"
          style={{
            height: '8vh',
            maxWidth: '100%', 
            display: 'block', 
            margin: 'auto', 
          }}
          className="logo-img"
        />
      </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 flex-wrap">
            <li className="nav-item">
              <NavLink className="btn btn-outline-primary me-2" aria-current="page" to="/">
                Inicio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="btn btn-outline-primary me-2" to="/Productos">
                Productos
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="btn btn-outline-primary me-2" to="/AcercaDe">
                Acerca De Nosotros
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="btn btn-outline-primary me-2" to="/Contacto">
                Contacto
              </NavLink>
            </li>
          </ul>
          <div className="buttons">
            {/* <Link to="/Login" className="btn btn-outline-dark">
                <i className="fa fa-sign-in me-1"></i> Iniciar</Link>
            <Link to="/Registro" className="btn btn-outline-dark ms-2">
                <i className="fa fa-user-plus me-1"></i> Registro</Link> */}
            <Link to="/Carrito" className="btn btn-outline-dark ms-2">
              <i className="fa fa-shopping-cart me-1"></i> Carrito({state.length})
            </Link>
          </div>
        </div>
     </div>
    </nav>
  );
}

export default Navbar;
