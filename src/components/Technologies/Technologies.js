import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider/>
    <SectionTitle>Technologies</SectionTitle>  
    <SectionText>
      MERN Stack, threejs, core java
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem"/>
        <ListContainer>
          <ListTitle>
            Front-End
          </ListTitle>
          <ListParagraph>
            Experience with <br/>
            Reactjs,Nextjs,html,css,javascript
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem"/>
        <ListContainer>
          <ListTitle>
            Back-End
          </ListTitle>
          <ListParagraph>
            Experience with <br/>
            Nodejs and MongoDb,springboot
          </ListParagraph>
        </ListContainer>
      </ListItem>  <ListItem>
        <DiZend size="3rem"/>
        <ListContainer>
          <ListTitle>
            Deployment
          </ListTitle>
          <ListParagraph>
            Experience with <br/>
            Github pages , Vercel and render
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
