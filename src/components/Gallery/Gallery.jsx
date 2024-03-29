import './Gallery.css';

const Gallery = () => {
  return (
    <>
      <h2 className="h2-gallery" id="gallery">
        GALLERY
      </h2>
      <div className="gallery">
        <figure className="gallery__item gallery__item--1">
          <img
            className="img-1"
            src="https://hamidajbarmusic.com/wp-content/uploads/2024/02/Rapperswil1.jpeg"
            alt="image1"
          />
        </figure>
        <figure className="gallery__item gallery__item--2">
          <img
            className="img-2"
            src="https://hamidajbarmusic.com/wp-content/uploads/2018/11/FB_IMG_1541322315494.jpg"
            alt="image2"
          />
        </figure>
        <figure className="gallery__item gallery__item--3">
          <img
            className="img-3"
            src="https://hamidajbarmusic.com/wp-content/uploads/2024/02/Rapperswil2.jpeg"
            alt="image3"
          />
        </figure>
        <figure className="gallery__item gallery__item--4">
          <img
            className="img-4"
            src="https://hamidajbarmusic.com/wp-content/uploads/2018/11/FB_IMG_1541277419874.jpg"
            alt="image4"
          />
        </figure>
        <figure className="gallery__item gallery__item--5">
          <img
            className="img-5"
            src="https://hamidajbarmusic.com/wp-content/uploads/2018/08/cafe_20180802_122-1.jpg"
            alt="image5"
          />
        </figure>
        <figure className="gallery__item gallery__item--6">
          <img
            className="img-6"
            src="https://hamidajbarmusic.com/wp-content/uploads/2024/02/Strasbourg.jpeg"
            alt="image6"
          />
        </figure>
      </div>
    </>
  );
};

export default Gallery;
