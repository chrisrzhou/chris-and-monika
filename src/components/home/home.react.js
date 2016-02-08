import React from 'react';

import Anchor from './../shared/anchor.react';
import Container from './../shared/container.react';
import HomeHero from './home-hero.react';

const Home = (props) => {
  return (
    <Container>
      <Anchor id="home" />
      <HomeHero {...props} />
    </Container>
  );
};

export default Home;
