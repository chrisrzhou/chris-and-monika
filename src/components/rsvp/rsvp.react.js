import React from 'react';
import { Link } from 'react-router';

import LoremIpsum from './../shared/lorem-ipsum.react.js';
import Section from './../shared/section.react.js';
import './../shared/shared.less';

export default () => {
  return (
		<div className="container">
      <h1>RSVP Now</h1>
      <Section>
        <h2>Form</h2>
        <LoremIpsum />
      </Section>
      <Section>
        <h2>Contact Us</h2>
        {'Email either '}
        <Link to="mailto:christopher.r.zhou@gmail.com" target="_top">
          Chris
        </Link>
        {' or '}
        <Link to="mailto:monikasun88@gmail.com" target="_top">
          Monika
        </Link>
      </Section>
    </div>
  );
};
