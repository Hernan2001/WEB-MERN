import React from 'react';
import "../Java/css/estilosPy_v2.css";

const cmas = require.context('./imagen', true);
const modal = require.context('./referencias', true);


const Cmas = () => {
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
        <img className='logo'src={cmas('./C++.png')} alt="Logo" />
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
            <h2>Descargar e Instalar</h2>
            <br />
            <br />
            <img src={cmas('./Cmas.jpg')} alt="Instalación" />
            <br />
            <br />
            <p>
              En esta carta aprenderas desde cero la instalacion correcta de los
              editores de texto.
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
            <h2>Primer Programa / Hola Mundo</h2>
            <img src={cmas('./HolaMundo.jpg')} alt="Primer código" />
            <p>
              Esta tarjeta tiene el primer codigo que ejecutaras y la
              explicacion definida de cada paso.
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
            <h2>Operadores Aritmeticos</h2>
            <img src={cmas('./T_D.PNG')} alt="Tipos de datos" />
            <p>
              Esta es una tarjeta que aprenderas a utilizar los operadores
              mateaticos en C++.
            </p>
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
            <h2>Operadores de Comparacion</h2>
            <img src={cmas('./Sentencias.PNG')} alt="Condicionales" />
            <p>
              En esta carta comparan dos expresiones y devuelven un valor
              Boolean que representa la relación de sus valores
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
        <div className="col-md-4">
          <div className="guide-container">
            <h2>Condicionales</h2>
            <img src={cmas('./condicionales.png')} alt="Imagen 5" />
            <p>
              Esta tarjeta evalúa una condición determinada y tomar diferentes
              decisiones dependiendo si el resultado es verdadero o falsoEsta
              tarjeta evalúa una condición determinada y tomar diferentes
              decisiones dependiendo si el resultado es verdadero o falso
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
            <h2>Ciclos o Bucles</h2>
            <img src={cmas('./ciclos.png')} alt="Imagen 6" />
            <p>
              Esta es una tarjeta que se utilizan en los programas de código
              para establecer sentencias o trozos de código que se repiten o se
              iteran
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
  <button className="floating-button" onClick="toggleDarkMode()">

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
          <h3 className="modal-title">
            Bienvenido a nuestra página web sobre lenguajes de programación!{" "}
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
        <div className="modal-body">
          <br />
          <p>
            Hoy te mostraremos cómo instalar C++ en tu sistema para que puedas
            comenzar a desarrollar tus propios programas y proyectos. C++ es un
            lenguaje de programación versátil y poderoso utilizado en una amplia
            gama de aplicaciones, desde software de sistemas hasta juegos y
            aplicaciones de escritorio. Sigue estos sencillos pasos para tener
            C++ en tu computadora:
          </p>
          <img
            src={modal('./download.PNG')}
            alt="Imagen de ejemplo"
            className="img-fluid"
          />
          <br />
          <p>
            Para comenzar, necesitarás un compilador de C++ que traduzca tu
            código fuente en código máquina que la computadora pueda entender y
            ejecutar.
          </p>
          <hr />
          <div className="embed-responsive embed-responsive-16by9">
            <iframe
              id="videoIframe"
              className="embed-responsive-item"
              src="https://www.youtube.com/embed/TBkA7zgJSdU"
              allowFullScreen=""
            />
          </div>
          <br />
          <p>
            ¡Felicidades! Ahora tienes C++ instalado en tu computadora y estás
            listo para comenzar a programar en este emocionante lenguaje. Puedes
            usar cualquier editor de texto o un entorno de desarrollo integrado
            (IDE) específico para C++ para escribir y compilar tus programas.
            ¡Explora las posibilidades infinitas que ofrece este lenguaje y
            disfruta aprendiendo y creando proyectos emocionantes!
          </p>
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
          <h3 className="modal-title">
            ¡Bienvenido a nuestro tutorial para aprender a programar en C++ con
            el clásico "Hola, Mundo!"!
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
        <div className="modal-body">
          <p>
            En esta sección, te guiaremos paso a paso para que puedas escribir y
            ejecutar tu primer programa en C++. Este pequeño pero significativo
            programa te dará una introducción sólida al lenguaje de programación
            C++, que es ampliamente utilizado en el desarrollo de software,
            juegos y aplicaciones de alto rendimiento.
          </p>
          <img
            src={modal('./holamundo.png')}
            alt="Imagen de ejemplo 2"
            className="img-fluid"
          />
          <p>
            Antes de comenzar, necesitas configurar un entorno de desarrollo
            adecuado para escribir y compilar tu código. Para esto, te
            recomendamos utilizar el popular IDE Code::Blocks, que es fácil de
            usar y está disponible para múltiples sistemas operativos.
          </p>
          <h5> Preparando el entorno de desarrollo</h5>
          <img
            src={modal('./ejecutamosHola.PNG')}
            alt="Imagen de ejemplo 2"
            className="img-fluid"
          />
          <hr />
          <h4>Video Resumen</h4>
          <div className="embed-responsive embed-responsive-16by9">
            <iframe
              id="videoIframe2"
              className="embed-responsive-item"
              src="https://www.youtube.com/embed/ofemmXa_M5o"
              allowFullScreen=""
            />
          </div>
          <p>
            <br />
            ¡Felicidades! Has creado con éxito tu primer programa en C++ y has
            dado los primeros pasos en el emocionante mundo de la programación.
            A partir de aquí, puedes seguir aprendiendo y explorando más sobre
            C++ para desarrollar proyectos más complejos y desafiantes.{" "}
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
          <h3 className="modal-title">Operadores aritméticos</h3>
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
            Cada operación realizada con los operandos genera un resultado que
            se almacenará en alguna posición de memoria. El tipo del valor
            generado y, por tanto, su representación interna, dependerá de los
            tipos de los operandos.
          </p>
          <table>
            <tbody>
              <tr className="table-info">
                <th>Operador</th>
                <th>Descripcion</th>
              </tr>
              <tr>
                <td>+</td>
                <td>suma</td>
              </tr>
              <tr>
                <td>-</td>
                <td>resta</td>
              </tr>
              <tr>
                <td>*</td>
                <td>"producto"</td>
              </tr>
              <tr>
                <td>/</td>
                <td>division</td>
              </tr>
              <tr>
                <td>%</td>
                <td>resto de la division entera</td>
              </tr>
            </tbody>
          </table>
          <h3>Suma y Resta</h3>
          <p>
            Los operadores aditivos son: Adición (+) Resta (-) Estos operadores
            binarios tienen asociatividad de izquierda a derecha. Los operadores
            aditivos toman operandos de tipos aritméticos o de puntero. El
            resultado del operador de suma (+) es la suma de los operandos. El
            resultado del operador de resta (-) es la diferencia entre los
            operandos. Si uno o ambos operandos son punteros, deben ser punteros
            a objetos, no a funciones. Si ambos operandos son punteros, los
            resultados no son significativos a menos que ambos sean punteros a
            objetos de la misma matriz.
          </p>
          <br />
          <p>
            Tenga en cuenta que la suma y resta no son operaciones equivalentes.
            Si ambos operandos son de tipo aritmético, las conversiones
            descritas en Conversiones estándar se aplicana los operandos y el
            resultado es de tipo convertido.
          </p>
          <hr />
          <h5>Ejemplo</h5>
          <div className="embed-responsive embed-responsive-16by9">
            <iframe
              id="videoIframe3"
              className="embed-responsive-item"
              src="https://www.youtube.com/embed/bjqF9qvNhsE"
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
          <h3 className="modal-title">Operadores Aritmeticos</h3>
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
            Los operadores de comparación se utilizan mayoritariamente en
            estructuras de control para decidir qué hacer si una condición es
            verdadera o que hacer en caso que sea falsa.
          </p>
          <h3>Menor que:</h3>
          <p>
            El operador "menor que" en C++ se utiliza para comparar dos valores
            y determinar si el primero es menor que el segundo. Se representa
            con el símbolo "&lt;" y es uno de los operadores de comparación
            disponibles en el lenguaje. Cuando se aplica el operador "menor que"
            a dos valores, se evalúa la relación entre ellos. Si el valor de la
            izquierda es menor que el valor de la derecha, la expresión se
            considera verdadera y devuelve el valor booleano "true". En caso
            contrario, la expresión se considera falsa y devuelve el valor
            booleano "false". El operador "menor que" se puede utilizar con
            diferentes tipos de datos en C++, como enteros, decimales,
            caracteres y cadenas. Al igual que con el operador "mayor que", la
            comparación de enteros y decimales se realiza directamente en
            función de sus valores numéricos, mientras que la comparación de
            caracteres y cadenas se basa en el orden lexicográfico utilizando
            los valores ASCII de los caracteres.
          </p>
          <img
            src={modal('./menor.png')}
            alt="Imagen de ejemplo 2"
            className="img-fluid"
          />
          <h3>Menor o igual que:</h3>
          <p>
            El operador "menor o igual que" en C++ se utiliza para comparar dos
            valores y determinar si el primero es menor o igual que el segundo.
            Se representa con el símbolo "&lt;=" y es uno de los operadores de
            comparación disponibles en el lenguaje. Cuando se aplica el operador
            "menor o igual que" a dos valores, se evalúa la relación entre
            ellos. Si el valor de la izquierda es menor o igual que el valor de
            la derecha, la expresión se considera verdadera y devuelve el valor
            booleano "true". En caso contrario, la expresión se considera falsa
            y devuelve el valor booleano "false". El operador "menor o igual
            que" se puede utilizar con diferentes tipos de datos en C++, como
            enteros, decimales, caracteres y cadenas. Al igual que con los
            operadores "mayor que" y "menor que", la comparación de enteros y
            decimales se realiza directamente en función de sus valores
            numéricos, mientras que la comparación de caracteres y cadenas se
            basa en el orden lexicográfico utilizando los valores ASCII de los
            caracteres.
          </p>
          <img
            src={modal('./menorigual.png')}
            alt="Imagen de ejemplo 2"
            className="img-fluid"
          />
          <h3>Mayor Que</h3>
          <p>
            El operador "mayor que" en C++ se utiliza para comparar dos valores
            y determinar si el primero es mayor que el segundo. Se representa
            con el símbolo "&gt;" y es uno de los operadores de comparación
            disponibles en el lenguaje. Cuando se aplica el operador "mayor que"
            a dos valores, se evalúa la relación entre ellos. Si el valor de la
            izquierda es mayor que el valor de la derecha, la expresión se
            considera verdadera y devuelve el valor booleano "true". En caso
            contrario, la expresión se considera falsa y devuelve el valor
            booleano "false".
          </p>
          <img
            src={modal('./mayorque.png')}
            alt="Imagen de ejemplo 2"
            className="img-fluid"
          />
          <h3>Diferente Que</h3>
          <p>
            El operador "diferente de" en C++ se utiliza para comparar dos
            valores y determinar si son diferentes entre sí. Se representa con
            el símbolo "!=" y es uno de los operadores de comparación
            disponibles en el lenguaje. Cuando se aplica el operador "diferente
            de" a dos valores, se evalúa si son distintos. Si los valores son
            diferentes, la expresión se considera verdadera y devuelve el valor
            booleano "true". En caso contrario, la expresión se considera falsa
            y devuelve el valor booleano "false". El operador "diferente de" se
            puede utilizar con diferentes tipos de datos en C++, como enteros,
            decimales, caracteres y cadenas. En la comparación de enteros y
            decimales, se evalúa si los valores son diferentes numéricamente. En
            el caso de los caracteres y cadenas, se compara si son diferentes
            basándose en los valores ASCII de los caracteres.
          </p>
          <img
            src={modal('./diferentede.png')}
            alt="Imagen de ejemplo 2"
            className="img-fluid"
          />
          <h3>Igual Que</h3>
          <p>
            El operador "igual que" en C++ se utiliza para comparar dos valores
            y determinar si son iguales entre sí. Se representa con el símbolo
            "==" y es uno de los operadores de comparación disponibles en el
            lenguaje. Cuando se aplica el operador "igual que" a dos valores, se
            evalúa si son idénticos. Si los valores son iguales, la expresión se
            considera verdadera y devuelve el valor booleano "true". En caso
            contrario, la expresión se considera falsa y devuelve el valor
            booleano "false". El operador "igual que" se puede utilizar con
            diferentes tipos de datos en C++, como enteros, decimales,
            caracteres y cadenas. En la comparación de enteros y decimales, se
            evalúa si los valores son iguales numéricamente. En el caso de los
            caracteres y cadenas, se compara si son iguales basándose en los
            valores ASCII de los caracteres.
          </p>
          <img
            src={modal('./mayorque.png')}
            alt="Imagen de ejemplo 2"
            className="img-fluid"
          />
          <hr />
          <h4>Checa este Video</h4>
          <div className="embed-responsive embed-responsive-16by9">
            <iframe
              id="videoIframe4"
              className="embed-responsive-item"
              src="https://www.youtube.com/embed/TBkA7zgJSdU"
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
          <h3 className="modal-title">
            Condicionales en C++: Tomando decisiones en tus programas
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
        <div className="modal-body">
          <p>
            Las estructuras de control condicionales son fundamentales en
            cualquier lenguaje de programación, y en C++ no es la excepción.
            Estas permiten que tus programas tomen decisiones y ejecuten
            diferentes acciones según ciertas condiciones se cumplan o no. Las
            condicionales en C++ se implementan principalmente a través de los
            siguientes puntos clave:
          </p>
          <h5>La estructura if-else:</h5>
          <p>
            La estructura if-else es la forma más básica de una condicional en
            C++. Permite ejecutar un bloque de código si una condición es
            verdadera y otro bloque de código si la condición es falsa. La
            sintaxis general es la siguiente
          </p>
          <img
            src={modal('./Condicionales1.png')}
            alt="Imagen de ejemplo 2"
            className="img-fluid"
          />
          <h3> Operadores lógicos:</h3>
          <p>
            Además de los operadores de comparación, también puedes utilizar
            operadores lógicos para combinar o negar condiciones. Los operadores
            lógicos más comunes son: &amp;&amp; : AND lógico (conjunción) || :
            OR lógico (disyunción) ! : NOT lógico (negación)
          </p>
          <hr />
          <h4>Aprende Mas!</h4>
          <div className="embed-responsive embed-responsive-16by9">
            <iframe
              id="videoIframe5"
              className="embed-responsive-item"
              src="https://www.youtube.com/embed/RaWfeVgkWbE"
              title="YouTube video player"
              allowFullScreen=""
            />
          </div>
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
          <h5>Ciclos y bucles en C++: Repite y automatiza tus tareas</h5>
          <p>
            En la programación, los ciclos y bucles son estructuras que permiten
            repetir una serie de instrucciones de manera automática hasta que se
            cumpla cierta condición. Estas herramientas son fundamentales para
            automatizar tareas repetitivas y ahorrar tiempo y esfuerzo en el
            desarrollo de software. A continuación, explicaremos los principales
            tipos de ciclos y bucles en C++ para que puedas utilizarlos
            eficazmente en tus programas:
          </p>
          <h3>El ciclo while:</h3>
          <p>
            El ciclo while es una estructura de control que repite un bloque de
            código mientras una condición sea verdadera. Es decir, el ciclo se
            ejecutará repetidamente hasta que la condición se vuelva falsa. La
            sintaxis general es la siguiente:
          </p>
          <img
            src={modal('./ciclos1.png')}
            alt="Imagen de ejemplo 2"
            className="img-fluid"
          />
          <hr />
          <h4>Resumen:</h4>
          <div className="embed-responsive embed-responsive-16by9">
            <iframe
              id="videoIframe6"
              className="embed-responsive-item"
              src="https://www.youtube.com/embed/0h_srypSheg"
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
  
  export default Cmas;