import React, { PropTypes } from 'react';

import Anchor from './../shared/anchor.react';
import Image from './../shared/image.react';

const Container = (props) => {
  const { id, title, image, children } = props;
  return (
    <div className="container">
      <Anchor id={id} />
      {
        title
          ? <h2>{title}</h2>
          : null
      }
      {
        image
          ? <Image src={image} height="150px" width="auto" />
          : null
      }
      {children}
    </div>
  );
};

Container.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  children: PropTypes.any,
};

export default Container;
