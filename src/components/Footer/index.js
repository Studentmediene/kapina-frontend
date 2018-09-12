import React from 'react';
import { Link } from 'react-router-dom';

import styles from './styles.css';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.content}>
        <p>
          Denne tjenesten tilbys av Studentmediene i Trondheim AS. Musikken er
          gjengitt med tilatelse fra TONO/NCB.
        </p>
        <p>Uautorisert lenking, videreføring eller kopiering er ulovlig.</p>
        <br />
        <p>Radioredaktør: Paulina Dubkov</p>
        <p>Ansvarlig redaktør: Hanna Jarstø Ervik</p>
        <br />
        <p>
          <a
            className={styles.footerLink}
            href="mailto:redaktor@radiorevolt.no"
          >
            Kontakt oss
          </a>
        </p>
        <p>
          <Link className={styles.footerLink} to="/om">
            Om oss
          </Link>
        </p>
        <p>
          <Link className={styles.footerLink} to="/personvern">
            Personvern
          </Link>
        </p>
        <p>2018 © Radio Revolt</p>
      </div>
    </div>
  );
};

export default Footer;
