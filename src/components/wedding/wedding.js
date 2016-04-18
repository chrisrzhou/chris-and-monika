import React from 'react';

import Container from './../shared/container';
import Directions from './directions';
import Image from './../shared/image';
import Section from './../shared/section';
import constants from './../../constants/constants';

const {images, links} = constants;

const Wedding = () => {
  return (
    <Container
      id="wedding"
      title="The Wedding">
      <Section title="Event Schedule">
        <div className="section-subtitle">
          <p>Friday, September 30, 2016</p>
          <p>The Rengstorff House</p>
          <p>3070 N Shoreline Blvd, Mountain View, CA 94043</p>
        </div>
        <Image
          src={images.rengstorffHouse}
          href={links.directions}
        />
        <p>
          <label>Wedding Ceremony & Reception: </label>
          5:00pm
        </p>
        <p>
          <label>Buffet Dinner: </label>
          7:00pm
        </p>
        <p>
          <label>Cake (is not a lie!): </label>
          7:30pm
        </p>
        <p>
          <label>More Partying & Fun until 10:00pm!</label>
        </p>
      </Section>
      <Section title="Directions">
        <div className="section-subtitle">
          <p>The Rengstorff House</p>
          <p>3070 N Shoreline Blvd, Mountain View, CA 94043</p>
        </div>
        <Directions />
      </Section>
      <Section title="About the Rengstorff House">
        <Image
          src={images.rengstorffHouse2}
          href={links.rengstorffHouse}
        />
        <p>
          <a href={links.rengstorffHouse} target="_blank">
            The Rengstorff House
          </a>
          {' '} is one of Mountain View’s oldest house and finest examples of
          Victorian Italianate architecture on the West Coast.
        </p>
        <p>
          We really liked the house and its vicinity to Shoreline Park.  We
          recommend our family and friends to enjoy a nice Californian sunset
          walk before and after the wedding!
        </p>
        <Image
          src={images.shorelinePark}
          href={links.shorelinePark}
        />
        <p>
          <a href={links.shorelinePark} target="_blank">
          Shoreline Park
          </a>
          {' '} is a 750-acre wildlife and recreation area with a beautiful
          view of the mountains to the west and east across the Bay.
        </p>
        <p>
          We look forward to seeing all of you at the wedding and hopefully
          spending time walking under the sunset by the house and lake!
        </p>
      </Section>
    </Container>
  );
};

export default Wedding;
