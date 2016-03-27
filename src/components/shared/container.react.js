import React, {PropTypes} from 'react';

import Anchor from './../shared/anchor.react';
import Image from './../shared/image.react';

const Container = (props) => {
  const {id, title, image, children} = props;
  const titleElement = title
    ? <h2 className="container-title">{title}</h2>
    : null;
  const imageElement = image
    ? <Image src={image} height="150px" width="auto" />
    : null;

  return (
    <div className="container">
      <Anchor id={id} />
      {titleElement}
      {imageElement}
      {children}
    </div>
  );
};

Container.propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.any,
};

export default Container;
