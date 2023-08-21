import React from 'react';
import "../Java/css/estilosPy_v2.css";

const cshart = require.context('./imagen', true);
const modal = require.context('./referencias', true);

const Cshart = () => {
    
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
        <img className="logo" src={cshart('./logo.jpg')} alt="Logo" />
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
            <img src={cshart('./Insta.jpg')} alt="Instalación" />
            <p>Aquí se muestran los pasos de instalación de C#.</p>
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
            <br />
            <br />
            <img src={cshart('./hello.jpg')} alt="Primer código" />
            <br />
            <br />
            <br />
            <br />
            <p>Aprenderás a escribir y ejecutar tu primer código en C#.</p>
            <br />
            <br />
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
            <img src={cshart('./tipos.jpg')} alt="Tipos de datos" />
            <p>Aprenderás los tipos de datos básicos en C#.</p>
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
            <img src={cshart('./condiciones.jpg')} alt="Condicionales" />
            <p>Aquí se explican las sentencias condicionales en C#.</p>
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
            <img src={cshart('./bucles.jpg')} alt="Imagen 5" />
            <p>
              Aprenderás sobre ciclos repetitivos y su implementación en C#.
            </p>
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
            <img src={cshart('./colecciones.jpg')} alt="Imagen 6" />
            <p>
              Aprenderás lo más básico sobre el manejo de colecciones en C#.
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
            Para aquellos que no tienen C# instalado de fábrica, vayamos a
            <a href="https://dotnet.microsoft.com/download" target="_blank">
              https://dotnet.microsoft.com/download
            </a>
            para descargar la última versión disponible.
          </p>
          <img
            src={modal('./insta.jpg')}
            alt="Imagen de ejemplo"
            className="img-fluid"
          />
          <p>
            Para Windows, obtendremos un instalador que hará todo el trabajo. En
            lo único que debemos prestar atención es en seleccionar las opciones
            de instalación deseadas.
          </p>
          <hr />
          <div className="embed-responsive embed-responsive-16by9">
            <iframe
              id="videoIframe"
              className="embed-responsive-item"
              src="https://www.youtube.com/embed/Zgjdp9RQx-w"
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
            La instalación de C# incluye un IDE (entorno de desarrollo
            integrado) llamado Visual Studio, que es muy completo y adecuado
            para escribir y compilar código en C#. Si ya tienes tu editor de
            código favorito también puedes usarlo. Para crear nuestro primer
            programa vamos a abrir Visual Studio y seleccionar la opción{" "}
            <strong>Crear un nuevo proyecto</strong>. Luego, elegiremos el tipo
            de proyecto que deseamos crear (por ejemplo, una aplicación de
            consola) y le daremos un nombre al proyecto.
          </p>
          <img
            src={modal('./Hola.PNG')}
            alt="Imagen de ejemplo 2"
            className="img-fluid"
          />
          <p>
            Este es un auténtico código de C#. ¡Solo una línea! En ella llamamos
            a la función <strong>Console.WriteLine()</strong> y le pasamos una
            cadena de caracteres (en este caso "Hola Mundo") como argumento para
            que imprima en la consola. Para poder ejecutar este pequeño programa
            primero debemos guardar el proyecto y luego compilarlo. Una vez
            compilado, podremos ver la salida en la consola.
          </p>
          <h5>Otro ejemplo con C#:</h5>
          <img
            src={modal('./ejecutamosHola.PNG')}
            alt="Imagen de ejemplo 2"
            className="img-fluid"
          />
          <p>
            Se abrirá una ventana nueva y verás (en la consola) el mensaje
            mostrado por el programa:
          </p>
          <hr />
          <h4>Video Resumen</h4>
          <div className="embed-responsive embed-responsive-16by9">
            <iframe
              id="videoIframe2"
              className="embed-responsive-item"
              src="https://www.youtube.com/embed/VZZaTnzrHVU"
              allowFullScreen=""
            />
          </div>
          <p>
            <br />
            <strong>NOTA:</strong> no olvides guardar tu proyecto antes de
            compilarlo y ejecutarlo.
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
          <h3 className="modal-title">Tipos de Datos</h3>
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
            En C#, hay varios tipos de datos que se utilizan para representar
            diferentes tipos de valores. Aquí tienes algunos de los tipos de
            datos más comunes en C#:
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
                <td>string</td>
                <td>"Hola"</td>
                <td>Cadenas de caracteres</td>
              </tr>
              <tr>
                <td>bool</td>
                <td>true</td>
                <td>Valores de verdad (verdadero o falso)</td>
              </tr>
              <tr>
                <td>List</td>
                <td>[1, 2, 3]</td>
                <td>Listas (colección ordenada y mutable)</td>
              </tr>
              <tr>
                <td>Tuple</td>
                <td>(1, 2, 3)</td>
                <td>Tuplas (colección ordenada e inmutable)</td>
              </tr>
              <tr>
                <td>Dictionary</td>
                <td>
                  {"{"}"nombre": "Juan", "edad": 25{"}"}
                </td>
                <td>Diccionarios (colección de pares clave-valor)</td>
              </tr>
              <tr>
                <td>HashSet</td>
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
            Vamos a ver un primer acercamiento a los tipos de datos en C#:{" "}
          </h5>
          <div className="embed-responsive embed-responsive-16by9">
            <iframe
              id="videoIframe3"
              className="embed-responsive-item"
              src='https://www.youtube.com/embed/VZZaTnzrHVU"'
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
            Las sentencias condicionales permiten controlar el flujo de
            ejecución de un programa en función de las condiciones que se
            cumplan. Son fundamentales para tomar decisiones y realizar
            diferentes acciones según las circunstancias en C#.
          </p>
          <h3>if (si)</h3>
          <p>
            La estructura <code>if</code> se utiliza para ejecutar un bloque de
            código si se cumple una condición específica.
          </p>
          <pre className="p-3 mb-2 bg-dark text-white">
            {"                "}if (condicion){"\n"}
            {"                "}
            {"{"}
            {"\n"}
            {"                  "}// Bloque de código si la condición es
            verdadera{"\n"}
            {"                "}
            {"}"}
            {"\n"}
            {"              "}
          </pre>
          <h3>else (si no)</h3>
          <p>
            La estructura <code>else</code> se utiliza en conjunto con{" "}
            <code>if</code> para ejecutar un bloque de código alternativo cuando
            la condición del <code>if</code> es falsa.
          </p>
          <pre className="p-3 mb-2 bg-dark text-white">
            {"            "}if (condicion){"\n"}
            {"            "}
            {"{"}
            {"\n"}
            {"              "}// Bloque de código si la condición es verdadera
            {"\n"}
            {"            "}
            {"}"}
            {"\n"}
            {"            "}else{"\n"}
            {"            "}
            {"{"}
            {"\n"}
            {"              "}// Bloque de código si la condición es falsa{"\n"}
            {"            "}
            {"}"}
            {"\n"}
            {"          "}
          </pre>
          <h3>else if (sino si)</h3>
          <p>
            La estructura <code>else if</code> se utiliza para evaluar múltiples
            condiciones en secuencia.
          </p>
          <pre className="p-3 mb-2 bg-dark text-white">
            {"            "}if (condicion1){"\n"}
            {"            "}
            {"{"}
            {"\n"}
            {"              "}// Bloque de código si la condicion1 es verdadera
            {"\n"}
            {"            "}
            {"}"}
            {"\n"}
            {"            "}else if (condicion2){"\n"}
            {"            "}
            {"{"}
            {"\n"}
            {"              "}// Bloque de código si la condicion1 es falsa y la
            condicion2 es verdadera{"\n"}
            {"            "}
            {"}"}
            {"\n"}
            {"            "}else if (condicion3){"\n"}
            {"            "}
            {"{"}
            {"\n"}
            {"              "}// Bloque de código si la condicion1 y condicion2
            son falsas y la condicion3 es verdadera{"\n"}
            {"            "}
            {"}"}
            {"\n"}
            {"            "}else{"\n"}
            {"            "}
            {"{"}
            {"\n"}
            {"              "}// Bloque de código si todas las condiciones
            anteriores son falsas{"\n"}
            {"            "}
            {"}"}
            {"\n"}
            {"          "}
          </pre>
          <hr />
          <h4>Revisa este Video</h4>
          <div className="embed-responsive embed-responsive-16by9">
            <iframe
              id="videoIframe4"
              className="embed-responsive-item"
              src="https://www.youtube.com/embed/7gP_mDMfJwo"
              allowFullScreen=""
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Ventana modal 5 */}
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
            como queramos. C# incluye dos tipos de bucles principales:{" "}
          </p>
          <h5>Bucle While</h5>
          <p>
            El bucle <code>while</code> se utiliza para repetir un bloque de
            código mientras se cumpla una condición específica.
          </p>
          <pre className="p-3 mb-2 bg-dark text-white">
            {"          "}int contador = 0;{"\n"}
            {"          "}while (contador &lt; 5){"\n"}
            {"          "}
            {"{"}
            {"\n"}
            {"            "}Console.WriteLine(contador);{"\n"}
            {"            "}contador++;{"\n"}
            {"          "}
            {"}"}
            {"\n"}
            {"        "}
          </pre>
          <p>
            En este ejemplo, el bucle <code>while</code> se ejecutará mientras{" "}
            <code>contador</code> sea menor que 5. En cada iteración del bucle,
            se imprimirá el valor actual de <code>contador</code>y luego se
            incrementará en 1. El bucle se repetirá cinco veces, imprimiendo los
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
          <h5>Bucle For</h5>
          <p>
            El bucle <code>for</code> se utiliza para iterar sobre una secuencia
            y ejecutar un bloque de código para cada elemento de la secuencia.
          </p>
          <pre className="p-3 mb-2 bg-dark text-white">
            {"            "}int[] numeros = {"{"} 1, 2, 3, 4, 5 {"}"};{"\n"}
            {"            "}for (int i = 0; i &lt; numeros.Length; i++){"\n"}
            {"            "}
            {"{"}
            {"\n"}
            {"              "}Console.WriteLine(numeros[i]);{"\n"}
            {"            "}
            {"}"}
            {"\n"}
            {"          "}
          </pre>
          <p>
            En este ejemplo, el bucle <code>for</code> itera sobre un arreglo de
            números. En cada iteración, el valor actual de <code>i</code> toma
            el valor del índice actual en el arreglo y se imprime. El bucle se
            repetirá cinco veces, imprimiendo los números del 1 al 5.
          </p>
          <h5>Bucle Foreach</h5>
          <p>
            El bucle <code>foreach</code> se utiliza para iterar sobre una
            colección y ejecutar un bloque de código para cada elemento de la
            colección.
          </p>
          <pre className="p-3 mb-2 bg-dark text-white">
            {"            "}List&lt;string&gt; frutas = new List&lt;string&gt;(){" "}
            {"{"} "manzana", "banana", "cereza" {"}"};{"\n"}
            {"            "}foreach (string fruta in frutas){"\n"}
            {"            "}
            {"{"}
            {"\n"}
            {"              "}Console.WriteLine(fruta);{"\n"}
            {"            "}
            {"}"}
            {"\n"}
            {"          "}
          </pre>
          <p>
            En este ejemplo, el bucle <code>foreach</code> itera sobre una lista
            de frutas. En cada iteración, el valor actual de <code>fruta</code>{" "}
            toma el valor de cada elemento de la lista y se imprime. El bucle se
            repetirá tres veces, imprimiendo las frutas "manzana", "banana" y
            "cereza".
          </p>
          <hr />
          <h4>Video explicando "For" y "Foreach"</h4>
          <div className="embed-responsive embed-responsive-16by9">
            <iframe
              id="videoIframe5"
              className="embed-responsive-item"
              src="https://www.youtube.com/embed/6gdFd9QXfTY"
              allowFullScreen=""
            />
          </div>
          <a
            href="https://www.tutorialesprogramacionya.com/csharpya/detalleconcepto.php?punto=18&codigo=18&inicio=0"
            target="_blank"
          >
            Saber más sobre bucles en C#
          </a>
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
            Una lista en C# es una colección ordenada y mutable de elementos del
            mismo tipo o de tipos diferentes. Puedes almacenar elementos de
            diferentes tipos en una lista y acceder a ellos mediante índices.
            Las listas se definen utilizando el tipo de dato seguido de
            corchetes <strong>[]</strong> y los elementos se separan por comas.
          </p>
          <pre className="p-3 mb-2 bg-dark text-white">
            {"            "}List&lt;int&gt; miLista = new List&lt;int&gt;(){" "}
            {"{"} 1, 2, 3, 4, 5 {"}"};{"\n"}
            {"            "}Console.WriteLine(miLista[0]);{"     "}// Output: 1
            {"\n"}
            {"            "}Console.WriteLine(miLista[3]);{"     "}// Output: 4
            {"\n"}
            {"            "}miLista[1] = 10;{"                   "}// Modificar
            elementos{"\n"}
            {"            "}miLista.Add(6);{"                    "}// Agregar
            elementos al final{"\n"}
            {"            "}miLista.Remove(3);{"                 "}// Eliminar
            elementos{"\n"}
            {"        "}
          </pre>
          <hr />
          <h5>Tuplas:</h5>
          <p>
            Una tupla en C# es similar a una lista, pero es inmutable, lo que
            significa que no se pueden modificar después de su creación. Las
            tuplas se definen utilizando paréntesis <strong>()</strong> y los
            elementos se separan por comas. Puedes acceder a los elementos de
            una tupla mediante índices.
          </p>
          <pre className="p-3 mb-2 bg-dark text-white">
            {"            "}(int, string, bool) miTupla = (1, "hola", true);
            {"\n"}
            {"            "}Console.WriteLine(miTupla.Item1);{"   "}// Output: 1
            {"\n"}
            {"            "}Console.WriteLine(miTupla.Item2);{"   "}// Output:
            "hola"{"\n"}
            {"    "}
            {"\n"}
            {"            "}// Intentar modificar una tupla generará un error
            {"\n"}
            {"            "}// miTupla.Item1 = 10;{"               "}// Genera
            un error{"\n"}
            {"        "}
          </pre>
          <hr />
          <h5>Conjuntos (HashSet)</h5>
          <p>
            Un conjunto (HashSet) en C# es una colección desordenada de
            elementos únicos. Los conjuntos no permiten duplicados y no tienen
            un orden específico. Los conjuntos son útiles para realizar
            operaciones matemáticas como intersección, unión, diferencia, etc.
            Los conjuntos se definen utilizando el tipo de dato seguido de
            corchetes{" "}
            <strong>
              {"{"}
              {"}"}
            </strong>{" "}
            o la clase <strong>HashSet&lt;T&gt;</strong>.
          </p>
          <pre className="p-3 mb-2 bg-dark text-white">
            {"            "}HashSet&lt;int&gt; miConjunto = new
            HashSet&lt;int&gt;() {"{"} 1, 2, 3, 4, 5 {"}"};{"\n"}
            {"            "}miConjunto.Add(6);{"                  "}// Agregar
            elementos{"\n"}
            {"            "}miConjunto.Remove(3);{"               "}// Eliminar
            elementos{"\n"}
            {"            "}foreach (int elemento in miConjunto){"\n"}
            {"            "}
            {"{"}
            {"\n"}
            {"              "}Console.WriteLine(elemento);{"\n"}
            {"            "}
            {"}"}
            {"\n"}
            {"        "}
          </pre>
          <hr />
          <h5>Diccionarios (Dictionary)</h5>
          <p>
            Un diccionario (Dictionary) en C# es una colección de pares
            clave-valor. Cada elemento en un diccionario está asociado con una
            clave única que se utiliza para acceder al valor correspondiente.
            Los diccionarios son útiles cuando necesitas almacenar y recuperar
            información basada en una clave específica. Los diccionarios se
            definen utilizando la clase{" "}
            <strong>Dictionary&lt;TKey, TValue&gt;</strong> y los pares
            clave-valor se agregan con el método <strong>Add()</strong>.
          </p>
          <pre className="p-3 mb-2 bg-dark text-white">
            {"            "}Dictionary&lt;string, int&gt; miDiccionario = new
            Dictionary&lt;string, int&gt;();{"\n"}
            {"            "}miDiccionario.Add("uno", 1);{"\n"}
            {"            "}miDiccionario.Add("dos", 2);{"\n"}
            {"            "}miDiccionario.Add("tres", 3);{"\n"}
            {"    "}
            {"\n"}
            {"            "}Console.WriteLine(miDiccionario["uno"]);{"      "}//
            Output: 1{"\n"}
            {"    "}
            {"\n"}
            {"            "}// Modificar valores{"\n"}
            {"            "}miDiccionario["dos"] = 20;{"\n"}
            {"    "}
            {"\n"}
            {"            "}// Agregar nuevos pares clave-valor{"\n"}
            {"            "}miDiccionario.Add("cuatro", 4);{"\n"}
            {"    "}
            {"\n"}
            {"            "}// Eliminar pares clave-valor{"\n"}
            {"            "}miDiccionario.Remove("tres");{"\n"}
            {"        "}
          </pre>
          <hr />
          <h4>Resumen: </h4>
          <p>
            Encuentra mas información con youtube y la pagina oficial de
            microsoft!
          </p>
          <div className="embed-responsive embed-responsive-16by9">
            <iframe
              id="videoIframe6"
              className="embed-responsive-item"
              src="https://www.youtube.com/embed/_f255TeqteQ"
              allowFullScreen=""
            />
          </div>
          <a
            href="https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/concepts/collections"
            target="_blank"
          >
            Más información sobre colecciones en C#
          </a>
        </div>
      </div>
    </div>
  </div>
</>

 
    </div>
        
    );
  };
  
  export default Cshart;