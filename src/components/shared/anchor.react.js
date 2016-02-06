import React, { PropTypes } from 'react';

import './shared.less';

const Anchor = (props) => {
  const { id } = props;
  return (
    <span className="anchor" id={id}>
    </span>
  );
};

Anchor.propTypes = {
  id: PropTypes.string,
};

export default Anchor;
