import React from 'react';
import { DiNodejsSmall, DiReact, DiUnitySmall } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <SectionTitle main>Technologies</SectionTitle>
    <SectionText>
      I have experience using a range for technologies vital for web development both in front-end and back-end.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with
            <li>React.js</li>
            <li>BootStrap</li>
            <li>MaterialsUI</li>
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiNodejsSmall size="3rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with
            <li>Node.js</li>
            <li>Express</li>
            <li>MongoDB</li>
            <li>SQLite</li>
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiUnitySmall size="3rem" />
        <ListContainer>
          <ListTitle>Game Dev</ListTitle>
          <ListParagraph>
            Experience with
            <li>Unity</li>
            <li>Love Lua</li>
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
