/**
*
* Footer
*
*/

import React from 'react';
import { Link } from 'react-router';


import styles from './styles.css';

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.content}>
        <p>Denne tjenesten tilbys av Studentmediene i Trondheim AS. Musikken er gjengitt med tilatelse fra TONO/NCB.</p>
        <p>Uautorisert lenking, videreføring eller kopiering er ulovlig.</p>
        <br />
        <p>Radioredaktør: Peter Wallumrød</p>
        <p>Ansvarlig redaktør: Håkon Pedersen</p>
        <br />
        <p>
          <Link className={styles.footerLink} to="/om">
            Om oss
          </Link>
        </p>
        <p>2017 © Radio Revolt</p>
      </div>
    </div>
  );
}

export default Footer;
