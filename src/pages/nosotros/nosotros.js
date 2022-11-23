import { Link } from "react-router-dom";
import("../../styles/nosotros.css");

const Nosotros = () => {

  return (
    <main>
        <section className="card" id="portada">
            <article id="portada-descripcion">
                <h2>Somos desarrolladores en crecimiento</h2>
                <p>Estudiantes del equipo "Mision Tic 2022" de la Universidad Tecnologica de Pereira, realizamos proyectos para poner a prueba nuestros conocimientos.</p>
            </article>
        </section>
        <section className="card" id="proyectos">
            <article id="article-proyectos">
                <div class="card-proyectos">
                    <div class="card-descripcion">
                        <h3>CinePlex Cinema</h3>
                        <p>Aplicacion web de teatro de cine para mostrar a los usuarios las peliculas disponibles con horarios, precios, sinopsis, trailer, etc.</p>
                    </div>
                </div>
            </article>
        </section>
        <section className="card" id="equipo">
            <div id="equipo-titulo">
                <h2>EQUIPO</h2>
                <p>Trabajamos en forma conjunta con metodologias agiles como Scrum, tomando adaptando los estandares de la industria mejorando constantemente, para lograr un desarrollo profesional.</p>
            </div>
            <div id="cards-equipo-todos">
                <article id="article-equipo">
                    <div class="card-equipo">
                        <img src="https://i.postimg.cc/s2S9LdBK/carlos-Galeano.jpg" alt="Miembro del equipo"/>
                        <div class="text-descripcion">
                            <h3>Carlos Galeano</h3>
                            <h4>Frontend Developer, Tester</h4>
                            <h5>+57 3194573263 <br/>carlgale93@hotmail.com</h5>
                        </div>
                    </div>
                </article>
                <article id="article-equipo">
                    <div class="card-equipo">
                        <img src="https://i.postimg.cc/hv4LhX23/anonymous.jpg" alt="Miembro del equipo"/>
                        <div class="equipo-descripcion">
                        </div>
                        <div class="text-descripcion">
                            <h3>Esneider Loaiza</h3>
                            <h4>Lider de Proyecto, Backend</h4>
                            <h5>+57 3108093642 <br/>esneiderlvs@gmail.com</h5>
                        </div>
                    </div>
                </article>
                <article id="article-equipo">
                    <div class="card-equipo">
                        <img src="https://i.postimg.cc/hv4LhX23/anonymous.jpg" alt="Miembro del equipo"/>
                        <div class="equipo-descripcion">
                        </div>
                        <div class="text-descripcion">
                            <h3>David Norena</h3>
                            <h4>Gestor DB</h4>
                            <h5>+57 3114692919 <br/>davidngiraldo@gmail.com</h5>
                        </div>
                    </div>
                </article>
                
            </div>
                
        </section>
    </main>
  );
};

export default Nosotros;
