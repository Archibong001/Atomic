// import React from 'react'

// export default function Header() {
//   return (
//           <nav className="navbar">
//       <div className="logo">
//         <span >ATOMIC</span>
//       </div>
//       <ul className="navbar-list">
//         <li><a href="#">Home</a></li>
//         <li><a href="#">About</a></li>
//         <li><a href="#">Services</a></li>
//         <li><a href="#">Gallery</a></li>
//         <li><a href="#">Blog</a></li>
//         <li><a href="#">FAQs</a></li>
//         <li><button className="nav-button">Login</button></li>
//         <li><button className="nav-button">SignUp</button></li>
//       </ul>
//     </nav>
//   );
// };




import React, { useState, useEffect } from 'react';

export default function Header() {
  const [isMobile, setIsMobile] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Update isMobile state on window resize
  useEffect(() => {
    function handleResize() {
      setIsMobile(window.width <= 768); // Adjust breakpoint as needed
    }
    handleResize(); // Call initially
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <span>ATOMIC</span>
      </div>
     
        <button className="nav-button" onClick={toggleMenu}>
          Menu
        </button>
     
        <ul className="navbar-list" id='nav1'>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Gallery</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">FAQs</a></li>
          <li><button className="nav-button">Login</button></li>
          <li><button className="nav-button">SignUp</button></li>
        </ul>
     
      { isMenuOpen && (
        <ul className="navbar-list" id='nav2'>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Gallery</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">FAQs</a></li>
          <li><button className="nav-button">Login</button></li>
          <li><button className="nav-button">SignUp</button></li>
        </ul>
      )}
    </nav>
  );
}











    
