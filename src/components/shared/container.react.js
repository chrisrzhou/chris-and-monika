import React, { PropTypes } from 'react';

const Container = (props) => {
  const { children } = props;
  return (
    <div className="container">
      {children}
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.any,
};

export default Container;
