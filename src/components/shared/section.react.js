import React, { PropTypes } from 'react';

const Section = (props) => {
  const { title, children } = props;
  return (
    <section className="section">
      <h3>{title}</h3>
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.any,
};

export default Section;
