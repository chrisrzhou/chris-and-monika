import React from 'react';

import Anchor from './../shared/anchor.react';
import LoremIpsum from './../shared/lorem-ipsum.react';
import Section from './../shared/section.react';

export default () => {
  return (
		<div className="container">
      <Anchor id="about" />
      <h1>About Us</h1>
      <Section>
        <h2>How We Met</h2>
        <LoremIpsum />
      </Section>
      <Section>
        <h2>Proposal</h2>
        <LoremIpsum />
      </Section>
      <Section>
        <h2>The Future</h2>
        <LoremIpsum />
      </Section>
    </div>
  );
};
