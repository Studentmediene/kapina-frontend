/**
*
* PostPreview
*
*/

import React from 'react';
import { Link } from 'react-router';

import styles from './styles.css';

function PostPreview(props) {
  return (
    <div className={styles.postPreview}>
      <Link className={styles.imageLink} to={`/post/${props.slug}`}>
        <img className={styles.image} src={props.coverPhoto} alt={props.title} />
      </Link>
      <Link className={styles.titleLink} to={`/post/${props.slug}`}>
        <h2 className={styles.title}>
          {props.title}
        </h2>
      </Link>
      <p className={styles.lead}>{props.lead}</p>
    </div>
  );
}

PostPreview.propTypes = {
  title: React.PropTypes.string,
  slug: React.PropTypes.string,
  lead: React.PropTypes.string,
  coverPhoto: React.PropTypes.string,
};

export default PostPreview;
