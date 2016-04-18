import React from 'react';

import Callout from './../shared/callout';
import Container from './../shared/container';
import Section from './../shared/section';

const About = () => {
  return (
    <Container
      id="about"
      title="About Us">
      <Section title="How We Met">
        <p>Monika met chris in college</p>
        <Callout
          person="chris"
          message="asdfasdfds asdfsadfdsasdfasdfasdfsadfasdfasdfasdfasdfasd asldjfklaj kjasdlkfj kljasdklf jlkjsadklf jlksajdflkj lkasjldkf jklaj sdff"
        />
        <Callout
          person="monika"
          message="asdfasdfds asdfsadfdsasdfasdfasdfsadfasdfasdfasdfasdfasd asldjfklaj kjasdlkfj kljasdklf jlkjsadklf jlksajdflkj lkasjldkf jklaj sdff"
        />
      </Section>
      <Section title="Propasal">
        <Callout
          person="monika"
          message="asdfasdfds asdfsadfds"
        />
      </Section>
      <Section title="What's Next?">
        <Callout
          person="chris"
          message="asdfasdfds asdfsadfds"
        />
      </Section>
    </Container>
  );
};

export default About;
