import React, {PropTypes} from 'react';

import Anchor from './../shared/anchor';

const Container = (props) => {
  const {id, title, children} = props;
  const titleElement = title
    ? <h2 className="container-title">{title}</h2>
    : null;
  return (
    <div className="container">
      <Anchor id={id} />
      {titleElement}
      {children}
    </div>
  );
};

Container.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string,
  children: PropTypes.any,
};

export default Container;
