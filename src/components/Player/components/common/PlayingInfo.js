import React from 'react';
import PropTypes from 'prop-types';
import styles from './PlayingInfo.scss';

const PlayingInfo = ({
  showName,
  episodeTitle,
  showImageURL,
  live,
  expand,
}) => {
  /* This will get changed later */
  const getLiveImage = () =>
    'http://localhost:3000/media/uploads/images/RR_LOGO.png'; 
  let img = showImageURL && !live ? showImageURL : getLiveImage();
  return (
    <div className={styles.infoContainer} onClick={expand}>
      <div className={styles.imgContainer}>
        <img className={styles.img} src={img} alt={showName} />
      </div>
      <div className={styles.text}>
        {!live ? (
          <React.Fragment>
            <h2 className={styles.showName}>{showName}</h2>
            <h3 className={styles.episodeTitle}>{episodeTitle}</h3>
          </React.Fragment>
        ) : (
          <h2 className={styles.showName}>{episodeTitle}</h2>
        )}
      </div>
    </div>
  );
};

PlayingInfo.propTypes = {
  showName: PropTypes.string.isRequired,
  episodeTitle: PropTypes.string.isRequired,
  showImageURL: PropTypes.string.isRequired,
  expand: PropTypes.func,
  live: PropTypes.bool.isRequired
};

export default PlayingInfo;
