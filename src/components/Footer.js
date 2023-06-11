import React from "react";

function Footer() {
  return (
    <>
      <div className="col-sm-12 text-center p-3">
        <strong>Páginas asociadas</strong>
        <ul className="link-list">
          <li>
            <a href="https://www.topconpositioning.com/" className="linkfoot">
              Topcon
            </a>
          </li>
          <li>
            <a href="http://sokkialatinamerica.com/" className="linkfoot">
              Sokkia
            </a>
          </li>
          <li>
            <a href="http://www.disedig.com/" className="linkfoot">
              Diseños Digitales
            </a>
          </li>
        </ul>
      </div>
      <div className="col-sm-12 text-center shadow-lg p-3 bg-white">
        <strong>© Consultores Técnicos InGeos, All rights reserved.</strong>
      </div>
    </>
  );
  /*
  return (
    <>
      <div className="container">
        <div className="row ptb-soft">
          <div className="col-md-6">
            
          </div>
          <div className="col-md-6">
            
          </div>
        </div>
      </div>
      <div className="col-sm-12 text-center shadow-lg p-3 bg-white">
        © Consultores Técnicos InGeos, All rights reserved.
      </div>
    </>
  );
  */
}

export default Footer;
