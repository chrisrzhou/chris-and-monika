import React, {PropTypes} from 'react';

import Container from './../shared/container.react';
import Image from './../shared/image.react';

const Home = (props) => {
  const {home} = props;
  return (
    <Container id="home">
      <div className="home-hero">
        <Image src={home.imageHero} />
        <h1 className="home-title">
          Chris and Monika
        </h1>
        <div className="home-subtitle">
          <p>Rengstorff House, Mountain View, CA</p>
          <p>4.00pm September 30, 2016</p>
        </div>
      </div>
    </Container>
  );
};

Home.propTypes = {
  home: PropTypes.object.isRequired,
};

export default Home;
