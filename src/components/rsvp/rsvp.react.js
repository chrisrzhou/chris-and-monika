import React, {PropTypes} from 'react';

import Container from './../shared/container.react';
import Section from './../shared/section.react';

const RSVP = (props) => {
  const {rsvp, email} = props;
  return (
    <Container
      id="rsvp"
      title="RSVP Now"
      image={rsvp.imageHero}>
      <Section title="">
        <p>
          Please follow the
          <a href={rsvp.rsvpLink} target="_blank">
            {` link `}
          </a>
          and RSVP by June 30!
        </p>
        <p>
          {'You can also reach us via email: '}
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
