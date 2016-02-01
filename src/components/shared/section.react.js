import React, { PropTypes } from 'react';

import './shared.less';

const Section = (props) => {
  const { style, children } = props;
  return (
    <section className="section" style={style}>
      {children}
    </section>
  );
};

Section.propTypes = {
  style: PropTypes.object,
  children: PropTypes.any,
};

export default Section;
