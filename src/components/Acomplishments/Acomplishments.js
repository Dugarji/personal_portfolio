import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 200, text: 'solved gfg problems'},
  { number: 2, text: 'helping my friend optimizing the code', },
  
 
];

const Acomplishments = () => (
<Section>
  <SectionTitle>Personal Accomplishments</SectionTitle>
  <Boxes>
    {data.map((card,index)=>(
      <Box key={index}>
        <BoxNum>{card.number}+</BoxNum>
        <BoxText>{card.text}</BoxText>
      </Box>
    )
    )}
  </Boxes>
</Section>
);

export default Acomplishments;
