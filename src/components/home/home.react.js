import React from 'react';
import { Parallax } from 'react-parallax';

import HomeHero from './home-hero.react';
import LoremIpsum from './../shared/lorem-ipsum.react';
import Section from './../shared/section.react';
import './home.less';
import './../shared/shared.less';

export default () => {
  return (
		<div>
      <HomeHero />
      <Parallax bgImage="http://pics4.city-data.com/cpicc/cfiles42452.jpg">
        <div className="parallax-content-left">
          <Section>
            <h2>Welcome</h2>
            <LoremIpsum />
          </Section>
        </div>
      </Parallax>
      <Parallax bgImage="http://pics4.city-data.com/cpicc/cfiles42452.jpg">
        <div className="parallax-content-right">
          <Section>
            <h2>Venue</h2>
            <LoremIpsum />
          </Section>
        </div>
      </Parallax>
      <Parallax bgImage="http://pics4.city-data.com/cpicc/cfiles42452.jpg">
        <div className="parallax-content-left">
          <Section>
            <h2>RSVP</h2>
            <LoremIpsum />
          </Section>
        </div>
      </Parallax>
    </div>
  );
};
