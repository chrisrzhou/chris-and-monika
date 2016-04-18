import React from 'react';

import Callout from './../shared/callout';
import Container from './../shared/container';
import Image from './../shared/image';
import Section from './../shared/section';
import constants from './../../constants/constants';

const {images} = constants;

const About = () => {
  return (
    <Container
      id="about"
      title="About Us">
      <Section title="How We Met">
        <div className="section-subtitle">
          <p>This was how our story was truthly told...</p>
        </div>
        <div className="narrator">
          <p>
            Monika and Chris first met in the <strong>same</strong> orientation
            group at Jones College, Rice University in Aug 2006.
          </p>
        </div>
        <Callout
          person="monika"
          message="This kid is skinny and awkward."
        />
        <Callout
          person="monika"
          message="He has a weird accent too..."
        />
        <div className="narrator">
          <p>
            Monika and Chris did not interact much during their college years,
            and exchanged very little conversations during those four years.
          </p>
        </div>
        <Callout
          person="chris"
          message={"How's it going?"}
        />
        <Callout
          person="monika"
          message={"Good, how's it going?"}
        />
        <div className="narrator">
          <p>
            So the wonderful college years were over and Monika went to pursue
            further studies at Baylor while Chris started his first job at NRG.
            Chris and Monika reconnected and got to know each other better
            through a mutual love of video games.
          </p>
        </div>
        <Callout
          person="monika"
          message="Watch out for the boss! AOE! AOE!"
        />
        <Callout
          person="chris"
          message="*dies to AOE*"
        />
        <Callout
          person="monika"
          message="Noob..."
        />
        <Callout
          person="chris"
          message="You are falling asleep and walking into the wall."
        />
        <Callout
          person="monika"
          message="I'm wide awake! *walks into wall for the next 5 minutes*"
        />
        <Callout
          person="chris"
          message="<3"
        />
        <Callout
          person="monika"
          message="<3"
        />
        <div className="narrator">
          <p>
            Chris and Monika got to know each other better and started hanging
            out in <strong>REAL</strong> life and realized they enjoyed doing
            a lot of other things outside of the Blizzard universe too! e.g.
          </p>
          <ul>
            <li>eating spicy food and noodles</li>
            <li>programming</li>
            <li>derping and trolling</li>
            <li>monkeys and cats</li>
            <li>being on the right frequency on life values :)</li>
          </ul>
          <p>
            Occassionally Monika finds Chris annoying (picture below), but
            their lives have been mostly happy moments than upsetting ones :)
          </p>
        </div>
        <Image src={images.happyAngry} />
      </Section>
      <Section title="Propasal">
        <div className="section-subtitle">
          August 8, 2014
        </div>
        <Callout
          person="chris"
          message="This is an unidentified quest item for you! (WoW reference)"
        />
        <Callout
          person="monika"
          message="*opens it up*"
        />
        <Callout
          person="chris"
          message="Will you marry me?"
        />
        <Callout
          person="monika"
          message="Yes! (cries)"
        />
        <Image src={images.ring} />
        <Callout
          person="chris"
          message="*Achievement Unlocked: Proposed to Monika*"
        />
      </Section>
      <Section title="What's Next?">
        <div className="section-subtitle">
          <p>
            Doing things together, and keeping each other positive and happy :)
          </p>
        </div>
        <Image src={images.monkeyKiss} />
        <Callout
          person="chris"
          message={
            "Continue to learn and build fun projects in Javascript!"
          }
        />
        <Callout
          person="monika"
          message={
            "Completing my PhD and joining Chris + cats in the Bay Area!"
          }
        />
      </Section>
    </Container>
  );
};

export default About;
