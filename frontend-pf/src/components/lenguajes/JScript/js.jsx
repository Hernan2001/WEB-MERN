import React from 'react';
import "../Java/css/estilosPy_v2.css";

const js = require.context('./imagen', true);
const modal = require.context('./referencias', true);


const Js = () => {
    return (
    <div>
       <link
    rel="stylesheet"
    href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
  />
  <header id="header">
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="#">
        <img className="logo" src={js('./logo.jpg')} alt="Logo" />
        Programeitor
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div
        className="collapse navbar-collapse justify-content-end"
        id="navbarNav"
      >
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="/menu/:id" aria-current="page">
              Inicio
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
  <div id="content">
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <div className="guide-container">
            <h2>Instalación</h2>
            <img src={js('./imgInstalacion.jpg')} alt="Instalación" />
            <p>
              Quieres saber importar JavaScrip a tu codigo?, entra aqui y
              descrubrelo!.
            </p>
            {/* Botón para abrir la ventana modal */}
            <button
              type="button"
              className="btn btn-secondary"
              data-toggle="modal"
              data-target="#myModal"
            >
              Abrir Guia
            </button>
          </div>
        </div>
        {/*#############################*/}
        <div className="col-md-4">
          <div className="guide-container">
            <h2>Primer código</h2>
            <img src={js('./imagenPrimer.jpg')} alt="Primer código" />
            <p>
              Aprenderas a escribir y ejecutar tú primer código en JavaScrip.
            </p>
            {/* Botón 2 */}
            <button
              type="button"
              className="btn btn-secondary"
              data-toggle="modal"
              data-target="#myModal2"
            >
              Abrir Guia
            </button>
          </div>
        </div>
        {/*#############################*/}
        <div className="col-md-4">
          <div className="guide-container">
            <h2>Códigos Basicos</h2>
            <img src={js('./imagenBase.png')} alt="Tipos de datos" />
            <p>Aprendiendo los códigos basicos de JavaScrip.</p>
            {/* Botón 3 */}
            <button
              type="button"
              className="btn btn-secondary"
              data-toggle="modal"
              data-target="#myModal3"
            >
              Abrir Guia
            </button>
          </div>
        </div>
      </div>
      {/*#############################*/}
      <div className="row">
        <div className="col-md-4">
          <div className="guide-container">
            <h2>Diferencia de lenguajes!</h2>
            <img src={js('./imagenDiferencia.jpg')} alt="Condicionales" />
            <p>
              Aquí te explicamos como JavaScrip trabaja junto a otros lenguajes
              de progracion!
            </p>
            {/* Botón 4 */}
            <button
              type="button"
              className="btn btn-secondary"
              data-toggle="modal"
              data-target="#myModal4"
            >
              Abrir Guia
            </button>
          </div>
        </div>
        {/* ###########################*/}
        {/*#############################*/}
      </div>
    </div>
  </div>
  {/* Butoom Whithe an black*/}
  <button className="floating-button" onclick="toggleDarkMode()">
    <i className="fas fa-adjust" />
  </button>
  {/*--------------------- Encabezado Inferior ----------------------*/}
  {/* Footer utilizando BootstrapGod */}
  <footer className="bg-dark text-white py-4">
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-lg-4">
          <h5>Información de contacto</h5>
          <p>Dirección: Calle Las Titas Jr 8, Lima</p>
          <p>Teléfono: +1234567890</p>
          <p>Email: programeitor_Pro@gmail.com</p>
        </div>
        <div className="col-md-6 col-lg-4">
          <h5>Enlaces útiles</h5>
          <ul className="list-unstyled">
            <li>
              <a href="#">C#</a>
            </li>
            <li>
              <a href="#">Java</a>
            </li>
            <li>
              <a href="#">JavaScrip</a>
            </li>
            <li>
              <a href="#">html</a>
            </li>
          </ul>
        </div>
        <div className="col-lg-4">
          <h5>Síguenos en redes sociales</h5>
          <ul className="list-inline">
            <li className="list-inline-item">
              <a href="#" className="white-en">
                <i className="fab fa-facebook white-icon" /> Facebook
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#" className="white-en">
                <i className="fab fa-twitter white-icon" /> Twitter
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#" className="white-en">
                <i className="fab fa-instagram white-icon ¿" /> Instagram
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#" className="white-en">
                <i className="fab fa-github white-icon" /> Git Hub
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
  {/*--------------------- Ventanas modal ----------------------*/}
  {/* Ventana modal 1 : Instalacíon */}
  <div
    className="modal fade"
    id="myModal"
    tabIndex={-1}
    role="dialog"
    aria-labelledby="myModalLabel"
    aria-hidden="true"
  >
    <div className="modal-dialog modal-dialog-centered modal-lg">
      <div className="modal-content">
        <div className="modal-header">
          <h3 className="modal-title">Instalación</h3>
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div className="modal-body">
          <p>
            JavaScript es el lenguaje de programación que debes usar para añadir
            características interactivas a tu sitio web, (por ejemplo, juegos,
            eventos que ocurren cuando los botones son presionados o los datos
            son introducidos en los formularios, efectos de estilo dinámicos,
            animación, y mucho más). Este artículo te ayudará a comenzar con
            este lenguaje extraordinario y te dará una idea de qué es posible
            hacer con él..
          </p>
          <img
            src={modal('./download.PNG')}
            alt="Imagen de ejemplo"
            className="img-fluid"
          />
          <h3>¿Qué es JavaScript realmente?</h3>
          <p>
            JavaScript es un robusto lenguaje de programación que se puede
            aplicar a un documento HTML y usarse para crear interactividad
            dinámica en los sitios web. Fue inventado por Brendan Eich,
            cofundador del proyecto Mozilla, Mozilla Foundation y la Corporación
            Mozilla.
          </p>
          <hr />
          <div className="embed-responsive embed-responsive-16by9">
            <iframe
              width={560}
              height={315}
              src="https://www.youtube.com/embed/PY_4QPg2niM"
              title="YouTube video player"
              frameBorder={0}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen=""
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Ventana modal 2 */}
  <div
    className="modal fade"
    id="myModal2"
    tabIndex={-1}
    role="dialog"
    aria-labelledby="myModalLabel2"
    aria-hidden="true"
  >
    <div className="modal-dialog modal-dialog-centered modal-lg">
      <div className="modal-content">
        <div className="modal-header">
          <h3 className="modal-title">Primer Codigo</h3>
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div className="modal-body">
          <p>
            Primero, ve a tu sitio de pruebas y crea una carpeta llamada{" "}
            <strong> scripts.</strong> Luego, dentro de la nueva carpeta de
            scripts, crea un nuevo archivo llamado <strong>main.js</strong> y
            guárdalo.
            <img
              src={modal('./Hola.PNG')}
              alt="Imagen de ejemplo 2"
              className="img-fluid"
            />
          </p>
          <p>
            A continuación, abre tu archivo <strong> index.html</strong> e
            introduce el siguiente código en una nueva línea, justo antes de la
            etiqueta de cierre <strong> body:</strong> <br />
          </p>
          <h5>Introducimos:</h5>
          <img
            src={modal('./ejecutamosHola.PNG')}
            alt="Imagen de ejemplo 2"
            className="img-fluid"
          />
          <p>
            Esto hace básicamente el mismo trabajo que el elemento <link /> para
            CSS: aplica el código JavaScript a la página, para que pueda actuar
            sobre el HTML (y CSS, o cualquier cosa en la página).
          </p>{" "}
          <br />
          <p>Ahora añade el siguiente código al archivo main.js:</p>
          <img
            src={modal('./resultadoPy.PNG')}
            alt="Imagen de ejemplo 2"
            className="img-fluid"
          />
          <h5>Resultado:</h5>
          <p>
            Finalmente, asegúrate de que has guardado los archivos HTML y
            JavaScript, y abre index.html en el navegador. Deberías ver algo
            así:
          </p>
          <img
            src={modal('./final.PNG')}
            alt="Imagen de ejemplo 2"
            className="img-fluid"
          />
          <hr />
          <h4>Video Resumen</h4>
          <div className="embed-responsive embed-responsive-16by9">
            <iframe
              width={560}
              height={315}
              src="https://www.youtube.com/embed/8ClovCpjc5U"
              title="YouTube video player"
              frameBorder={0}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen=""
            />
          </div>
          <p>
            <br />
            <strong>NOTA:</strong> no olvides añadir{" "}
            <strong>el llamado de JavaScrip</strong> al final del body
          </p>
        </div>
      </div>
    </div>
  </div>
  {/* Ventana modal 3 */}
  <div
    className="modal fade"
    id="myModal3"
    tabIndex={-1}
    role="dialog"
    aria-labelledby="myModalLabel3"
    aria-hidden="true"
  >
    <div className="modal-dialog modal-dialog-centered modal-lg">
      <div className="modal-content">
        <div className="modal-header">
          <h3 className="modal-title">Tipos de Variables o Datos</h3>
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div className="modal-body">
          <p>
            En javascrip, hay varios tipos de datos que se utilizan para
            representar diferentes tipos de valores. Aquí tienes algunos de los
            tipos de datos más comunes en javascrip:
          </p>
          <table>
            <tbody>
              <tr className="table-info">
                <th>Tipo de Dato</th>
                <th>Ejemplo</th>
                <th>Descripción</th>
              </tr>
              <tr>
                <td>Undefined</td>
                <td>
                  let x; console.log(x); // Imprimirá "undefined" en la consola
                </td>
                <td>
                  cuando una variable no tiene un valor asignado, se considera
                  "undefined"
                </td>
              </tr>
              <tr>
                <td>Boolean</td>
                <td>let esMayorDeEdad = true; let tienePermiso = false;</td>
                <td>
                  las variables booleanas suelen representar un estado verdadero
                  o falso
                </td>
              </tr>
              <tr>
                <td>Number</td>
                <td>
                  {" "}
                  let edad = 25; let pi = 3.14159; let cantidadDeProductos = 10;
                </td>
                <td>
                  {" "}
                  las variables numéricas se utilizan para almacenar valores
                  numéricos
                </td>
              </tr>
              <tr>
                <td>String</td>
                <td>
                  let nombre = "Juan"; let mensaje = "¡Hola, mundo!"; let
                  direccion = "Calle Principal, 123";
                </td>
                <td>
                  las cadenas de texto se utilizan para almacenar y manipular
                  información textual
                </td>
              </tr>
              <tr>
                <td>BigInt</td>
                <td>
                  let numero1 = BigInt(12345678901234567890); let numero2 =
                  BigInt("98765432109876543210");
                </td>
                <td>
                  BigInt en JavaScript permite representar y operar con números
                  enteros de tamaño arbitrario
                </td>
              </tr>
              <tr>
                <td>Symbol</td>
                <td>
                  const simbolo1 = Symbol(); const simbolo2 =
                  Symbol("descripcion");
                </td>
                <td>
                  valores únicos e inmutables que se utilizan como
                  identificadores
                </td>
              </tr>
              <tr>
                <td>Null</td>
                <td>
                  let persona = null; if (persona === null) {"{"}
                  console.log("La persona no está definida.");
                  {"}"}
                  persona = {"{"} nombre: "Juan", edad: 30 {"}"};
                </td>
                <td>
                  se utiliza para indicar la ausencia de un valor o la no
                  existencia de un objeto
                </td>
              </tr>
              <tr>
                <td>Object</td>
                <td>
                  const persona = {"{"}
                  nombre: "Juan", edad: 30, ciudad: "México"
                  {"}"};
                </td>
                <td>
                  son estructuras de datos que contienen propiedades y métodos
                </td>
              </tr>
            </tbody>
          </table>
          <br />
          <p>
            Los tipos de datos te permiten clasificar la información que vamos a
            manejar en el programa.
          </p>
          <hr />
          <h5>
            Vamos a ver un primer acercamiento a los tipos de datos en
            JAVASCRIPT:{" "}
          </h5>
          <div className="embed-responsive embed-responsive-16by9">
            <iframe
              width={560}
              height={315}
              src="https://www.youtube.com/embed/baDdsQ4aw4o"
              title="YouTube video player"
              frameBorder={0}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen=""
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Ventana modal 4 */}
  <div
    className="modal fade"
    id="myModal4"
    tabIndex={-1}
    role="dialog"
    aria-labelledby="myModalLabel4"
    aria-hidden="true"
  >
    <div className="modal-dialog modal-dialog-centered modal-lg">
      <div className="modal-content">
        <div className="modal-header">
          <h3 className="modal-title">
            Diferencias entra HTML, CCS y JAVASCRIP
          </h3>
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>
        {/*DIFERENCIAS ENTRE HTML,CSS,JAVASCRIP */}
        <br />
        <br />
        <div className="container text-center">
          <div className="container px-4 text-center ">
            <div className="row gx-5">
              <div className="col">
                <div className="h3 p-3 bg-warning  ">HTML</div>
                lenguaje de marcado utilizado para estructurar elementos de la
                página, como párrafos, enlaces, títulos, tablas, imágenes e
                incluso videos.
                <img src={js('./html.jpg')} alt="" width={250} height={400} />
              </div>
              <div className="col">
                <div className="h3 p-3 bg-danger font-side">css</div>
                lenguaje de estilo utilizado para definir colores, fuentes,
                tamaños,posicionamiento y cualquier otro valor estético para los
                elementos de la página.
                <br />
                <img src={js('./css.jpg')} alt="" width={250} height={400} />
              </div>
              <div className="col">
                <div className="h3 p-3 bg-primary">JavaScript</div>
                lenguaje de programación utilizado para hacer la página con más
                movimiento, pudiendo actualizar elementos de forma dinámica y
                manejar mejor los datos enviados y recibidos en la página.
                <img src={js('./javascrip.jpg')} width={250} height={400} />
              </div>
            </div>
          </div>
          <h3 className="my-5">video tutorial de JavaScript</h3>
          <div className=" text-center  my-5 ">
            <iframe
              width={560}
              height={315}
              src="https://www.youtube.com/embed/Q9fwkpxr3Dw"
              title="YouTube video player"
              frameBorder={0}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen=""
            />
          </div>
        </div>
      </div>
    </div>
  </div>
 
    </div>
        
    );
  };
  
  export default Js;