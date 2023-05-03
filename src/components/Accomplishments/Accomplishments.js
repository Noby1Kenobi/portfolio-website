import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AccomplishmentsStyles';

import { AccomplishmentData } from '../../constants/constants';

const Accomplishments = () => (
  <Section>
    <SectionDivider />
    <SectionTitle main>Personal Achievements</SectionTitle>
    <Boxes>
      {AccomplishmentData.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.number}+</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Accomplishments;
