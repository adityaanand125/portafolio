import React from 'react';
import './Footer.css';

/* Multi idioma */
import {FormattedMessage} from 'react-intl';


const Footer = () =>{
    // Fecha
    let fecha = new Date().getFullYear();

    return (
       <footer className="footer">
  <div className="site-footer">
    <div className="copyright">
      <p>
        Page created by <strong>Aditya Anand</strong>
      </p>
      <p>&copy; {fecha}. All Rights Reserved.</p>
    </div>

    <div className="redes-sociales">
      <a
        href="https://www.linkedin.com/in/adityaanand512"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-linkedin"></i>
      </a>

      <a
        href="https://github.com/adityaanand125"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-github"></i>
      </a>

      <a
        href="https://www.instagram.com/__ad_di__/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-instagram"></i>
      </a>

      <a
        href="https://wa.me/916203490293"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-whatsapp"></i>
      </a>
    </div>
  </div>
</footer>

    )
};

export default React.memo(Footer);