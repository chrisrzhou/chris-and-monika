import React, { PropTypes } from 'react';

const Main = (props) => {
  return (
    <div>
      {props.children}
    </div>
  );
};

Main.propTypes = {
  children: PropTypes.any.isRequired,
};

export default Main;
