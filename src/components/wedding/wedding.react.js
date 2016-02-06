import React from 'react';

import Anchor from './../shared/anchor.react';
import LoremIpsum from './../shared/lorem-ipsum.react';
import Section from './../shared/section.react';

const Wedding = () => {
  return (
		<div className="container">
      <Anchor id="wedding" />
      <h1>The Wedding</h1>
      <Section>
        <h2>Event Schedule</h2>
        <LoremIpsum />
      </Section>
      <Section>
        <h2>Directions</h2>
        <LoremIpsum />
      </Section>
      <Section>
        <h2>About Rengstorff House</h2>
        <LoremIpsum />
      </Section>
    </div>
  );
};

export default Wedding;
