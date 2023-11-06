import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi, I'm Shivam Batham<tr></tr> Welcome To <br />
        My Personal Portfolio!
      </SectionTitle>
      <SectionText>
        I am self tought developer with a strong background in JavaScript,
        C++, React.js, Express.js, CSS, MongoDB, Node.js, Git.
       Skilled in designing and implementing and passion for creating dynamic online experience.
      
      </SectionText>
      <Button onClick={() => (window.location = "https://google.com ")}>
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;