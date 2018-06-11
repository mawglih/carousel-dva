import React from 'react';
import POSTER_URL from '../const/PosterUrl';
import styles from './poster.css';

const Poster = ({
  index,
  }) => (
    <div className={styles.poster}>
      <img src={POSTER_URL[index]} alt="poster" />
    </div>
);
export default Poster;