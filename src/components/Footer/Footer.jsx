import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <>
      <div id="contact" className="footer">
        <div className="socials">
          <a
            href="https://www.facebook.com/profile.php?id=100063468192070"
            target="blank"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://www.youtube.com/@HamidAjbarMusic" target="blank">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
          <a
            href="https://www.instagram.com/hamidajbarmusic/?hl=es"
            target="blank"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <img
            src="https://hamidajbarmusic.com/wp-content/uploads/2018/05/newlogo7-2-300x300.png"
            alt="hamid-ajbar-logo"
            className="hamid-logo"
          />
          <div className="contact-column">
            <h2>CONTACT</h2>
            <p>fauziabene@gmail.com</p>
            <p>+41 77 502 90 58</p>
            <p>hamidajbar2002@gmail.com</p>
            <p>+34 665 639 184</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
