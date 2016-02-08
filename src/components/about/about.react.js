import React, { PropTypes } from 'react';

import Container from './../shared/container.react';
import LoremIpsum from './../shared/lorem-ipsum.react';
import Section from './../shared/section.react';

const About = (props) => {
  const { about } = props;
  return (
    <Container
      id="about"
      title="About Us"
      image={about.imageHero}
    >
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

About.propTypes = {
  about: PropTypes.object.isRequired,
};

export default About;
