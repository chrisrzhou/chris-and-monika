import React from 'react';

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
        <LoremIpsum />
      </Section>
    </div>
  );
};
