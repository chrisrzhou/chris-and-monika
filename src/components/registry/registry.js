import React from 'react';

import Container from './../shared/container';
import Image from './../shared/image';
import constants from './../../constants/constants';

const {images, links} = constants;

const RSVP = () => {
  return (
    <Container
      id="registry"
      title="Wedding Registry">
      <Image
        src={images.amazonRegistry}
        href={links.amazonRegistry}
        width="200"
      />
      <p className="text-center">
        We greatly appreciate any gifts and contributions!
      </p>
    </Container>
  );
};

export default RSVP;
