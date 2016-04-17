import React from 'react';

import Container from './../shared/container';
import Section from './../shared/section';
import constants from './../../constants/constants';

const RSVP = () => {
  const {images, emails, rsvp} = constants;
  return (
    <Container
      id="rsvp"
      title="RSVP Now"
      image={images.monkeyKissCartoon}>
      <Section title="">
        <p>
          Please follow the
          <a href={rsvp.link} target="_blank">
            {` link `}
          </a>
          and RSVP by June 30!
        </p>
        <p>
          {'You can also reach us via email: '}
          <a href={emails.chris} target="_top">
            Chris
          </a>
          {' | '}
          <a href={emails.monika} target="_top">
            Monika
          </a>
        </p>
      </Section>
    </Container>
  );
};

export default RSVP;
