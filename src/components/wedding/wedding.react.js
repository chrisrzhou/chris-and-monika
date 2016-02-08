import React, { PropTypes } from 'react';

import Container from './../shared/container.react';
import LoremIpsum from './../shared/lorem-ipsum.react';
import Section from './../shared/section.react';

const Wedding = (props) => {
  const { wedding } = props;
  return (
    <Container
      id="wedding"
      title="The Wedding"
      image={wedding.imageHero}
    >
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

Wedding.propTypes = {
  wedding: PropTypes.object.isRequired,
};

export default Wedding;
