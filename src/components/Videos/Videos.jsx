import './Videos.css';

const Videos = () => {
  return (
    <>
      <h2 className="h2-videos" id="videos">
        VIDEOS
      </h2>
      <div className="video-gallery">
        <figure className="gallery__video--1">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/BZFQYCbsJeE?si=ZxFKXTQ_KbYmlMX8"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </figure>
        <figure className="gallery__video--2">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/PokvreHSD54?si=nH4DRc-DHZPXkkES"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </figure>
        <figure className="gallery__video--3">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/EaVwB0dRAW4?si=RUr9H2lAf2F9GZC0"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </figure>
        <figure className="gallery__video--4">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/uKDExDD29NQ?si=2IxBrjQcYPG0WF05"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </figure>
      </div>
    </>
  );
};

export default Videos;
