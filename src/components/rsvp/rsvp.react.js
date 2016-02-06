import React from 'react';

import Anchor from './../shared/anchor.react';
import LoremIpsum from './../shared/lorem-ipsum.react';
import Section from './../shared/section.react';

const RSVP = () => {
  return (
		<div className="container">
      <Anchor id="rsvp" />
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
