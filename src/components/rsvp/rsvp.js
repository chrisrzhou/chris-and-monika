import React from 'react';

import Container from './../shared/container';
import Image from './../shared/image';
import Section from './../shared/section';
import constants from './../../constants/constants';

const {images, emails, links, social} = constants;

const RSVP = () => {
  return (
    <Container
      id="rsvp"
      title="RSVP">
      <Section title="">
        <p>
          Please follow the
          <a href={links.rsvp} target="_blank">
            {` link `}
          </a>
          and RSVP by <strong>June 30</strong>!
        </p>
        <Image
          src={images.ring}
          href={links.rsvp}
        />
        <p>
          Follow updates on our wedding event on {' '}
          <a href={social.facebook} target="_blank">Facebook</a>!
        </p>
        <p>
          You can also contact us via email:
        </p>
        <ul>
          <li>
            <a href={emails.chris} target="_top">Chris</a>
          </li>
          <li>
            <a href={emails.monika} target="_top">Monika</a>
          </li>
        </ul>
      </Section>
    </Container>
  );
};

export default RSVP;
