import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import background from "../img/background.png";
import logo from "../img/InGeosBlanco.png";

function Inicio() {
  return (
    <div>
      <Navbar />
      <div
        id="carouselExampleSlidesOnly"
        class="carousel slide"
        data-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img className="homeImg" src={background} alt="home" />

            <div class="carousel-caption d-none d-md-block">
              <h1 className="title invisible">
                <strong>Consultores Técnicos INGEOS S.A.</strong>
              </h1>
              <img
                className="ingeos-logo"
                src={logo}
                alt="Consultores Técnicos INGEOS S.A."
              />
              <p className="subtitle">
                <strong>Su aliado estratégico en soluciones geográficas</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
      <section id="servicios">
        <div className="container-fluid text-center ptb">
          <h2 className="text-center">
            <strong>Nuestros servicios</strong>
          </h2>
          <div className="row col-md-12 justify-content-center ptb-soft">
            <div className="col-md-3 shadow-lg ptb-soft">
              <p className="text-center lead">
                <strong>Venta de equipos</strong>
              </p>
              <hr />
              <p>
                Somos distribuidores exclusivos de la marca Topcon, Sokkia y el
                software DTC PRO de Diseños Digitales S.A.
              </p>
            </div>
            <div className="col-md-3 shadow-lg ptb-soft">
              <p className="text-center lead">
                <strong>Seminarios</strong>
              </p>
              <hr />
              <p>
                Impartimos seminarios para la contínua formación de los
                profesionales en topografía de Costa Rica.
              </p>
            </div>
            <div className="col-md-3 shadow-lg ptb-soft">
              <p className="text-center lead">
                <strong>Alquiler de equipos</strong>
              </p>
              <hr />
              <p>
                Poseemos equipos disponibles para el alquiler en el área de la
                topografía.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="nosotros" className="nosotros">
        <div className="container ptb">
          <h2 className="text-center">
            <strong>Sobre nosotros</strong>
          </h2>
          <div className="row">
            <div className="col-md-6">
              <h3 className="subtitle2 text-center">¿Quiénes somos?</h3>
              <p className="text-justify">
                Consultores Técnicos InGeos S.A es distribuidor de Equipos de
                Topografía. Además es representante del Software Topográfico
                DTCPRO de Diseños Digitales S.A. Con esta unión se pretende
                abarcar todas las necesidades de adquisición de equipo
                topográfico, capacitación, soporte y de accesabilidad a la
                tecnología CAD.
              </p>
            </div>
            <div className="col-md-6">
              <h3 className="subtitle2 text-center">¿Qué nos catacteriza?</h3>
              <p className="text-justify">
                La entrega que brindamos a nuestros clientes, desde que
                iniciamos el proceso de adquisición de un equipo hasta el
                continuo apoyo que siempre procuramos brindar ante el buen
                manejo y funcionamiento de nuestros equipos. El brindar un
                constante soporte a nuestros clientes es lo que nos representa.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container ptb">
          <div className="col-md-12 col-sm-12">
            <h2 className="text-center">
              <strong>¿Dónde nos ubicamos?</strong>
            </h2>
            <br />
            <p>
              Calle 27, Av. 8, Barrio Fransisco Peralta, Planta Baja Edifcio
              ANFE. San José, Costa Rica.
            </p>
            <iframe
              className="mapframe"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.04337993173!2d-84.06905378463328!3d9.930345376952959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0e37a550629b5%3A0xb64c8838bbcfc1e1!2sConsultores+T%C3%A9cnicos+InGeos+S.A.!5e0!3m2!1ses-419!2ses!4v1451332335051"
              title="Ingeos location"
              width="100%"
              height="350"
              frameborder="0"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </section>
      <section id="contactenos" className="bg-primarycti">
        <div className="container ptb" align="center">
          <div className="col-md-12" align="center">
            <h3 className="text-white">Póngase en contacto con nosotros</h3>
            <p className="text-white mb-3">
              Teléfono: (506) 2253-0298 <br />
              Fax: (506) 2253-0298 <br />
              Emal: ventas@ctingeos.com
            </p>
          </div>
          <div className="col-md-6 ptb-soft shadow-lg bg-white" align="center">
            <div className="col-md-12" align="center">
              <p>
                <strong>Escríbenos a nuestro departamento de ventas</strong>
              </p>
            </div>
            <form
              className="form-horizontal"
              method="post"
              action="contacto.php"
            >
              <div className="form-group">
                <div className="col-sm-12">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Nombre"
                    name="first_name"
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="col-sm-12">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Apellido"
                    name="last_name"
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="col-sm-12">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Teléfono"
                    name="telephone"
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="col-sm-12">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Email"
                    name="email"
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="col-sm-12">
                  <textarea
                    className="form-control"
                    rows="3"
                    name="comments"
                    placeholder="Mensaje"
                  ></textarea>
                </div>
              </div>
              <div className="form-group">
                <div className="col-sm-12">
                  <input
                    type="number"
                    name="catcha"
                    className="form-control"
                    placeholder="¿Cuánto es 10 + 8?"
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="btn-group col-sm-12">
                  <button type="reset" className="btn btn-danger">
                    Reiniciar
                  </button>
                  <button type="submit" className="btn btn-success">
                    Enviar
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Inicio;
