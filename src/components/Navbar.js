import React from "react";

function Navbar() {
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-light shadow-lg bg-white">
      <div className="container">
        <a className="navbar-brand" href="/">
          <strong className="text-cti">INGEOS</strong>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="/">
                Inicio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#servicios">
                Servicios
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#nosotros">
                Nosotros
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contactenos">
                Contáctenos
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
