import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () => (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
    Throughout my experience in web development, I have gained proficiency in a diverse set of technologies, spanning from Front-end to Back-end.
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiReact size="3rem"></DiReact>
        </picture>
        <ListContainer>
          <ListTitle>Front-end</ListTitle>
          <ListParagraph>
            Experiece with <br />
            React.js, HTML and CSS
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiReact size="3rem"></DiReact>
        </picture>
        <ListContainer>
          <ListTitle>Back-end</ListTitle>
          <ListParagraph>
            Experience with <br />
            Express.js, Node.js, MongoDB and SQL databases ,Redux.js.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiReact size="3rem"></DiReact>
        </picture>
        <ListContainer>
          <ListTitle>Version Control</ListTitle>
          <ListParagraph>
            Experience with <br />
            Git, managing branches and merging code seamlessly
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiReact size="3rem"></DiReact>
        </picture>
        <ListContainer>
          <ListTitle>Tools</ListTitle>
          <ListParagraph>
            Experience with <br />
            tools like Postman, Vs code IDE
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
