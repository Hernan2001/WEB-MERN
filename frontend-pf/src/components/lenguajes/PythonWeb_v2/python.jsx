import React from 'react';
import "../Java/css/estilosPy_v2.css";

const python = require.context('./imagen', true);
const modal = require.context('./referencias', true);


const Python = () => {
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
        <img className='logo'
           src="https://cdn-icons-png.flaticon.com/512/5968/5968350.png "
          alt="Logo"
        />
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
            <img src={python('./Insta.PNG')} alt="Instalación" />
            <p>Aquí se muestran los pasos de instalación de Python.</p>
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
            <img src={python('./HolaPu.PNG')} alt="Primer código" />
            <p>Aprenderas a escribir y ejecutar tú primer código en Python.</p>
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
            <h2>Tipos de datos</h2>
            <img src={python('./T_D.PNG')} alt="Tipos de datos" />
            <p>Aprenderas los tipos de datos basicos en Python.</p>
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
            <h2>Condiciones</h2>
            <img src={python('./Sentencias.PNG')} alt="Condicionales" />
            <p>Aquí se explican los condicionales en Python.</p>
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
        <div className="col-md-4">
          <div className="guide-container">
            <h2>Bucles</h2>
            <img src={python('./bucles.PNG')} alt="Imagen 5" />
            <p>Aprenderas sobre ciclos repetitivos y su implementación</p>
            {/* Botón 5 */}
            <button
              type="button"
              className="btn btn-secondary"
              data-toggle="modal"
              data-target="#myModal5"
            >
              Abrir Guia
            </button>
          </div>
        </div>
        {/*#############################*/}
        <div className="col-md-4">
          <div className="guide-container">
            <h2>Colecciones</h2>
            <img src={python('./Colecc.PNG')} alt="Imagen 6" />
            <p>Aprenderas lo mas basico sobre este tema.</p>
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
            Para aquellos que no tienen Python instalado de fábrica, vayamos a
            <a href="https://www.python.org/" target="_blank">
              https://www.python.org/
            </a>
            para descargar la última versión disponible.
          </p>
          <img
            src={modal('./download.PNG')}
            alt="Imagen de ejemplo"
            className="img-fluid"
          />
          <p>
            Para Windows, obtendremos un instalador que hará todo el trabajo. En
            lo único que debemos prestar atención es en seleccionar el casillero{" "}
            <strong>Add Python X.Y.Z to PATH</strong>, que nos permitirá abrir
            Python sin indicar su ruta completa.
          </p>
          <hr />
          <div className="embed-responsive embed-responsive-16by9">
            <iframe
              id="videoIframe"
              className="embed-responsive-item"
              src="https://www.youtube.com/embed/jg_bySSiXOM"
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
            La instalación de Python incluye un IDE (un programa en donde
            escribir el código) llamado <strong>IDLE</strong>, muy básico, pero
            que nos será útil en nuestros primeros pasos en el lenguaje. Si ya
            tienes tu editor de código favorito también puedes usarlo. Para
            crear nuestro primer programa vamos a abrir IDLE y seleccionar el
            menú <strong>File</strong> &gt; <strong>New File</strong> para crear
            un nuevo documento. Luego, escribiremos lo siguiente:
          </p>
          <img
            src={modal('./Hola.PNG')}
            alt="Imagen de ejemplo 2"
            className="img-fluid"
          />
          <p>
            Este es un auténtico código de Python. ¡Solo una línea! En ella
            llamamos a la función incorporada <strong>print() </strong>y le
            pasamos una cadena de caracteres(en este caso "Hola Mundo") como
            argumento para que imprima en la pantalla. Para poder ejecutar este
            pequeño código primero debemos guardarlo. Para ello, en IDLE vamos a
            ir al menú <strong>File</strong> &gt; <strong>Save</strong> y lo
            guardaremos en el escritorio como <strong>hola.py</strong>(o como se
            te de la gana). <br />
          </p>
          <h5>Ejecutamos:</h5>
          <img
            src={modal('./ejecutamosHola.PNG')}
            alt="Imagen de ejemplo 2"
            className="img-fluid"
          />
          <p>
            Se abrirá una ventana nueva y verás (en color azul) el mensaje
            mostrado por el programa:
          </p>
          <img
            src={modal('./resultadoPy.PNG')}
            alt="Imagen de ejemplo 2"
            className="img-fluid"
          />
          <hr />
          <h4>Video Resumen</h4>
          <div className="embed-responsive embed-responsive-16by9">
            <iframe
              id="videoIframe2"
              className="embed-responsive-item"
              src="https://www.youtube.com/embed/Ik94gPCXlOY"
              allowFullScreen=""
            />
          </div>
          <p>
            <br />
            <strong>NOTA:</strong> no olvides añadir el <strong>.py</strong> al
            final de cada nombre que le des a tus proyectos
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
            En Python, hay varios tipos de datos que se utilizan para
            representar diferentes tipos de valores. Aquí tienes algunos de los
            tipos de datos más comunes en Python:
          </p>
          <table>
            <tbody>
              <tr className="table-info">
                <th>Tipo de Dato</th>
                <th>Ejemplo</th>
                <th>Descripción</th>
              </tr>
              <tr>
                <td>int</td>
                <td>5</td>
                <td>Números enteros</td>
              </tr>
              <tr>
                <td>float</td>
                <td>3.14</td>
                <td>Números de punto flotante</td>
              </tr>
              <tr>
                <td>str</td>
                <td>"Hola"</td>
                <td>Cadenas de caracteres</td>
              </tr>
              <tr>
                <td>bool</td>
                <td>True</td>
                <td>Valores de verdad (verdadero o falso)</td>
              </tr>
              <tr>
                <td>list</td>
                <td>[1, 2, 3]</td>
                <td>Listas (secuencia ordenada y mutable)</td>
              </tr>
              <tr>
                <td>tuple</td>
                <td>(1, 2, 3)</td>
                <td>Tuplas (secuencia ordenada e inmutable)</td>
              </tr>
              <tr>
                <td>dict</td>
                <td>
                  {"{"}'nombre': 'Juan', 'edad': 25{"}"}
                </td>
                <td>Diccionarios (colección de pares clave-valor)</td>
              </tr>
              <tr>
                <td>set</td>
                <td>
                  {"{"}1, 2, 3{"}"}
                </td>
                <td>
                  Conjuntos (colección no ordenada y sin elementos repetidos)
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
            Vamos a ver un primer acercamiento a los tipos de datos en Python:{" "}
          </h5>
          <div className="embed-responsive embed-responsive-16by9">
            <iframe
              id="videoIframe3"
              className="embed-responsive-item"
              src="https://www.youtube.com/embed/yFW-ptAUVM8"
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
          <h3 className="modal-title">Sentencias Condicionales</h3>
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
            Los condicionales permiten controlar el flujo de ejecución de un
            programa en función de las condiciones que se cumplan. Son
            fundamentales para tomar decisiones y realizar diferentes acciones
            según las circunstancias en Python.
          </p>
          <h3>if (si)</h3>
          <p>
            La declaración <code>if</code> se utiliza para ejecutar un bloque de
            código si se cumple una condición específica.
          </p>
          <pre className="p-3 mb-2 bg-dark text-white">
            {"          "}if condicion:{"\n"}
            {"          "}# Bloque de código si la condición es verdadera{"\n"}
            {"        "}
          </pre>
          <h3>else (si no)</h3>
          <p>
            La declaración <code>else</code> se utiliza en conjunto con{" "}
            <code>if</code> para ejecutar un bloque de código alternativo cuando
            la condición del <code>if</code> es falsa.
          </p>
          <pre className="p-3 mb-2 bg-dark text-white">
            {"          "}if condicion:{"\n"}
            {"            "}# Bloque de código si la condición es verdadera
            {"\n"}
            {"          "}else:{"\n"}
            {"            "}# Bloque de código si la condición es falsa{"\n"}
            {"        "}
          </pre>
          <h3>elif (sino si)</h3>
          <p>
            La declaración <code>elif</code> se utiliza para evaluar múltiples
            condiciones en secuencia.
          </p>
          <pre className="p-3 mb-2 bg-dark text-white">
            {"          "}if condicion1:{"\n"}
            {"            "}# Bloque de código si la condicion1 es verdadera
            {"\n"}
            {"          "}elif condicion2:{"\n"}
            {"            "}# Bloque de código si la condicion1 es falsa y la
            condicion2 es verdadera{"\n"}
            {"          "}elif condicion3:{"\n"}
            {"            "}# Bloque de código si la condicion1 y condicion2 son
            falsas y la condicion3 es {"\n"}
            {"            "}# verdadera{"\n"}
            {"          "}else:{"\n"}
            {"            "}# Bloque de código si todas las condiciones
            anteriores son falsas{"\n"}
            {"        "}
          </pre>
          <hr />
          <h4>Checa este Video</h4>
          <div className="embed-responsive embed-responsive-16by9">
            <iframe
              id="videoIframe4"
              className="embed-responsive-item"
              src="https://www.youtube.com/embed/rY_HuBtUSVk"
              allowFullScreen=""
            />
          </div>
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
    aria-labelledby="myModalLabel5"
    aria-hidden="true"
  >
    <div className="modal-dialog modal-dialog-centered modal-lg">
      <div className="modal-content">
        <div className="modal-header">
          <h3 className="modal-title">Bucles "while" y "for"</h3>
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
            Los bucles son otra herramienta para alterar el flujo normal de un
            programa. Nos permiten repetir una porción de código tantas veces
            como queramos. Python incluye únicamente dos tipos de bucle:{" "}
          </p>
          <h5>Bucle While</h5>
          <p>
            El bucle <code>while</code> se utiliza para repetir un bloque de
            código mientras se cumpla una condición específica.
          </p>
          <pre className="p-3 mb-2 bg-dark text-white">
            {"          "}contador = 0{"\n"}
            {"          "}while contador &lt; 5:{"\n"}
            {"            "}print(contador){"\n"}
            {"            "}contador += 1{"\n"}
            {"        "}
          </pre>
          <p>
            En este ejemplo, el bucle <code>while</code> se ejecutará mientras{" "}
            <code>contador</code> sea menor que 5. En cada iteración del bucle,
            se imprime el valor actual de <code>contador</code> y luego se
            incrementa en 1. El bucle se repetirá cinco veces, imprimiendo los
            valores del 0 al 4.
          </p>
          <h5>Bucle For</h5>
          <p>
            El bucle <code>for</code> se utiliza para iterar sobre una secuencia
            y ejecutar un bloque de código para cada elemento de la secuencia.
          </p>
          <pre className="p-3 mb-2 bg-dark text-white">
            {"          "}frutas = ["manzana", "banana", "cereza"]{"\n"}
            {"          "}for fruta in frutas:{"\n"}
            {"            "}print(fruta){"\n"}
            {"        "}
          </pre>
          <p>
            En este ejemplo, el bucle <code>for</code> itera sobre la lista de
            frutas. En cada iteración, el valor actual de <code>fruta</code>{" "}
            toma el valor de cada elemento de la lista y se imprime. El bucle se
            repetirá tres veces, imprimiendo las frutas "manzana", "banana" y
            "cereza".
          </p>
          <h5>Bucle For con range()</h5>
          <p>
            El bucle <code>for</code> también se puede combinar con la función{" "}
            <code>range()</code> para generar una secuencia numérica.
          </p>
          <pre className="p-3 mb-2 bg-dark text-white">
            {"          "}for i in range(1, 6):{"\n"}
            {"            "}print(i){"\n"}
            {"        "}
          </pre>
          <p>
            En este ejemplo, el bucle <code>for</code> se ejecutará para cada
            valor en el rango del 1 al 5 (excluyendo el límite superior). En
            cada iteración, el valor actual de <code>i</code> toma el valor del
            número actual en el rango y se imprime. El bucle se repetirá cinco
            veces, imprimiendo los números del 1 al 5.
          </p>
          <hr />
          <h4>Video explicando "For"</h4>
          <div className="embed-responsive embed-responsive-16by9">
            <iframe
              id="videoIframe5"
              className="embed-responsive-item"
              src="https://www.youtube.com/embed/ywIVQBaPRYk"
              allowFullScreen=""
            />
          </div>
          <a
            href="https://www.mclibre.org/consultar/python/lecciones/python-for.html"
            target="_blank"
          >
            saber más..
          </a>
          <hr />
          <h4>Video explicando "While"</h4>
          <div className="embed-responsive embed-responsive-16by9">
            <iframe
              id="videoIframe5_1"
              className="embed-responsive-item"
              src="https://www.youtube.com/embed/cuFSVjo9oi0"
              allowFullScreen=""
            />
          </div>
          <a
            href="https://www.mclibre.org/consultar/python/lecciones/python-while.html"
            target="_blank"
          >
            saber más..
          </a>
        </div>
      </div>
    </div>
  </div>
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
          <h3 className="modal-title">Colecciones</h3>
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
          <h5>Listas:</h5>
          <p>
            {" "}
            Una lista es una colección ordenada y mutable de elementos. Puedes
            almacenar elementos de diferentes tipos en una lista y acceder a
            ellos mediante índices. Las listas se definen utilizando corchetes{" "}
            <strong>([])</strong> y los elementos se separan por comas.
          </p>
          <pre className="p-3 mb-2 bg-dark text-white">
            {"            "}mi_lista = [1, 2, 3, "hola", True]{"\n"}
            {"            "}print(mi_lista){"         "}# Output: [1, 2, 3,
            'hola', True]{"\n"}
            {"    "}
            {"\n"}
            {"            "}# Acceder a elementos mediante índices{"\n"}
            {"            "}print(mi_lista[0]){"      "}# Output: 1{"\n"}
            {"            "}print(mi_lista[3]){"      "}# Output: 'hola'{"\n"}
            {"    "}
            {"\n"}
            {"            "}# Modificar elementos{"\n"}
            {"            "}mi_lista[1] = "mundo"{"\n"}
            {"            "}print(mi_lista){"         "}# Output: [1, 'mundo',
            3, 'hola', True]{"\n"}
            {"    "}
            {"\n"}
            {"            "}# Agregar elementos al final{"\n"}
            {"            "}mi_lista.append(4){"\n"}
            {"            "}print(mi_lista){"         "}# Output: [1, 'mundo',
            3, 'hola', True, 4]{"\n"}
            {"    "}
            {"\n"}
            {"            "}# Eliminar elementos{"\n"}
            {"            "}mi_lista.remove("hola"){"\n"}
            {"            "}print(mi_lista){"         "}# Output: [1, 'mundo',
            3, True, 4]{"\n"}
            {"        "}
          </pre>
          <hr />
          <h5>Tuplas:</h5>
          <p>
            Una tupla es similar a una lista, pero es inmutable, lo que
            significa que no se pueden modificar después de su creación. Las
            tuplas se definen utilizando paréntesis <strong>()</strong> y los
            elementos se separan por comas. Puedes acceder a los elementos de
            una tupla mediante índices.
          </p>
          <pre className="p-3 mb-2 bg-dark text-white">
            {"            "}mi_tupla = (1, 2, 3, "hola", True){"\n"}
            {"            "}print(mi_tupla){"         "}# Output: (1, 2, 3,
            'hola', True){"\n"}
            {"    "}
            {"\n"}
            {"            "}# Acceder a elementos mediante índices{"\n"}
            {"            "}print(mi_tupla[0]){"      "}# Output: 1{"\n"}
            {"            "}print(mi_tupla[3]){"      "}# Output: 'hola'{"\n"}
            {"    "}
            {"\n"}
            {"            "}# Intentar modificar una tupla generará un error
            {"\n"}
            {"            "}# mi_tupla[1] = "mundo"{"  "}# Genera un error{"\n"}
            {"    "}
            {"\n"}
            {"            "}# Obtener longitud de la tupla{"\n"}
            {"            "}print(len(mi_tupla)){"    "}# Output: 5{"\n"}
            {"        "}
          </pre>
          <hr />
          <h5>Conjuntos (sets)</h5>
          <p>
            Un conjunto es una colección desordenada de elementos únicos. Los
            conjuntos no permiten duplicados y no tienen un orden específico.
            Los conjuntos son útiles para realizar operaciones matemáticas como
            intersección, unión, diferencia, etc. Los conjuntos se definen
            utilizando llaves{" "}
            <strong>
              {"{"}
              {"}"}
            </strong>{" "}
            o la función <strong>set()</strong>.
          </p>
          <pre className="p-3 mb-2 bg-dark text-white">
            {"            "}mi_conjunto = {"{"}1, 2, 3, 4, 5{"}"}
            {"\n"}
            {"            "}print(mi_conjunto){"      "}# Output: {"{"}1, 2, 3,
            4, 5{"}"}
            {"\n"}
            {"    "}
            {"\n"}
            {"            "}# Agregar elementos{"\n"}
            {"            "}mi_conjunto.add(6){"\n"}
            {"            "}print(mi_conjunto){"      "}# Output: {"{"}1, 2, 3,
            4, 5, 6{"}"}
            {"\n"}
            {"    "}
            {"\n"}
            {"            "}# Eliminar elementos{"\n"}
            {"            "}mi_conjunto.remove(3){"\n"}
            {"            "}print(mi_conjunto){"      "}# Output: {"{"}1, 2, 4,
            5, 6{"}"}
            {"\n"}
            {"    "}
            {"\n"}
            {"            "}# Realizar operaciones de conjuntos{"\n"}
            {"            "}conjunto1 = {"{"}1, 2, 3{"}"}
            {"\n"}
            {"            "}conjunto2 = {"{"}3, 4, 5{"}"}
            {"\n"}
            {"            "}print(conjunto1.union(conjunto2)){"        "}#
            Output: {"{"}1, 2, 3, 4, 5{"}"}
            {"\n"}
            {"            "}print(conjunto1.intersection(conjunto2)) # Output:{" "}
            {"{"}3{"}"}
            {"\n"}
            {"        "}
          </pre>
          <hr />
          <h5>Diccionarios</h5>
          <p>
            Un diccionario es una colección de pares clave-valor. Cada elemento
            en un diccionario está asociado con una clave única que se utiliza
            para acceder al valor correspondiente. Los diccionarios son útiles
            cuando necesitas almacenar y recuperar información basada en una
            clave específica. Los diccionarios se definen utilizando llaves{" "}
            <strong>
              {"{"}
              {"}"}
            </strong>{" "}
            y los pares clave-valor se separan por comas.
          </p>
          <pre className="p-3 mb-2 bg-dark text-white">
            {"            "}mi_diccionario = {"{"}"nombre": "Juan", "edad": 25,
            "ciudad": "Madrid"{"}"}
            {"\n"}
            {"            "}print(mi_diccionario){"    "}# Output: {"{"}
            'nombre': 'Juan', 'edad': 25, 'ciudad': 'Madrid'{"}"}
            {"\n"}
            {"    "}
            {"\n"}
            {"            "}# Acceder a valores mediante claves{"\n"}
            {"            "}print(mi_diccionario["nombre"]){"  "}# Output:
            'Juan'{"\n"}
            {"            "}print(mi_diccionario["edad"]){"    "}# Output: 25
            {"\n"}
            {"    "}
            {"\n"}
            {"            "}# Modificar valores{"\n"}
            {"            "}mi_diccionario["edad"] = 26{"\n"}
            {"            "}print(mi_diccionario){"    "}# Output: {"{"}
            'nombre': 'Juan', 'edad': 26, 'ciudad': 'Madrid'{"}"}
            {"\n"}
            {"    "}
            {"\n"}
            {"            "}# Agregar nuevos pares clave-valor{"\n"}
            {"            "}mi_diccionario["profesion"] = "Ingeniero"{"\n"}
            {"            "}print(mi_diccionario){"    "}# Output: {"{"}
            'nombre': 'Juan', 'edad': 26, 'ciudad': 'Madrid', 'profesion':
            'Ingeniero'{"}"}
            {"\n"}
            {"    "}
            {"\n"}
            {"            "}# Eliminar pares clave-valor{"\n"}
            {"            "}delete mi_diccionario["ciudad"]{"\n"}
            {"            "}print(mi_diccionario){"    "}# Output: {"{"}
            'nombre': 'Juan', 'edad': 26, 'profesion': 'Ingeniero'{"}"}
            {"\n"}
            {"        "}
          </pre>
          <hr />
          <h4>Resumen:</h4>
          <div className="embed-responsive embed-responsive-16by9">
            <iframe
              id="videoIframe6"
              className="embed-responsive-item"
              src="https://www.youtube.com/embed/v25-m1LOUiU"
              allowFullScreen=""
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</>

    </div>
        
    );
  };
  
  export default Python;