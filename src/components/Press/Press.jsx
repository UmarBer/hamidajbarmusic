/* eslint-disable react/no-unescaped-entities */
import './Press.css';

const Press = () => {
  return (
    <>
      <h2 id="press-and-more" className="h2-press">
        PRESS AND MORE
      </h2>
      <div className="press-div">
        <div className="img-div">
          <img
            src="https://hamidajbarmusic.com/wp-content/uploads/2019/11/vicenza-press-2.jpg"
            alt="reseña-italia"
          />
        </div>
        <div className="press-statement">
          <h3>NOTA DE PRENSA DEL FESTIVAL MURCIA 3 CULTURAS</h3>
          <h4>
            Hamid Ajbar muestra los "Jardines de Al Ándalus" en el Festival
            Murcia 3 Culturas
          </h4>
          <p className="p-statement">
            Este sábado, a los pies de la Capilla de los Vélez y bajo la colosal
            mirada de la torre de la Catedral de Murcia, más de dos mil personas
            se congregaron atraídas por la poesía evocadora y espiritual
            inspirada en Granada que interpretaría Hamid Ajbar; prestigioso
            violinista y cantante marroquí especializado en música andalusí que,
            en nuestro país, ha trabajado con artistas de la talla de Paco de
            Lucía, José Mercé o Carmen Linares.
          </p>
          <a
            href="https://www.murciocio.es/content/hamid-ajbar-muestra-los-jardines-de-al-andalus-en-el-festival-murcia-3-culturas"
            className="btn"
          >
            Leer más
          </a>
        </div>

        <div className="review">
          <h4>RESEÑA DISCO</h4>
          <p className="p-statement">
            Entregan seis números musicales en los que amalgaman con tal
            perfección las músicas y los textos de uno de otro lado que todo
            fluye de manera natural, como no puede ser de otra forma. Hamid en
            la voz árabe y Alberto Funes en el cante flamenco, más una decena de
            grandes instrumentistas. Cante jondo andalusí por rumbas, tangos y
            tanguillos y tangos de Graná,… Y para redondear un gran trabajo, la
            poesía de Federico García Lorca, la “Leyenda del Tiempo”… “El sueño
            va sobre el tiempo flotando como un velero nadie puede abrir
            semillas en el corazón del sueño”.
          </p>
          <blockquote
            className="wp-embedded-content"
            data-secret="FEufJHYFyK"
          ></blockquote>
          <iframe
            sandbox="allow-scripts"
            security="restricted"
            src="https://www.lossonidosdelplanetaazul.com/disco/hamid-ajbar-aire-andalusi-flamenco/embed/#?secret=FEufJHYFyK"
            width="auto"
            height="600"
            title="«HAMID AJBAR Aire andalusí flamenco» — Los Sonidos del Planeta Azul"
            data-secret="FEufJHYFyK"
            frameBorder="0"
            marginWidth="0"
            marginHeight="0"
            scrolling="no"
            className="wp-embedded-content"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Press;
