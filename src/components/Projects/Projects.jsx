import './Projects.css';

const Projects = () => {
  // eslint-disable-next-line no-unused-vars
  const soundcloudStyle = {
    fontSize: '10px',
    color: '#cccccc',
    lineBreak: 'anywhere',
    wordBreak: 'normal',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    fontFamily:
      'Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif',
    fontWeight: '100'
  };

  return (
    <div className="projects-div" id="projects">
      <div className="flamenco">
        <h2>HAMID AJBAR FLAMENCO - Dos historias, un camino</h2>
        <p className="flamenco-txt">
          Hamid Ajbar Flamenco fue fundado por Hamid Ajbar en 2016, nace con la
          idea de profundizar en la música arábigo-andalusí y el flamenco, para
          descubrir esa historia compartida y crear una fusión auténtica entre
          ambas tradiciones. Muy pronto se unieron al proyecto el cantaor
          Alberto Funes y el guitarrista Lolo de la Encarna, ambos de Granada,
          aportando sus conocimientos profundos del flamenco, tanto en su
          historia como en los diferentes palos y cantes.{' '}
        </p>
        <p className="flamenco-txt">
          Dos historias, un camino es un encuentro de música y danza entre dos
          culturas, la arábigo-andalusí y la flamenca. Aunque en un principio
          fueron de épocas distintas, coinciden en el tiempo y lugar donde ambas
          estaban marginadas. Con este espectáculo se unen la profundidad del
          cante flamenco y la poesía lírica de los moaxajas y zejeles
          andalusíes, acompañados con la belleza y la pasión del baile flamenco,
          en una fusión “jonda”, de sabor exquisito, con una fragancia tan
          fresca como la brisa de las noches de verano de la Alhambra.{' '}
        </p>
      </div>

      <div className="yinnan">
        <h2 className="yinnan-h2">
          YINNAN AL ANDALUS - Un viaje espiritual de Córdoba a Damasco
        </h2>
        <p className="yinnan-txt">
          Yinnan Al Andalus «Jardines de Al Andalus » se inspira en el inmenso
          legado de poesías, qasidas y moaxajas espirituales que nos han dejado
          grandes maestros sufíes de España, el norte de África y oriente medio.
          Estos incluyen a Ibn Arabi, Rabia Al Adawiyya, Shushtari, Harrak, y
          Busayri entre otros. El repertorio de Yinnan Al Andalus es un viaje
          del espíritu que nos lleva desde los famosos jardines de la Córdoba
          Califal, Granada y el Norte de África, hasta los no menos famosos
          jardines de Damasco, incluyendo una variedad de estilos musicales y
          maqamat (modos musicales) que se encuentran en cada región.{' '}
        </p>
        <p className="yinnan-txt">
          La palabra “Yinnan”, o Jardines, tiene un significado terrenal,
          refiriéndose a los magníficos jardines de Al Andalus y Oriente
          Próximo, además de un sentido espiritual, ya que “Yanan” también
          significa “corazón” y “alma”. “Dios es bello y ama la belleza” con
          estas bellas palabras queremos invitar al oyente a compartir el viaje
          espiritual de “Ŷinnan Al Ándalus”, dejándose llevar por la belleza de
          sus melodías y letras.
        </p>
      </div>
    </div>
  );
};

export default Projects;
