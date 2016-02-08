import React, { PropTypes } from 'react';

const Anchor = (props) => {
  const { id } = props;
  return (
    <span
      className="anchor"
      id={id}
    />
  );
};

Anchor.propTypes = {
  id: PropTypes.string,
};

export default Anchor;
