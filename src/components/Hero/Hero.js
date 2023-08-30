import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br/>
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
      Enthusiastic about technology, I am a curious explorer of the digital realm. With a passion for innovation, I embrace the ever-evolving landscape, eager to unravel its complexities. From coding to AI, I thrive on understanding how things work and envision their potential. My journey is one of continuous learning, driven by the desire to contribute to and shape the future through tech
      </SectionText>
      <Button onClick={()=>window.location="https://www.linkedin.com/in/vineet-dugar-6615b7155/"}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;