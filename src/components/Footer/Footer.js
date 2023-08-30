import React from 'react';
import { AiFillCode, AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
<FooterWrapper>
  <LinkList>
   <LinkColumn>
     <LinkTitle>Email</LinkTitle>
     <LinkItem href="mailto:dugar6661@gmail.com">dugar6661@gmail.com</LinkItem>
   </LinkColumn>
  </LinkList>
  <SocialIconsContainer>
    <CompanyContainer>
      <Slogan>
        Learning should be a lifelong process
      </Slogan>
    </CompanyContainer>
    <SocialContainer>
    <SocialIcons href="https://github.com/Dugarji">
          <AiFillGithub size="3rem"/>
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/vineet-dugar-6615b7155/">
          <AiFillLinkedin size="3rem"/>
        </SocialIcons>
        <SocialIcons href="https://auth.geeksforgeeks.org/user/dugar6661/practice">
          <AiFillCode size="3rem"/>
        </SocialIcons>
        </SocialContainer>
  </SocialIconsContainer>
</FooterWrapper>
  );
};

export default Footer;
