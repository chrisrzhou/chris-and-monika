import React, { PropTypes } from 'react';

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
