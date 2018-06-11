import React from 'react';
import styles from './arrow.css';

const Arrow = ({
  direction,
  click,
  arrowColor,
}) => (
  <div onClick={click} role="button">
    <button className={styles.button} />
    <div className={styles[direction]} />
  </div>
);
export default Arrow;