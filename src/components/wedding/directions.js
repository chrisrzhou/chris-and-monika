import React from 'react';

import constants from './../../constants/constants';

const Directions = () => {
  const {links} = constants;
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
