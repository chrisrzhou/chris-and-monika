import React, { PropTypes } from 'react';

import Image from './../shared/image.react';

const HomeHero = (props) => {
  const { home } = props;
  return (
		<div className="home-hero">
      <Image src={home.imageHero} />
      <h1>Chris and Monika</h1>
      <p>Rengstorff House, Mountain View, CA</p>
      <p>4:00pm September 30, 2016</p>
    </div>
  );
};

HomeHero.propTypes = {
  home: PropTypes.object.isRequired,
};

export default HomeHero;
