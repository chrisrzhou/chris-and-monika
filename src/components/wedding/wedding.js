import React from 'react';

import Container from './../shared/container';
import Directions from './directions';
import Image from './../shared/image';
import Section from './../shared/section';
import constants from './../../constants/constants';

const {images, links} = constants;
const {hotels} = links;

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
          6:30pm at {' '}
          <a target="_blank" href={links.michaels}>
            Michael's at Shoreline
          </a>
        </p>
        <p>
          <label>Cake cutting: </label>
          Not a lie!
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
      <Section title="Staying Overnight?">
        <p>Recommended areas to stay over</p>
        <ul>
          <li>
            <a target="_blank" href={hotels.zenHotel}>The Zen Hotel</a>
          </li>
          <li>
            <a target="_blank" href={hotels.ramada}>Ramada Mountain View</a>
          </li>
          <li>
            <a target="_blank" href={hotels.comfortInn}>Comfort Inn</a>
          </li>
        </ul>
        <p>Also check out Google and Airbnb for cheaper and custom listings:</p>
        <ul>
          <li>
            <a target="_blank" href={hotels.googleMaps}>Google</a>
          </li>
          <li>
            <a target="_blank" href={hotels.airbnb}>Airbnb</a>
          </li>
        </ul>
        <p>
          There are many places to visit in Bay Area if you are planning
          for an extended stay.  Here are some convenient places nearby for
          food and dining:
        </p>
        <ul>
          <li>
            <a target="_blank" href={links.castro}>
              Castro Street, Mountain View
            </a>
          </li>
          <li>
            <a target="_blank" href={links.stanfordShopping}>
              Stanford Shopping Center, Palo Alto
            </a>
          </li>
        </ul>
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
          {' '} is one of Mountain View's oldest house and finest examples of
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
