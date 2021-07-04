import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
        Passionate about coding with keen
        interest in web development. Dedicated with a
        zeal to learn new technologies and grow.
        </SectionText>
        <Button onClick={()=>window.open('https://drive.google.com/file/d/1UMVzHqUomaKREUGDiLQxA5q9vf5_V22k/view',"_blank")}>Resume</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;