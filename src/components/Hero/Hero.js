import React from 'react';
import Link from 'next/link';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Nobutora Iyoda
      </SectionTitle>
      <SectionText>
        Aspiring Software Developer / Full-Stack Web Developer and Game Developer
      </SectionText>
      <Link href="#about"><Button>Learn More</Button></Link>
    </LeftSection>
  </Section>
);

export default Hero;