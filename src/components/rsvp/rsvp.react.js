import React from 'react';

import LoremIpsum from './../shared/lorem-ipsum.react.js';
import Section from './../shared/section.react.js';
import './../shared/shared.less';

const RSVP = () => {
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
        <a href="mailto:christopher.r.zhou@gmail.com" target="_top">
          Chris
        </a>
        {' or '}
        <a href="mailto:monikasun88@gmail.com" target="_top">
          Monika
        </a>
      </Section>
    </div>
  );
};

export default RSVP;
