import React, { PropTypes } from 'react';

import Image from './../shared/image.react';

const HomeHero = (props) => {
  return (
		<div className="home-hero">
      <Image src={props.app.images.homeHero} />
      <h1>Chris and Monika</h1>
      <p>Rengstorff House, Mountain View, CA</p>
      <p>4:00pm September 30, 2016</p>
    </div>
  );
};

HomeHero.propTypes = {
  app: PropTypes.object,
};

export default HomeHero;
