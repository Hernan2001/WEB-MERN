import React, { useEffect } from 'react';

import './css/inicioStyles.scss'
import logo from '../components/imagenes/logo/logo.jpg'
const carrusel = require.context('../components/imagenes/carrusel', true);
const lenguaje = require.context('../components/imagenes/CartasLenguaje', true);

const Menu = () => {



    return (
      
    <div className='menu'>
      <link
    rel="stylesheet"
    href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
  />
  <nav className="navbar navbar-dark bg-dark fixed-top">
    <div className="container-fluid">
      <img src={logo} alt="Logo" width={70} height={40} />
      {/*class="d-inline-block align-text-top"*/}
      <a className="navbar-brand" href="#">
        Programeitor
      </a>
      
      
       
            <a
              id="cerrar-sesion-btn"
              className="btn btn-primary"
              href="/login"
            >
              Cerrar Sesión
            </a>
          
        
      
    </div>
  </nav>
  <br />
  <br />
  <br /><br />
  {/*Fila de imagenes desplazables*/}
  <header>
    <div className="container 1">
      <div
        id="carouselExampleIndicators"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
        data-bs-interval={4000}
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={0}
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={1}
            aria-label="Slide 2"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={2}
            aria-label="Slide 3"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={3}
            aria-label="Slide 4"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={4}
            aria-label="Slide 5"
          />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={carrusel('./imagen1.jpg')}
              className="imagenes active d-block w-100"
              alt="slider 0"
            />
            <div className="carousel-caption top-0 nt4">
              {/*<p class="p1 nt-5 fs-5 text-uppercase">
                !Desde cero a experto en programación!                         
              </p>*/}
              <h4 className="display-5 fv-bolder text-capitalize">
                Nuestra página web es tu guía completa para dominar lenguajes de
                programación
              </h4>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={carrusel('./62847-robots.jpg')}
              className="imagenes d-block w-100"
              alt="slider 1"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5 className="display-6">
                Navega el universo de las redes y la ciberseguridad
              </h5>
              {/*<p class="p2 nt-5 fs-5">
               En nuestra página web,
              descubrirás información actualizada y 
              herramientas prácticas para fortalecer tus conocimientos en este crucial ámbito tecnológico.
            </p>*/}
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={carrusel('./imagen3.jpg')}
              className="imagenes d-block w-100"
              alt="slider 2"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5 className="display-6">
                Explora el fascinante mundo de la electrónica
              </h5>
              {/*<p class="p3 nt-5 fs-5">
            Encuentra en nuestra página web recursos esenciales y 
            tutoriales paso a paso para adentrarte en estos emocionantes campos."
            </p>*/}
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={carrusel('./imagen4.jpg')}
              className="imagenes d-block w-100"
              alt="slider 3"
            />
            <div className="carousel-caption top-0 nt4">
              <h4 className="display-5 fv-bolder text-capitalize">
                Despierta tu ingenio robótico
              </h4>
              {/*<p class="p4 nt-5 fs-5 ">
              Con nuestros recursos especializados y proyectos emocionantes, 
              nuestra página web es tu compañero ideal para explorar y 
              aprender sobre el apasionante mundo de la robótica   
            </p>*/}
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={carrusel('./imagen5.jpg')}
              className="imagenes d-block w-100"
              alt="slider 4"
            />
            <div className="carousel-caption top-0 nt4">
              {/*<p class="p5 nt-5 fs-5 text-uppercase">
              Nuestra página web es tu guía completa para dominar lenguajes de programación
              Potencia tus habilidades técnicas en un solo lugar: Nuestra página web es tu 
              destino centralizado para adquirir conocimientos fundamentales y avanzados en 
              programación, electrónica, mecatrónica, redes, ciberseguridad y robótica.                     
            </p>*/}
              <h4 className="display-5 fv-bolder text-capitalize">
                ¡Da el primer paso hacia el éxito tecnológico!
              </h4>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  </header>
   <br />
  {/*Fila de informacion de cursos*/}
  <header>
    <div className="container">
      <div className="row">
        <br />
        <div className="col-sm-12 col-md-8 col-lg-4 col-xl-3">
          <br />
          <div
            className="bg-image card shadow-1-strong"
            style={{
              backgroundImage:
                'url("https://mdbcdn.b-cdn.net/img/new/slides/003.webp")'
            }}
          >
            <div className="card-body text-white">
              <h5 className="card-title">Programacion</h5>
              <p className="card-text">
                Escribe el código de tu futuro con programación el lenguaje que
                transforma ideas en realidad.
              </p>
              <a href="#!" className="btn btn-outline-light">
                Ver mas
              </a>
            </div>
          </div>
          <br />
          <div
            className="bg-image card shadow-1-strong"
            style={{
              backgroundImage:
                'url("https://mdbcdn.b-cdn.net/img/new/slides/003.webp")'
            }}
          >
            <div className="card-body text-white">
              <h5 className="card-title">Mecatronica</h5>
              <p className="card-text">
                Explora el futuro con la mecatrónica con la tecnología que cobra
                vida.
              </p>
              <a href="#!" className="btn btn-outline-light">
                Ver mas
              </a>
            </div>
          </div>
          <br />
        </div>
        <br />
        <div className="col-sm-12 col-md-8 col-lg-4 col-xl-3">
          <br />
          <div
            className="bg-image card shadow-1-strong"
            style={{
              backgroundImage:
                'url("https://mdbcdn.b-cdn.net/img/new/slides/003.webp")'
            }}
          >
            <div className="card-body text-white">
              <h5 className="card-title">Electronica</h5>
              <p className="card-text">
                !Domina el arte de la electrónica!, el corazón de la innovación
                tecnológica.
              </p>
              <br />
              <a href="#!" className="btn btn-outline-light">
                Ver mas
              </a>
            </div>
          </div>
          <br />
          <div
            className="bg-image card shadow-1-strong"
            style={{
              backgroundImage:
                'url("https://mdbcdn.b-cdn.net/img/new/slides/003.webp")'
            }}
          >
            <div className="card-body text-white">
              <h5 className="card-title">Redes</h5>
              <p className="card-text">
                Conecta y construye el mundo de las redes donde las
                posibilidades se entrelazan.
              </p>
              <a href="#!" className="btn btn-outline-light">
                Ver mas
              </a>
            </div>
          </div>
          <br />
        </div>
        <br />
        <div className="col-sm-12 col-md-8 col-lg-4 col-xl-3">
          <br />
          <div
            className="bg-image card shadow-1-strong"
            style={{
              backgroundImage:
                'url("https://mdbcdn.b-cdn.net/img/new/slides/003.webp")'
            }}
          >
            <div className="card-body text-white">
              <h5 className="card-title">Ciberseguridad</h5>
              <p className="card-text">
                Protege tus fronteras digitales con ciberseguridad el escudo de
                la era digital.
              </p>
              <br />
              <a href="#!" className="btn btn-outline-light">
                Ver mas
              </a>
            </div>
          </div>
          <br />
          <div
            className="bg-image card shadow-1-strong"
            style={{
              backgroundImage:
                'url("https://mdbcdn.b-cdn.net/img/new/slides/003.webp")'
            }}
          >
            <div className="card-body text-white">
              <h5 className="card-title">Hacking</h5>
              <p className="card-text">
                Descubre el poder del hacking ético explorando los límites de la
                seguridad digital.
              </p>
              <a href="#!" className="btn btn-outline-light">
                Ver mas
              </a>
            </div>
          </div>
          <br />
        </div>
        <br />
        <div className="col-sm-12 col-md-8 col-lg-4 col-xl-3">
          <br />
          <div
            className="bg-image card shadow-1-strong"
            style={{
              backgroundImage:
                'url("https://mdbcdn.b-cdn.net/img/new/slides/003.webp")'
            }}
          >
            <div className="card-body text-white">
              <h5 className="card-title">Robotica</h5>
              <p className="card-text">
                Da vida a tus sueños con la robótica donde la imaginación
                encuentra su forma.
              </p>
              <br />
              <a href="#!" className="btn btn-outline-light">
                Ver mas
              </a>
            </div>
          </div>
          <br />
          <div
            className="bg-image card shadow-1-strong"
            style={{
              backgroundImage:
                'url("https://mdbcdn.b-cdn.net/img/new/slides/003.webp")'
            }}
          >
            <div className="card-body text-white">
              <h5 className="card-title">Cableados</h5>
              <p className="card-text">
                Conquista el laberinto de los cableados, !Cada conexión crea
                nuevas posibilidades!.
              </p>
              <a href="#!" className="btn btn-outline-light">
                Ver mas
              </a>
            </div>
          </div>
          <br />
        </div>
        <br />
      </div>
    </div>
  </header>
  {/*Fila de informacion de lenguajes de programacion*/}
  <section className="container blogs">
    <br />
    <br />
    <h1 className="heading-1">Aprende lo basico de algunos lenguajes!</h1>
    <br />
    <div className="container-blogs">
      <div className="card-blog">
        <div className="container-img">
          <img
            src={lenguaje('./java.jpg')}
            className=" w-100"
            alt="Imagen Blog 1"
          />
          <div className="button-group-blog">
            <span>
              <i className="fa-solid fa-magnifying-glass" />
            </span>
            <span>
              <i className="fa-solid fa-link" />
            </span>
          </div>
        </div>
        <div className="content-blog">
          <h2 className="titulo">JAVA</h2>
          <span>Despierta tu potencial con Java</span>
          <p className="text">
            ¡Programa tu futuro! Descubre el fascinante mundo de Java en nuestra
            página web. Aquí encontrarás una amplia variedad de recursos, ¡Abre
            las puertas a un nuevo mundo de posibilidades!.
          </p>
          <div>
            <a
              href="/menu/java"
              className="btn-read-more"            
            >
              Leer más
            </a>
          </div>
        </div>
      </div>
      <div className="card-blog">
        <div className="container-img">
          <img
            src={lenguaje('./python.jpg')}
            className=" w-100"
            alt="Imagen Blog 1"
          />
          <div className="button-group-blog">
            <span>
              <i className="fa-solid fa-magnifying-glass" />
            </span>
            <span>
              <i className="fa-solid fa-link" />
            </span>
          </div>
        </div>
        <div className="content-blog">
          <br />
          <h2 className="titulo">PYTHON</h2>
          <span>Despliega tus habilidades con Python</span>
          <p className="small-text">
            El lenguaje versátil que impulsa la innovación en la programación.
            ¡Únete a nosotros y desbloquea un sinfín de posibilidades con
            Python!.
          </p>
          <div>
            <a
              href="/menu/python"
              className="btn-read-more"
              
            >
              Leer más
            </a>
          </div>
        </div>
      </div>
      <div className="card-blog">
        <div className="container-img">
          <img
            src={lenguaje('./cmas.jpg')}
            className=" w-100"
            alt="Imagen Blog 1"
          />
          <div className="button-group-blog">
            <span>
              <i className="fa-solid fa-magnifying-glass" />
            </span>
            <span>
              <i className="fa-solid fa-link" />
            </span>
          </div>
        </div>
        <div className="content-blog">
          <br />
          <h2 className="titulo">C++</h2>
          <span>Dominio sin límites con C++</span>
          <p className="small-text">
            El lenguaje para desarrollar aplicaciones de alto rendimiento y
            sistemas robustos.
          </p>
          <div>
            <a
              href="/menu/cmas"
              className="btn-read-more"
              
            >
              Leer más
            </a>
          </div>
        </div>
      </div>
      <div className="card-blog">
        <div className="container-img">
          <img
            src={lenguaje('./js.jpg')}
            className=" w-100"
            alt="Imagen Blog 1"
          />
          <div className="button-group-blog">
            <span>
              <i className="fa-solid fa-magnifying-glass" />
            </span>
            <span>
              <i className="fa-solid fa-link" />
            </span>
          </div>
        </div>
        <div className="content-blog">
          <h2 className="titulo">JAVASCRIPT</h2>
          <span>Da vida a tus ideas con JavaScript</span>
          <p className="small-text">
            El poder para crear experiencias interactivas en la web.
          </p>
          <div>
            <a
              href="/menu/js"
              className="btn-read-more"
              
            >
              Leer más
            </a>
          </div>
        </div>
      </div>
      <div className="card-blog">
        <div className="container-img">
          <img
            src={lenguaje('./html.jpg')}
            className=" w-100"
            alt="Imagen Blog 1"
          />
          <div className="button-group-blog">
            <span>
              <i className="fa-solid fa-magnifying-glass" />
            </span>
            <span>
              <i className="fa-solid fa-link" />
            </span>
          </div>
        </div>
        <div className="content-blog">
          <h2 className="titulo">HTML con CSS</h2>
          <span>Construye la web de tus sueños con HTML y CSS</span>
          <p className="small-text">
            La combinación perfecta para el diseño y la estructura.
          </p>
          <a
            href="/menu/html"
            className="btn-read-more"
            
          >
            Leer más
          </a>
        </div>
      </div>
      <div className="card-blog">
        <div className="container-img">
          <img
            src={lenguaje('./csharp.jpg')}
            className=" w-100"
            alt="Imagen Blog 1"
          />
          <div className="button-group-blog">
            <span>
              <i className="fa-solid fa-magnifying-glass" />
            </span>
            <span>
              <i className="fa-solid fa-link" />
            </span>
          </div>
        </div>
        <div className="content-blog">
          <h2 className="titulo">C#</h2>
          <span>Desata tu poder con C#</span>
          <p className="small-text">
            El lenguaje de programación para construir soluciones sólidas y
            escalables.
          </p>
          <a
            href="/menu/cshart"
            className="btn-read-more"
           
          >
            Leer más
          </a>
        </div>
      </div>
    </div>
  </section>
  {/* Footer utilizando BootstrapGod */}
  <footer
    className="text-white py-4"
    style={{ backgroundColor: "rgba(76, 58, 77, 0.778)" }}
  >
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
                <i className="fab fa-instagram white-icon" /> Instagram
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#" className="white-en">
                <i className="fab fa-github white-icon" /> Git Hub
              </a>
            </li>
          </ul>
        </div>
        {/* Copyright */}
        <div
          className="text-center p-4"
          style={{ backgroundColor: "rgba(255, 222, 222, 0.025)" }}
        >
          © 2023 Copyright:
          <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
            programeitors.com
          </a>
        </div>
        {/* Copyright */}
      </div>
    </div>
    {/*-----------------------------------------------------------*/}
   </footer>


    </div>
        
    );
  };
  
  export default Menu;