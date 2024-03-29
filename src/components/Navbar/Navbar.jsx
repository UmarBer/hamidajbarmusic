import './Navbar.css';
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isChecked, setIsChecked] = useState(false);

  // Function to toggle the menu checkbox
  const toggleMenu = () => {
    setIsChecked(!isChecked);
  };

  // Function to close the menu when a link is clicked
  const handleLinkClick = () => {
    setIsChecked(false);
  };

  // Effect to add event listener to links when component mounts
  useEffect(() => {
    const menuLinks = document.querySelectorAll('nav a');

    menuLinks.forEach((link) => {
      link.addEventListener('click', handleLinkClick);
    });

    // Cleanup function to remove event listeners when component unmounts
    return () => {
      menuLinks.forEach((link) => {
        link.removeEventListener('click', handleLinkClick);
      });
    };
  }, []); // Empty dependency array ensures this effect runs only once after initial render

  return (
    <>
      <input
        type="checkbox"
        id="menu"
        checked={isChecked}
        onChange={toggleMenu}
      />
      <header>
        <div className="logo">
          <h1>HAMID</h1>
        </div>
        {/* MOBILE SCREEN */}
        <label htmlFor="menu">
          <div></div>
          <div></div>
          <div></div>
        </label>
        {/* END MOBILE SCREEN */}
        <nav>
          <a href="#home">HOME</a>
          <a href="#hamid-ajbar">HAMID AJBAR</a>
          <a href="#projects">PROJECTS</a>
          <a href="#gallery">GALLERY</a>
          <a href="#videos">VIDEOS</a>
          <a href="#past-events">PAST EVENTS</a>
          <a href="#press-and-more">PRESS AND MORE</a>
          <a href="#contact">CONTACT</a>
        </nav>
      </header>
    </>
  );
};

export default Navbar;

// export default Navbar;

// import './Navbar.css';
// import React, { useState } from 'react';

// const Navbar = () => {
//   return (
//     <>
//       <input type="checkbox" id="menu" />
//       <header>
//         <div className="logo">
//           <h1>HAMID</h1>
//         </div>
//         {/* MOBILE SCREEN */}
//         <label htmlFor="menu">
//           <div></div>
//           <div></div>
//           <div></div>
//         </label>
//         {/* END MOBILE SCREEn */}
//         <nav>
//           <a href="#home">HOME</a>
//           <a href="#hamid-ajbar">HAMID AJBAR</a>
//           <a href="#projects">PROJECTS</a>
//           <a href="#gallery">GALLERY</a>
//           <a href="#videos">VIDEOS</a>
//           <a href="#past-events">PAST EVENTS</a>
//           <a href="#press-and-more">PRESS AND MORE</a>
//           <a href="#contact">CONTACT</a>
//         </nav>
//       </header>
//     </>
//   );
// };

// export default Navbar;
