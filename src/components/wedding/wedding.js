import React from 'react';

import Container from './../shared/container';
import LoremIpsum from './../shared/lorem-ipsum';
import Section from './../shared/section';
import constants from './../../constants/constants';

const Wedding = () => {
  const {images} = constants;
  return (
    <Container
      id="wedding"
      title="The Wedding"
      image={images.monkeyKissCartoon}>
      <Section title="Event Schedule">
        <LoremIpsum />
      </Section>
      <Section title="Directions">
        <LoremIpsum />
      </Section>
      <Section title="About Rengstorff House">
        <LoremIpsum />
      </Section>
    </Container>
  );
};

export default Wedding;
