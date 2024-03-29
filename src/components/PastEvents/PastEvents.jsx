/* eslint-disable react/no-unescaped-entities */
import './PastEvents.css';

const PastEvents = () => {
  return (
    <>
      <h2 className="h2-past-events" id="past-events">
        PAST EVENTS
      </h2>
      <div className="past-events-grid">
        <div className="year2023">
          <h3>2023</h3>
          <p className="year-p">Festival Renaixent - Valencia</p>
          <p className="year-p">Ciclo de Música Antigua - Barcelona</p>
          <p className="year-p">Fête de l'Olivier - Geneva</p>
          <p className="year-p">Celebración del Olivo - Zurich</p>
        </div>
        <div className="year2022">
          <h3>2022</h3>
          <p className="year-p">I Andalusian Culture Day - Zurich</p>
          <p className="year-p">Festival de Música Antigua MAG - Granada</p>
          <p className="year-p">La Noche Blanca del Flamenco - Cordoba</p>
          <p className="year-p">Día de Andalucía - Madinat Zahra</p>
        </div>
        <div className="year2021">
          <h3>2021</h3>
          <p className="year-p">
            Amsterdam, Netherlands with Marmoucha Orchestra
          </p>
          <p className="year-p">Fête de l'Olivier - Geneva</p>
          <p className="year-p">Noches de Alcazaba - Almeria</p>
          <p className="year-p">Festival Murcia Tres Culturas - Murcia</p>
          <p className="year-p">Festival Musica della Tradizioni - Vicenza</p>
          <p className="year-p">
            Festival International de la Musique Andalouse - Casablanca
          </p>
        </div>
        <div className="year2019">
          <h3>2019</h3>
          <p className="year-p">
            Mawlid Nabawi - Le Grand Mosquée, Strasbourg UK Tour
          </p>
          <p className="year-p">Merida Fest 2019 - Merida, Mexico</p>
          <p className="year-p">
            Gala 'A Tile for Seville' - Kuala Lumpur, Malaysia
          </p>
        </div>
        <div className="year2018">
          <h3>2018</h3>
          <p className="year-p">
            Mediterranean Music Festival - Zurich, Bern, Brendola
          </p>
        </div>
        <div className="year2015">
          <h3>2015 - 2016</h3>
          <p className="year-p">Festival Alegria - Chaouen, Morocco</p>
        </div>
      </div>
    </>
  );
};

export default PastEvents;
