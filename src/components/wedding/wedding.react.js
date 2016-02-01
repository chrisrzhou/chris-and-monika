import React from 'react';

import LoremIpsum from './../shared/lorem-ipsum.react.js';
import Section from './../shared/section.react.js';
import './../shared/shared.less';

export default () => {
  return (
		<div className="container">
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
