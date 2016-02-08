import React from 'react';

import Container from './../shared/container.react';
import HomeHero from './home-hero.react';

const Home = (props) => {
  return (
    <Container id="home">
      <HomeHero {...props} />
    </Container>
  );
};

export default Home;
