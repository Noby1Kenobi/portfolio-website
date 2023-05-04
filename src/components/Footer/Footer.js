import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { FaItchIo } from 'react-icons/fa';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="917-747-0755">917-747-0755</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:nobysemail@gmail.com">nobysemail@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialContainer>
        {/* <CompanyContainer>
          <Slogan>slogan here</Slogan>
        </CompanyContainer> */}
        <SocialIconsContainer>
          <SocialIcons href="https://github.com/Noby1Kenobi">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/nobutora-iyoda-6581a7128/">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://nobi1kenobi.itch.io/">
            <FaItchIo size="3rem" />
          </SocialIcons>
        </SocialIconsContainer>
      </SocialContainer>
    </FooterWrapper>
  );
};

export default Footer;
