import React from 'react';

import Container from './../shared/container';
import LoremIpsum from './../shared/lorem-ipsum';
import Section from './../shared/section';
import constants from './../../constants/constants';

const About = () => {
  const {images} = constants;
  return (
    <Container
      id="about"
      title="About Us"
      image={images.monkeyKissCartoon}>
      <Section title="How We Met">
        <LoremIpsum />
      </Section>
      <Section title="Propasal">
        <LoremIpsum />
      </Section>
      <Section title="What's Next?">
        <LoremIpsum />
      </Section>
    </Container>
  );
};

export default About;
