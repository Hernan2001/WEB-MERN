import React from 'react';
import "./css/estilosPy_v2.css";

const java = require.context('./imagen', true);


const Java = () => {
    return (
    <div>
        <>
        <link
    rel="stylesheet"
    href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
  />
        
  <header id="header">
    <nav className="navbar-la navbar-expand-lg navbar-dark bg-dark navbar">
      <a className="navbar-brand " href="#">
        <img className="logo"src={java('./logo.jpg')} alt="Logo" />
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
            <a className="nav-link " href="/menu/:id" aria-current="page">
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
            <h2>Introducción a JAVA</h2>
            <img src={java('./programa.jpg')} alt="Instalación" />
            <p>
              "Descubre el mundo de la programación con Java: ¡Tu puerta de
              entrada al fascinante universo del desarrollo informático!
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
            <h2>Programación Orientada a Objetos en Java</h2>
            <img src={java('./objetos.jpg')} alt="Primer código" />
            <p>
              Domina la POO con Java: Construye tu futuro con objetos, clases y
              herencia en el fascinante mundo de la programación.
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
            <h2>Excepciones en Java</h2>
            <img src={java('./excep.jpg')} alt="Tipos de datos" />
            <p>
              Maneja las sorpresas del código con maestría: Aprende a controlar
              errores y excepciones en Java para crear programas más robustos y
              confiables.
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
            <h2>Condiciones</h2>
            <img src={java('./condiciones.jpg')} alt="Condicionales" />
            <p>
              Programa con lógica y toma decisiones inteligentes: Descubre cómo
              las condiciones en Java te permiten controlar el flujo de tu
              código y crear soluciones dinámicas para cualquier situación.
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
            <h2>Hilos (Threads) en Java</h2>
            <img src={java('./hilos.jpg')} alt="Imagen 5" />
            <p>
              Aprende a usar Hilos en Java y descubre cómo ejecutar múltiples
              tareas de forma simultánea, mejorando la eficiencia y el
              rendimiento de tu aplicación.
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
            <h2>Streams en Java</h2>
            <img src={java('./stream.jpg')} alt="Imagen 6" />
            <p>
              Domina los Streams en Java y disfruta de una manipulación de datos
              elegante y eficiente, simplificando tus operaciones y optimizando
              tu código
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
  <footer className=" bg-dark text-white py-4 ">
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
          <h3 className="modal-title">Introducción a Java</h3>
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
            Java es un lenguaje de programación orientado a objetos,
            desarrollado por Sun Microsystems (ahora propiedad de Oracle), que
            se destaca por su portabilidad, eficiencia y facilidad de uso. Fue
            lanzado por primera vez en 1995 y desde entonces se ha convertido en
            uno de los lenguajes de programación más populares y ampliamente
            utilizados en el mundo del desarrollo de software.
          </p>
          <p>Algunas características clave de Java son:</p>
          <ul>
            <li>
              Sintaxis similar a C++: Java se diseñó para tener una sintaxis
              similar a C++, lo que facilita que los programadores que conocen
              C++ puedan aprender Java rápidamente.
            </li>
            <li>
              Portabilidad: El código fuente Java se compila en un formato
              intermedio llamado bytecode, que se ejecuta en la máquina virtual
              de Java (JVM). Esto permite que las aplicaciones Java se ejecuten
              en diferentes plataformas sin modificaciones.
            </li>
            <li>
              Seguridad: Java incluye un modelo de seguridad sólido que protege
              a los usuarios contra software malicioso y permite la ejecución
              segura de código no confiable.
            </li>
            <li>
              Recogida de basura (Garbage Collection): Java gestiona
              automáticamente la memoria a través de la recolección de basura,
              lo que facilita el desarrollo y reduce la posibilidad de errores
              relacionados con la gestión de memoria.
            </li>
            <li>
              Biblioteca estándar (API de Java): Java incluye una extensa
              biblioteca estándar que proporciona clases y métodos para realizar
              tareas comunes, como entrada/salida, manipulación de cadenas,
              manipulación de archivos, entre otros.
            </li>
          </ul>
          <hr />
          <h4>¿Qué puedes hacer con Java?</h4>
          <p>
            Java es un lenguaje versátil y se utiliza en una amplia variedad de
            aplicaciones, incluyendo:
          </p>
          <ul>
            <li>Desarrollo de aplicaciones de escritorio.</li>
            <li>
              Desarrollo de aplicaciones web utilizando Java EE (Java Platform,
              Enterprise Edition).
            </li>
            <li>Desarrollo de aplicaciones móviles para Android.</li>
            <li>
              Desarrollo de aplicaciones empresariales y sistemas de gestión.
            </li>
            <li>Desarrollo de aplicaciones de servidor.</li>
            <li>Creación de applets para ser incrustados en páginas web.</li>
          </ul>
          <hr />
          <h4>Recursos para aprender Java:</h4>
          <ul>
            <li>
              <a
                href="https://www.oracle.com/java/technologies/javase-downloads.html"
                target="_blank"
              >
                Descargar Java
              </a>
            </li>
            <li>
              <a
                href="https://docs.oracle.com/javase/tutorial/"
                target="_blank"
              >
                Tutorial oficial de Java
              </a>
            </li>
            <li>
              <a href="https://www.w3schools.com/java/" target="_blank">
                W3Schools Java Tutorial
              </a>
            </li>
            <li>
              <a
                href="https://www.codecademy.com/learn/learn-java"
                target="_blank"
              >
                Codecademy Java Course
              </a>
            </li>
          </ul>
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
            Programación Orientada a Objetos en Java
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
            Java es un lenguaje de programación orientado a objetos (POO), lo
            que significa que está basado en el concepto de "objetos" que
            interactúan entre sí para crear aplicaciones. La programación
            orientada a objetos es un paradigma de programación que se centra en
            el uso de clases y objetos para organizar y estructurar el código.
          </p>
          <p>
            Algunos conceptos clave de la programación orientada a objetos en
            Java son:
          </p>
          <ul>
            <li>
              <b>Clases:</b> Una clase es una plantilla o modelo que define las
              propiedades y comportamientos de un tipo de objeto. Por ejemplo,
              una clase "Coche" podría tener propiedades como "marca", "modelo"
              y métodos como "arrancar" y "detenerse".
            </li>
            <li>
              <b>Objetos:</b> Un objeto es una instancia de una clase. Significa
              que cuando defines una clase, estás definiendo un nuevo tipo de
              dato, y cuando creas un objeto a partir de esa clase, estás
              creando una variable de ese nuevo tipo de dato.
            </li>
            <li>
              <b>Atributos:</b> Los atributos son variables que pertenecen a un
              objeto y representan sus características o propiedades.
            </li>
            <li>
              <b>Métodos:</b> Los métodos son funciones asociadas a un objeto
              que representan las acciones que el objeto puede realizar.
            </li>
            <li>
              <b>Herencia:</b> La herencia es un mecanismo en el que una clase
              (llamada subclase) adquiere las propiedades y comportamientos de
              otra clase (llamada superclase). Esto permite reutilizar código y
              establecer jerarquías entre clases.
            </li>
            <li>
              <b>Encapsulación:</b> La encapsulación es el concepto de ocultar
              los detalles internos de un objeto y exponer solo una interfaz
              para interactuar con él. Esto se logra utilizando modificadores de
              acceso como "public", "private", "protected", etc.
            </li>
            <li>
              <b>Polimorfismo:</b> El polimorfismo es la capacidad de un objeto
              para tomar varias formas y responder de diferentes maneras según
              el contexto en el que se utilice.
            </li>
          </ul>
          <hr />
          <h4>Ejemplo de Clase en Java:</h4>
          <pre className="p-3 mb-2 bg-dark text-white">
            {"        "}public class Coche {"{"}
            {"  "}
            {"\n"}
            {"          "}// Atributos{"\n"}
            {"          "}public String marca;{"\n"}
            {"          "}public String modelo;{"\n"}
            {"          "}// Método{"\n"}
            {"          "}public void arrancar() {"{"}
            {"\n"}
            {"            "}System.out.println("El coche está arrancado.");
            {"\n"}
            {"          "}
            {"}"}
            {"\n"}
            {"  "}
            {"\n"}
            {"          "}// Método{"\n"}
            {"          "}public void detenerse() {"{"}
            {"\n"}
            {"            "}System.out.println("El coche se ha detenido.");
            {"\n"}
            {"          "}
            {"}"}
            {"\n"}
            {"        "}
            {"}"}
            {"\n"}
            {"      "}
          </pre>
          <h3>Aprende más con estos tutoriales!</h3>
          <iframe
            width={560}
            height={315}
            src="https://www.youtube.com/embed/tcza2FEz4u4"
            title="YouTube video player"
            frameBorder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
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
          <h3 className="modal-title">Excepciones en Java</h3>
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
            Las excepciones en Java son eventos que ocurren durante la ejecución
            de un programa y que interrumpen el flujo normal del mismo. Cuando
            ocurre una excepción, el programa puede lanzar una "excepción" que
            debe ser "capturada" y "manejada" para evitar que el programa se
            detenga de manera inesperada.
          </p>
          <p>
            Java maneja las excepciones utilizando el mecanismo de "try-catch".
            El código que puede generar una excepción se coloca dentro del
            bloque "try", y si ocurre una excepción, se captura y se maneja en
            uno o más bloques "catch".
          </p>
          <p>Por ejemplo:</p>
          <pre className="p-3 mb-2 bg-dark text-white">
            {"          "}try {"{"}
            {"\n"}
            {"            "}// Código que puede generar una excepción{"\n"}
            {"            "}int resultado = dividir(10, 0);{"\n"}
            {"            "}System.out.println("El resultado es: " + resultado);
            {"\n"}
            {"          "}
            {"}"} catch (ArithmeticException e) {"{"}
            {"\n"}
            {"            "}// Manejo de la excepción{"\n"}
            {"            "}System.out.println("Error: No se puede dividir por
            cero.");{"\n"}
            {"          "}
            {"}"}
            {"\n"}
            {"        "}
          </pre>
          <p>
            Además del bloque "catch", también se puede utilizar el bloque
            "finally" para ejecutar código que debe ejecutarse siempre,
            independientemente de si se produjo una excepción o no.
          </p>
          <p>
            Es importante manejar adecuadamente las excepciones en Java para que
            los programas sean más robustos y se comporten de manera esperada
            incluso cuando se produzcan situaciones inesperadas.
          </p>
          <hr />
          <h4>Tipos de Excepciones en Java:</h4>
          <ul>
            <li>
              <b>ArithmeticException:</b> Se lanza cuando se produce una
              excepción aritmética, como dividir por cero.
            </li>
            <li>
              <b>NullPointerException:</b> Se lanza cuando se intenta acceder a
              un objeto que no se ha inicializado (es decir, su valor es null).
            </li>
            <li>
              <b>ArrayIndexOutOfBoundsException:</b> Se lanza cuando se intenta
              acceder a un índice inválido en un array (por ejemplo, un índice
              negativo o mayor que la longitud del array).
            </li>
            <li>
              <b>FileNotFoundException:</b> Se lanza cuando se intenta acceder a
              un archivo que no existe.
            </li>
            <li>
              <b>IOException:</b> Se lanza cuando ocurre un error de
              entrada/salida, como problemas al leer o escribir archivos.
            </li>
            <li>
              <b>ClassNotFoundException:</b> Se lanza cuando no se encuentra una
              clase durante la carga dinámica (por ejemplo, al usar
              Class.forName()).
            </li>
            <li>
              <b>Y muchos más...</b>
            </li>
            <iframe
              width={560}
              height={315}
              src="https://www.youtube.com/embed/vhkhmCmNG_4"
              title="YouTube video player"
              frameBorder={0}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen=""
            />
          </ul>
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
          <h3 className="modal-title">Colecciones en Java</h3>
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>
        &lt;{" "}
        <div className="modal-body">
          <p>
            Las colecciones en Java son estructuras de datos que permiten
            almacenar, organizar y manipular conjuntos de elementos de manera
            eficiente. Java proporciona una amplia variedad de clases e
            interfaces de colecciones en su biblioteca estándar (API de Java).
          </p>
          <p>Algunas de las colecciones más utilizadas en Java son:</p>
          <ul>
            <li>
              <b>ArrayList:</b> Implementa una lista dinámica que puede crecer o
              reducir automáticamente según sea necesario. Es similar a un
              array, pero su tamaño puede cambiar dinámicamente.
            </li>
            <li>
              <b>LinkedList:</b> Implementa una lista doblemente enlazada. Es
              útil cuando se requieren operaciones frecuentes de inserción y
              eliminación en el medio de la lista.
            </li>
            <li>
              <b>HashSet:</b> Implementa un conjunto no ordenado que no permite
              elementos duplicados.
            </li>
            <li>
              <b>TreeSet:</b> Implementa un conjunto ordenado utilizando una
              estructura de árbol. Los elementos se ordenan automáticamente en
              orden ascendente.
            </li>
            <li>
              <b>HashMap:</b> Implementa un mapa que asocia claves con valores.
              Permite acceder rápidamente a los valores a través de las claves.
            </li>
            <li>
              <b>TreeMap:</b> Implementa un mapa ordenado utilizando una
              estructura de árbol. Las claves se ordenan automáticamente.
            </li>
          </ul>
          <p>
            Las colecciones en Java son muy útiles y se utilizan ampliamente en
            el desarrollo de aplicaciones para manejar datos de manera eficiente
            y flexible.
          </p>
          <hr />
          <h4>Ejemplo de Uso de ArrayList en Java:</h4>
          <pre className="p-3 mb-2 bg-dark text-white">
            {"          "}import java.util.ArrayList;{"\n"}
            {"          "}public class Main {"{"}
            {"\n"}
            {"            "}public static void main(String[] args) {"{"}
            {"\n"}
            {"              "}// Crear un ArrayList de números enteros{"\n"}
            {"              "}ArrayList
            <integer>
              {" "}
              numeros = new ArrayList&lt;&gt;();{"\n"}
              {"    "}
              {"\n"}
              {"              "}// Agregar elementos al ArrayList{"\n"}
              {"              "}numeros.add(10);{"\n"}
              {"              "}numeros.add(20);{"\n"}
              {"              "}numeros.add(30);{"\n"}
              {"    "}
              {"\n"}
              {"              "}// Acceder a un elemento por índice{"\n"}
              {"              "}int segundoNumero = numeros.get(1);{"\n"}
              {"              "}System.out.println("El segundo número es: " +
              segundoNumero);{"\n"}
              {"    "}
              {"\n"}
              {"              "}// Tamaño del ArrayList{"\n"}
              {"              "}int tamano = numeros.size();{"\n"}
              {"              "}System.out.println("El tamaño del ArrayList es:
              " + tamano);{"\n"}
              {"    "}
              {"\n"}
              {"              "}// Recorrer el ArrayList con un bucle for-each
              {"\n"}
              {"              "}System.out.println("Elementos del ArrayList:");
              {"\n"}
              {"              "}for (int numero : numeros) {"{"}
              {"\n"}
              {"                "}System.out.println(numero);{"\n"}
              {"              "}
              {"}"}
              {"\n"}
              {"            "}
              {"}"}
              {"\n"}
              {"          "}
              {"}"}
              {"\n"}
              {"        "}
            </integer>
          </pre>
          <p>
            El código anterior crea un ArrayList de números enteros, agrega
            algunos elementos, accede a un elemento por su índice, muestra el
            tamaño del ArrayList y recorre los elementos utilizando un bucle
            for-each.
          </p>
          <iframe
            width={560}
            height={315}
            src="https://www.youtube.com/embed/pwVppK3RgyI"
            title="YouTube video player"
            frameBorder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen=""
          />
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
          <h3 className="modal-title">Hilos (Threads) en Java</h3>
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
            Los hilos (threads) en Java son una forma de lograr la multitarea y
            permiten que un programa ejecute varias tareas simultáneamente. Un
            hilo es una secuencia independiente de ejecución dentro de un
            programa.
          </p>
          <p>
            Java proporciona una interfaz Thread y una clase Thread para crear y
            manipular hilos. Hay dos formas principales de crear hilos en Java:
          </p>
          <ul>
            <li>
              <b>Extender la clase Thread:</b> Se puede crear una subclase que
              extienda la clase Thread y anular el método run() para definir la
              tarea que se ejecutará en el hilo.
            </li>
            <li>
              <b>Implementar la interfaz Runnable:</b> Se puede implementar la
              interfaz Runnable y proporcionar una implementación del método
              run(). Luego, se crea un objeto Thread que toma el objeto Runnable
              como argumento para iniciar el hilo.
            </li>
          </ul>
          <p>Por ejemplo:</p>
          <pre className="p-3 mb-2 bg-dark text-white">
            {"          "}// Ejemplo: Extender la clase Thread{"\n"}
            {"          "}class MiHilo extends Thread {"{"}
            {"\n"}
            {"            "}public void run() {"{"}
            {"\n"}
            {"              "}for (int i = 1; i &lt;= 5; i++) {"{"}
            {"\n"}
            {"                "}System.out.println("Hilo " +
            Thread.currentThread().getId() + ": " + i);{"\n"}
            {"              "}
            {"}"}
            {"\n"}
            {"            "}
            {"}"}
            {"\n"}
            {"          "}
            {"}"}
            {"\n"}
            {"          "}public class Main {"{"}
            {"\n"}
            {"            "}public static void main(String[] args) {"{"}
            {"\n"}
            {"              "}MiHilo hilo1 = new MiHilo();{"\n"}
            {"              "}MiHilo hilo2 = new MiHilo();{"\n"}
            {"    "}
            {"\n"}
            {"              "}hilo1.start();{"\n"}
            {"              "}hilo2.start();{"\n"}
            {"            "}
            {"}"}
            {"\n"}
            {"          "}
            {"}"}
            {"\n"}
            {"        "}
          </pre>
          <p>
            El código anterior crea dos hilos utilizando la clase MiHilo que
            extiende Thread. Cada hilo imprime los números del 1 al 5. Al
            ejecutar el programa, los dos hilos se ejecutarán simultáneamente y
            podrían producir resultados en orden diferente en cada ejecución.
          </p>
          <hr />
          <h4>¿Por qué utilizar hilos en Java?</h4>
          <p>
            Los hilos son útiles en situaciones donde se requiere realizar
            múltiples tareas concurrentemente, como en aplicaciones con
            interfaces gráficas, servidores web, juegos en línea, etc. Al
            utilizar hilos, es posible lograr una mayor eficiencia y capacidad
            de respuesta en el programa.
          </p>
          <p>
            Es importante tener en cuenta que al trabajar con hilos, también
            deben abordarse cuestiones de concurrencia y sincronización para
            evitar problemas como condiciones de carrera y bloqueos.
          </p>
          <iframe
            width={560}
            height={315}
            src="https://www.youtube.com/embed/fiLrTdSKVcE"
            title="YouTube video player"
            frameBorder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen=""
          />
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
          <h3 className="modal-title">Streams en Java</h3>
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
            Los Streams en Java son una forma poderosa y funcional de manipular
            colecciones de datos de manera declarativa. Los Streams permiten
            realizar operaciones como filtrado, mapeo, reducción y clasificación
            en colecciones de manera eficiente.
          </p>
          <p>
            Un Stream es una secuencia de elementos que se obtiene de una
            colección u otra fuente de datos. Los Streams en Java proporcionan
            una API rica para trabajar con datos de forma funcional.
          </p>
          <p>
            Algunas de las operaciones comunes que se pueden realizar con
            Streams son:
          </p>
          <ul>
            <li>
              <b>Filter:</b> Permite filtrar los elementos de un Stream según
              una condición.
            </li>
            <li>
              <b>Map:</b> Permite transformar cada elemento de un Stream en otro
              objeto.
            </li>
            <li>
              <b>Reduce:</b> Permite combinar todos los elementos de un Stream
              en un solo resultado.
            </li>
            <li>
              <b>Collect:</b> Permite recolectar los elementos de un Stream en
              una colección o en otro tipo de resultado.
            </li>
            <li>
              <b>Sorted:</b> Permite ordenar los elementos de un Stream según un
              criterio específico.
            </li>
            <li>
              <b>Distinct:</b> Permite eliminar elementos duplicados de un
              Stream.
            </li>
          </ul>
          <p>Por ejemplo:</p>
          <pre className="p-3 mb-2 bg-dark text-white">
            {"          "}import java.util.Arrays;{"\n"}
            {"          "}import java.util.List;{"\n"}
            {"          "}import java.util.stream.Collectors;{"\n"}
            {"          "}public class Main {"{"}
            {"\n"}
            {"            "}public static void main(String[] args) {"{"}
            {"\n"}
            {"              "}List&lt;Integer&gt; numeros = Arrays.asList(1, 2,
            3, 4, 5, 6, 7, 8, 9, 10);{"\n"}
            {"    "}
            {"\n"}
            {"              "}// Filtrar los números pares{"\n"}
            {"              "}List&lt;Integer&gt; pares = numeros.stream(){"\n"}
            {"                                           "}.filter(num -&gt; num
            % 2 == 0){"\n"}
            {"                                           "}
            .collect(Collectors.toList());{"\n"}
            {"    "}
            {"\n"}
            {"              "}System.out.println("Números pares: " + pares);
            {"\n"}
            {"    "}
            {"\n"}
            {"              "}// Calcular la suma de los números{"\n"}
            {"              "}int suma = numeros.stream(){"\n"}
            {"                                "}.reduce(0, Integer::sum);{"\n"}
            {"    "}
            {"\n"}
            {"              "}System.out.println("Suma de los números: " +
            suma);{"\n"}
            {"            "}
            {"}"}
            {"\n"}
            {"          "}
            {"}"}
            {"\n"}
            {"        "}
          </pre>
          <p>
            El código anterior utiliza Streams para filtrar los números pares de
            una lista y calcular la suma de todos los números en la lista.
          </p>
          <hr />
          <h4>¿Por qué utilizar Streams en Java?</h4>
          <p>
            Los Streams ofrecen una forma más clara, concisa y funcional de
            trabajar con colecciones de datos. Al utilizar Streams, es posible
            escribir código más legible y mantenible, además de obtener
            beneficios en términos de rendimiento debido a su naturaleza
            eficiente.
          </p>
          <p>
            Los Streams son especialmente útiles cuando se trabaja con grandes
            cantidades de datos, ya que pueden procesarlos de manera paralela y
            aprovechar múltiples núcleos de CPU para mejorar el rendimiento.
          </p>
          <iframe
            width={560}
            height={315}
            src="https://www.youtube.com/embed/hz6hlaU5o58"
            title="YouTube video player"
            frameBorder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen=""
          />
        </div>
      </div>
    </div>
  </div>
</>

  

    </div>
        
    );
  };
  
  export default Java;