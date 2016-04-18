import React from 'react';

import Container from './../shared/container';
import Image from './../shared/image';
import constants from './../../constants/constants';

const RSVP = () => {
  const {images, links} = constants;
  return (
    <Container
      id="registry"
      title="Wedding Registry">
      <Image
        src={images.amazonRegistry}
        href={links.amazonRegistry}
        width="200"
      />
    </Container>
  );
};

export default RSVP;
