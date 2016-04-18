import React from 'react';

import constants from './../../constants/constants';

const {links} = constants;

const Directions = () => {
  return (
    <iframe
      width="600"
      height="450"
      src={links.googleMapsEmbed}
      style={{border: 0}}
    />
  );
};

export default Directions;
