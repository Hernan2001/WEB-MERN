import React from 'react';
import "../Java/css/estilosPy_v2.css";

const html = require.context('./imagen', true);
const modal = require.context('./referencias', true);


const Js = () => {
    return (
    <div>
      

<>
<link
    rel="stylesheet"
    href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
  />
  <header id="header">
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="#">
        <img className="logo"src={html('./logo.jpg')} alt="Logo" />
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
            <img src={html('./Insta.jpg')}  alt="Instalación" />
            <p>Aquí se muestran los pasos de instalación de HTML y CSS.</p>
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
          <div className="card">
            <img
              src={html('./primer.jpg')} 
              className="card-img-top"
              alt="Primer código"
            />
            <div className="card-body">
              <h2 className="card-title">Primer código</h2>
              <p className="card-text">
                Aprenderás a escribir y ejecutar tu primer código en HTML y CSS.
              </p>
              {/* Botón 2 */}
              <button
                type="button"
                className="btn btn-secondary"
                data-toggle="modal"
                data-target="#myModal2"
              >
                Abrir Guía
              </button>
            </div>
          </div>
        </div>
        {/*#############################*/}
        <div className="col-md-4">
          <div className="card">
            <img
              src={html('./elemento.jpg')} 
              className="card-img-top"
              alt="Elementos HTML"
            />
            <div className="card-body">
              <h2 className="card-title">Elementos HTML</h2>
              <p className="card-text">
                Conoce los elementos básicos de HTML y cómo estructurar tu
                página web.
              </p>
              {/* Botón 3 */}
              <button
                type="button"
                className="btn btn-secondary"
                data-toggle="modal"
                data-target="#myModal3"
              >
                Abrir Guía
              </button>
            </div>
          </div>
        </div>
      </div>
      {/*#############################*/}
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <img
              src={html('./selectores.jpg')} 
              className="card-img-top"
              alt="CSS Selectores"
            />
            <div className="card-body">
              <h2 className="card-title">Responsive Design</h2>
              <p className="card-text">
                Aprende a implementar tu codigo para todo tipo de dispositivo
                digital!
              </p>
              {/* Botón 4 */}
              <button
                type="button"
                className="btn btn-secondary"
                data-toggle="modal"
                data-target="#myModal4"
              >
                Abrir Guía
              </button>
            </div>
          </div>
        </div>
        {/* ###########################*/}
        <div className="col-md-4">
          <div className="card">
            <img
              src={html('./estilos.jpg')} 
              className="card-img-top"
              alt="CSS Estilos"
            />
            <div className="card-body">
              <h2 className="card-title">CSS Estilos</h2>
              <p className="card-text">
                Descubre cómo aplicar diferentes estilos como colores, fuentes y
                márgenes en CSS.
              </p>
              {/* Botón 5 */}
              <button
                type="button"
                className="btn btn-secondary"
                data-toggle="modal"
                data-target="#myModal5"
              >
                Abrir Guía
              </button>
            </div>
          </div>
        </div>
        {/*#############################*/}
        <div className="col-md-4">
          <div className="guide-container">
            <h2>Layouts</h2>
            <img src={html('./layout.jpg')}  alt="Imagen 6" />
            <p className="card-text">
              Aprende a crear diseños de página utilizando CSS con diferentes
              técnicas de layout.
            </p>
            {/* Botón 6 */}
            <button
              type="button"
              className="btn btn-secondary"
              data-toggle="modal"
              data-target="#myModal6"
            >
              Abrir Guia
            </button>
          </div>
        </div>
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
  {/* Ventana modal 1 : Instalación */}
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
            Para comenzar a trabajar con HTML y CSS, no es necesario instalar
            nada, ya que son lenguajes de marcado y estilo que se utilizan
            directamente en cualquier editor de texto.
          </p>
          <img
            src={modal('./visual.jpg')} 
            alt="Imagen de ejemplo 2"
            className="img-fluid"
          />
          <p>
            Puedes utilizar cualquier editor de texto simple, como Notepad en
            Windows o TextEdit en macOS, para escribir y guardar tus archivos
            HTML y CSS con extensión .html y .css, respectivamente.
          </p>
          <p>
            Si deseas una experiencia más completa y cómoda para el desarrollo
            web, puedes utilizar editores de código avanzados como Visual Studio
            Code, Sublime Text, Atom o Brackets, que ofrecen funciones
            adicionales para trabajar con HTML y CSS, como resaltado de
            sintaxis, autocompletado y vista previa en vivo.
          </p>
          <p>
            Recuerda siempre vincular tus archivos CSS a tus archivos HTML
            utilizando la etiqueta <code>&lt;link&gt;</code> en el encabezado
            del documento HTML, de la siguiente manera:
          </p>
          <pre className="p-3 mb-2 bg-dark text-white">
            {"          "}&lt;link rel="stylesheet" href="estilos.css"&gt;{"\n"}
            {"        "}
          </pre>
        </div>
      </div>
    </div>
  </div>
  {/* Ventana modal 2 */}
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
          <h3 className="modal-title">Primer Código</h3>
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
            Para escribir tu primer código en HTML, simplemente necesitas abrir
            un archivo nuevo en tu editor de texto preferido y escribir el
            siguiente código:
          </p>
          <pre className="p-3 mb-2 bg-dark text-white">
            {"          "}&lt;!DOCTYPE html&gt;{"\n"}
            {"          "}&lt;html&gt;{"\n"}
            {"          "}&lt;head&gt;{"\n"}
            {"            "}&lt;title&gt;Mi primera página&lt;/title&gt;{"\n"}
            {"          "}&lt;/head&gt;{"\n"}
            {"          "}&lt;body&gt;{"\n"}
            {"            "}&lt;h1&gt;Hola Mundo!&lt;/h1&gt;{"\n"}
            {"          "}&lt;/body&gt;{"\n"}
            {"          "}&lt;/html&gt;{"\n"}
            {"        "}
          </pre>
          <p>
            Este es un ejemplo básico de una página web HTML que contiene un
            encabezado de nivel 1 (<code>&lt;h1&gt;</code>) con el texto "Hola
            Mundo!".
          </p>
          <p>
            Para visualizar tu página web, simplemente guarda el archivo con
            extensión .html y ábrelo con tu navegador web preferido. Verás el
            mensaje "Hola Mundo!" en la página.
          </p>
          <iframe
            id="videoIframe6"
            className="embed-responsive-item"
            src="https://www.youtube.com/embed/3yM5uXp-T_0"
            allowFullScreen=""
          />
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
          <h3 className="modal-title">Elementos HTML</h3>
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
            HTML (HyperText Markup Language) es un lenguaje de marcado utilizado
            para estructurar el contenido de una página web. Está compuesto por
            una serie de elementos que representan diferentes partes del
            contenido.
          </p>
          <p>Algunos de los elementos más comunes en HTML son:</p>
          <ul>
            <li>
              <code>&lt;h1&gt;</code> - <code>&lt;h6&gt;</code>: Encabezados de
              diferentes niveles
            </li>
            <li>
              <code>&lt;p&gt;</code>: Párrafos de texto
            </li>
            <li>
              <code>&lt;a&gt;</code>: Enlaces o hipervínculos
            </li>
            <li>
              <code>&lt;img&gt;</code>: Imágenes
            </li>
            <li>
              <code>&lt;ul&gt;</code> y <code>&lt;ol&gt;</code>: Listas
              desordenadas y ordenadas
            </li>
            <li>
              <code>&lt;li&gt;</code>: Elementos de lista
            </li>
            <li>
              <code>&lt;div&gt;</code>: Contenedor genérico
            </li>
            <li>
              <code>&lt;span&gt;</code>: Contenedor en línea
            </li>
            <li>
              <code>&lt;table&gt;</code>: Tablas
            </li>
            <li>
              <code>&lt;form&gt;</code>: Formularios
            </li>
          </ul>
          <p>
            Estos son solo algunos ejemplos de elementos HTML que puedes
            utilizar para estructurar y diseñar tu página web. Puedes aprender
            más sobre HTML y su sintaxis consultando documentación en línea o
            tutoriales.
          </p>
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
    aria-labelledby="myModalLabel5"
    aria-hidden="true"
  >
    <div className="modal-dialog modal-dialog-centered modal-lg">
      <div className="modal-content">
        <div className="modal-header">
          <h3 className="modal-title">Responsive Design</h3>
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
            El diseño responsive o diseño adaptable es una técnica de diseño web
            que busca adaptar la apariencia y disposición de una página web a
            diferentes dispositivos y tamaños de pantalla.
          </p>
          <img
            src={modal('./responsive.jpg')} 
            alt="Imagen de ejemplo"
            className="img-fluid"
          />
          <p>
            Con CSS, puedes utilizar media queries para aplicar estilos
            específicos a diferentes resoluciones de pantalla. Por ejemplo:
          </p>
          <pre className="p-3 mb-2 bg-dark text-white">
            {"          "}/* Estilos para pantallas más pequeñas */{"\n"}
            {"          "}@media screen and (max-width: 768px) {"{"}
            {"\n"}
            {"            "}body {"{"}
            {"\n"}
            {"              "}font-size: 14px;{"\n"}
            {"            "}
            {"}"}
            {"\n"}
            {"            "}h1 {"{"}
            {"\n"}
            {"              "}font-size: 24px;{"\n"}
            {"            "}
            {"}"}
            {"\n"}
            {"          "}
            {"}"}
            {"\n"}
            {"\n"}
            {"          "}/* Estilos para pantallas más grandes */{"\n"}
            {"          "}@media screen and (min-width: 768px) {"{"}
            {"\n"}
            {"            "}body {"{"}
            {"\n"}
            {"              "}font-size: 16px;{"\n"}
            {"            "}
            {"}"}
            {"\n"}
            {"            "}h1 {"{"}
            {"\n"}
            {"              "}font-size: 32px;{"\n"}
            {"            "}
            {"}"}
            {"\n"}
            {"          "}
            {"}"}
            {"\n"}
            {"        "}
          </pre>
          <p>
            En este ejemplo, hemos utilizado media queries para cambiar el
            tamaño de fuente y el tamaño del encabezado <code>&lt;h1&gt;</code>{" "}
            según el ancho de la pantalla. Cuando el ancho de la pantalla es
            menor o igual a 768px, se aplicarán los estilos para pantallas
            pequeñas. Cuando el ancho de la pantalla es mayor a 768px, se
            aplicarán los estilos para pantallas más grandes.
          </p>
          <p>
            De esta manera, puedes crear una experiencia de usuario óptima en
            diferentes dispositivos, como computadoras de escritorio, tabletas y
            teléfonos móviles.
          </p>
        </div>
      </div>
    </div>
  </div>
  {/* Ventana modal 5 */}
  <div
    className="modal fade"
    id="myModal5"
    tabIndex={-1}
    role="dialog"
    aria-labelledby="myModalLabel4"
    aria-hidden="true"
  >
    <div className="modal-dialog modal-dialog-centered modal-lg">
      <div className="modal-content">
        <div className="modal-header">
          <h3 className="modal-title">Estilos CSS</h3>
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
            CSS (Cascading Style Sheets) es un lenguaje de estilo utilizado para
            dar formato y diseño a las páginas web HTML. Con CSS, puedes
            controlar la apariencia de los elementos HTML, como el tamaño,
            color, fuente, espaciado y posición.
          </p>
          <p>
            Los estilos CSS se aplican mediante reglas que se especifican en un
            bloque de código. Cada regla consta de un selector (que indica qué
            elementos se afectarán) y un conjunto de propiedades y valores (que
            definen el estilo).
          </p>
          <p>
            Por ejemplo, para cambiar el color de un encabezado de nivel 1 a
            rojo, puedes utilizar la siguiente regla CSS:
          </p>
          <pre className="p-3 mb-2 bg-dark text-white">
            {"          "}h1 {"{"}
            {"\n"}
            {"            "}color: red;{"\n"}
            {"          "}
            {"}"}
            {"\n"}
            {"        "}
          </pre>
          <p>
            Esta regla se aplicará a todos los elementos <code>&lt;h1&gt;</code>{" "}
            en la página y cambiará su color de texto a rojo.
          </p>
          <p>
            Además de aplicar estilos directamente a elementos individuales,
            también puedes utilizar clases y IDs para aplicar estilos a grupos
            específicos de elementos.
          </p>
          <p>Por ejemplo:</p>
          <pre className="p-3 mb-2 bg-dark text-white">
            {"          "}&lt;style&gt;{"\n"}
            {"            "}.destacado {"{"}
            {"\n"}
            {"              "}font-weight: bold;{"\n"}
            {"              "}color: blue;{"\n"}
            {"            "}
            {"}"}
            {"\n"}
            {"            "}#titulo {"{"}
            {"\n"}
            {"              "}font-size: 24px;{"\n"}
            {"            "}
            {"}"}
            {"\n"}
            {"          "}&lt;/style&gt;{"\n"}
            {"\n"}
            {"          "}&lt;h2 class="destacado"&gt;Título
            destacado&lt;/h2&gt;{"\n"}
            {"          "}&lt;p&gt;Este es un párrafo normal.&lt;/p&gt;{"\n"}
            {"          "}&lt;h1 id="titulo"&gt;Título grande&lt;/h1&gt;{"\n"}
            {"        "}
          </pre>
          <p>
            En este ejemplo, hemos definido dos reglas CSS, una para la clase
            "destacado" y otra para el ID "titulo". Luego, hemos aplicado estas
            clases e IDs a los elementos HTML correspondientes para darles
            estilos específicos.
          </p>
        </div>
      </div>
    </div>
  </div>
  {/* Ventana modal 6 */}
  {/* Ventana modal 6 */}
  <div
    className="modal fade"
    id="myModal6"
    tabIndex={-1}
    role="dialog"
    aria-labelledby="myModalLabel6"
    aria-hidden="true"
  >
    <div className="modal-dialog modal-dialog-centered modal-lg">
      <div className="modal-content">
        <div className="modal-header">
          <h3 className="modal-title">Layouts en HTML y CSS</h3>
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
            El layout de una página web se refiere a la forma en que los
            elementos y contenido están organizados y dispuestos en la página.
            Un buen layout es esencial para que una página web sea visualmente
            atractiva, fácil de usar y proporcione una experiencia agradable al
            usuario.
          </p>
          <p>
            En HTML y CSS, hay varias formas de crear layouts para una página
            web. Algunas técnicas comunes incluyen el uso de contenedores,
            flexbox, y cuadrículas (grid). A continuación, se explican
            brevemente estas técnicas:
          </p>
          <h5>1. Layout con contenedores:</h5>
          <p>
            Una forma simple de organizar el contenido es utilizando
            contenedores HTML como <code>&lt;div&gt;</code>. Los contenedores
            permiten agrupar elementos y aplicar estilos a grupos específicos de
            contenido.
          </p>
          <pre className="p-3 mb-2 bg-dark text-white">
            {"          "}&lt;div id="contenedor"&gt;{"\n"}
            {"            "}&lt;p&gt;Este es el contenido del
            contenedor&lt;/p&gt;{"\n"}
            {"          "}&lt;/div&gt;{"\n"}
            {"        "}
          </pre>
          <p>
            En CSS, puedes aplicar estilos al contenedor utilizando su ID o
            clase:
          </p>
          <pre className="p-3 mb-2 bg-dark text-white">
            {"          "}#contenedor {"{"}
            {"\n"}
            {"            "}background-color: #f2f2f2;{"\n"}
            {"            "}padding: 20px;{"\n"}
            {"            "}border: 1px solid #ccc;{"\n"}
            {"          "}
            {"}"}
            {"\n"}
            {"        "}
          </pre>
          <h5>2. Flexbox:</h5>
          <p>
            Flexbox es una técnica de diseño que permite crear diseños flexibles
            y responsivos. Con Flexbox, puedes definir fácilmente cómo los
            elementos se deben distribuir, alinear y ajustar en un contenedor.
          </p>
          <pre className="p-3 mb-2 bg-dark text-white">
            {"          "}.contenedor-flexbox {"{"}
            {"\n"}
            {"            "}display: flex;{"\n"}
            {"            "}justify-content: space-between;{"\n"}
            {"            "}align-items: center;{"\n"}
            {"          "}
            {"}"}
            {"\n"}
            {"          "}.item-flex {"{"}
            {"\n"}
            {"            "}flex: 1;{"\n"}
            {"            "}margin: 10px;{"\n"}
            {"          "}
            {"}"}
            {"\n"}
            {"        "}
          </pre>
          <h5>3. Cuadrículas (Grid):</h5>
          <p>
            Las cuadrículas (Grid) son una forma más avanzada de crear diseños
            complejos. Con CSS Grid, puedes dividir la página en filas y
            columnas para colocar elementos en posiciones específicas.
          </p>
          <pre className="p-3 mb-2 bg-dark text-white">
            {"          "}.contenedor-grid {"{"}
            {"\n"}
            {"            "}display: grid;{"\n"}
            {"            "}grid-template-columns: repeat(3, 1fr);{"\n"}
            {"            "}grid-gap: 10px;{"\n"}
            {"          "}
            {"}"}
            {"\n"}
            {"          "}.item-grid {"{"}
            {"\n"}
            {"            "}background-color: #f2f2f2;{"\n"}
            {"            "}padding: 20px;{"\n"}
            {"            "}border: 1px solid #ccc;{"\n"}
            {"          "}
            {"}"}
            {"\n"}
            {"        "}
          </pre>
          <p>
            Estas son solo algunas de las técnicas más comunes para crear
            layouts en HTML y CSS. Hay muchas otras formas de organizar el
            contenido en una página web, y la elección depende del diseño y la
            funcionalidad que desees lograr.
          </p>
          <hr />
          <h4>¡Aprende más sobre layouts en HTML y CSS!</h4>
          <div className="embed-responsive embed-responsive-16by9">
            <iframe
              id="videoIframe6"
              className="embed-responsive-item"
              src="https://www.youtube.com/embed/Ewv_JTbTB7M"
              allowFullScreen=""
            />
          </div>
          <a
            href="https://developer.mozilla.org/es/docs/Web/CSS/Layout_cookbook"
            target="_blank"
          >
            Guía de Layouts en Mozilla
          </a>
        </div>
      </div>
    </div>
  </div>
</>

  

 
    </div>
        
    );
  };
  
  export default Js;