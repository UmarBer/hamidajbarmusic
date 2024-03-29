import './HamidAjbarVideo.css';

const HamidAjbarVideo = () => {
  return (
    <section className="hamid-video" id="home">
      <div>
        <h1 className="h1-hamid">HAMID AJBAR MUSIC</h1>
        <div className="video-container">
          <iframe
            src="https://www.youtube.com/embed/jSQE_LEGL_w?si=rPh7FFT3IefMX6ym"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default HamidAjbarVideo;
