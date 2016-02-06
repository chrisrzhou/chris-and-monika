import React from 'react';

import HomeHero from './home-hero.react';
import LoremIpsum from './../shared/lorem-ipsum.react';
import Section from './../shared/section.react';
import './home.less';
import './../shared/shared.less';

const Home = () => {
  return (
		<div>
      <HomeHero />
      <div className="parallax-content-left">
        <Section>
          <h2>Welcome</h2>
          <LoremIpsum />
        </Section>
      </div>
      <div className="parallax-content-right">
        <Section>
          <h2>Venue</h2>
          <LoremIpsum />
        </Section>
      </div>
      <div className="parallax-content-left">
        <Section>
          <h2>RSVP</h2>
          <LoremIpsum />
        </Section>
      </div>
    </div>
  );
};

export default Home;
