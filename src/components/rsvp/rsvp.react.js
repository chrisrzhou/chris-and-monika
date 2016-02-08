import React, { PropTypes } from 'react';

import Container from './../shared/container.react';
import LoremIpsum from './../shared/lorem-ipsum.react';
import Section from './../shared/section.react';

const RSVP = (props) => {
  const { rsvp, email } = props;
  return (
    <Container
      id="rsvp"
      title="RSVP Now"
      image={rsvp.imageHero}
    >
      <Section title="Form">
        <LoremIpsum />
      </Section>
      <Section title="Email Us">
        <p>
          {'You can also reach us via email: '}
        </p>
        <p>
          <a href={email.chris} target="_top">
            Chris
          </a>
          {' | '}
          <a href={email.monika} target="_top">
            Monika
          </a>
        </p>
      </Section>
    </Container>
  );
};

RSVP.propTypes = {
  rsvp: PropTypes.object.isRequired,
  email: PropTypes.object.isRequired,
};

export default RSVP;
