import React from 'react';

import Container from './../shared/container';
import Image from './../shared/image';
import constants from './../../constants/constants';

const {images} = constants;

const Home = () => {
  return (
    <Container id="home">
      <div className="home-hero">
        <h1 className="home-title">
          Chris and Monika
        </h1>
        <Image src={images.mainCouple} />
        <div className="home-subtitle">
          <p>The Rengstorff House, Mountain View, CA</p>
          <p>4.00pm September 30, 2016</p>
        </div>
      </div>
    </Container>
  );
};

export default Home;
