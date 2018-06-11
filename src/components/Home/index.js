import React, { Component } from 'react';
import Carousel from '../Carousel';
import Poster from '../Poster';
import styles from './Home.css'


class Home extends Component {
  render() {
    return (
      <div className={styles.App}>
        <Carousel arrowColor="green" length={10} text="Carousel">
            <Poster/>
        </Carousel>
      </div>
    );
  }
}
export default Home;