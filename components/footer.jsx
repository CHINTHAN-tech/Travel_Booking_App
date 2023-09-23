
import './footer.css'
import Image1 from '../Imgs/instagram.png'
import Image2 from '../Imgs/link.png'

import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
      <div className="social-icons">
          <a href="https://instagram.com/nakhsha_builders?igshid=MmU2YjMzNjRlOQ==">
            <img
              src={Image1}
              alt="Instagram"
              className="social-icon"
            />
          </a>
          <a href="https://www.linkedin.com/company/nakhsha-builder/">
            <img
              src={Image2}
              alt="LinkedIn"
              className="social-icon"
            />
          </a>
        </div>
        <p>&copy; {new Date().getFullYear()} Naksha builders. All rights reserved.</p>
        <p>Contact: NakshaBuilders@email.com</p>
      </div>
    </footer>
  );
}

export default Footer;
