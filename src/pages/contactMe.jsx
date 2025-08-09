import React from 'react';
import { contactDetails } from '../data/allDetails';
import styled from 'styled-components';
import { theme } from '../styles/theme';

import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { FaMapMarkerAlt, FaPhone } from "react-icons/fa";

const FooterContainer = styled.footer`
  background: linear-gradient(135deg, ${theme.colors.neutral[900]} 0%, ${theme.colors.neutral[800]} 100%);
  color: ${theme.colors.neutral[100]};
  padding: ${theme.spacing['3xl']} ${theme.spacing.lg} ${theme.spacing.xl};
  margin-top: auto;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: ${theme.spacing.xl};
  
  @media (min-width: ${theme.breakpoints.md}) {
    grid-template-columns: 1fr 1fr;
  }
  
  @media (min-width: ${theme.breakpoints.lg}) {
    grid-template-columns: 2fr 1fr;
  }
`;

const ContactInfo = styled.div`
  h3 {
    color: ${theme.colors.neutral[100]};
    font-size: ${theme.typography.fontSize['2xl']};
    font-weight: ${theme.typography.fontWeight.bold};
    margin-bottom: ${theme.spacing.lg};
    background: linear-gradient(135deg, ${theme.colors.primary[400]}, ${theme.colors.accent[400]});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.md};
  margin-bottom: ${theme.spacing.md};
  color: ${theme.colors.neutral[300]};
  
  .icon {
    color: ${theme.colors.primary[400]};
    font-size: ${theme.typography.fontSize.lg};
    min-width: 20px;
  }
`;

const SocialLinks = styled.div`
  h4 {
    color: ${theme.colors.neutral[100]};
    font-size: ${theme.typography.fontSize.xl};
    font-weight: ${theme.typography.fontWeight.semibold};
    margin-bottom: ${theme.spacing.lg};
  }
`;

const SocialList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${theme.spacing.md};
  
  @media (min-width: ${theme.breakpoints.sm}) {
    grid-template-columns: repeat(4, 1fr);
  }
  
  @media (min-width: ${theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  padding: ${theme.spacing.md};
  background: ${theme.colors.neutral[800]};
  border-radius: ${theme.borderRadius.lg};
  color: ${theme.colors.neutral[300]};
  text-decoration: none;
  transition: all 0.3s ease;
  border: 1px solid ${theme.colors.neutral[700]};
  
  &:hover {
    background: ${theme.colors.neutral[700]};
    color: ${theme.colors.neutral[100]};
    transform: translateY(-2px);
    box-shadow: ${theme.shadows.lg};
    border-color: ${theme.colors.primary[500]};
    
    .icon {
      color: ${theme.colors.primary[400]};
    }
  }
  
  .icon {
    font-size: ${theme.typography.fontSize.xl};
    transition: color 0.3s ease;
  }
  
  span {
    font-weight: ${theme.typography.fontWeight.medium};
    font-size: ${theme.typography.fontSize.sm};
  }
`;

const FooterBottom = styled.div`
  margin-top: ${theme.spacing['2xl']};
  padding-top: ${theme.spacing.xl};
  border-top: 1px solid ${theme.colors.neutral[700]};
  text-align: center;
  color: ${theme.colors.neutral[400]};
  font-size: ${theme.typography.fontSize.sm};
`;

const ContactMe = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <ContactInfo>
          <h3>Get In Touch</h3>
          <ContactItem>
            <FaMapMarkerAlt className="icon" />
            <div>
              <div>{contactDetails.address}</div>
              <div>{contactDetails.city} {contactDetails.pincode}</div>
            </div>
          </ContactItem>
          <ContactItem>
            <FaPhone className="icon" />
            <div>{contactDetails.mobile}</div>
          </ContactItem>
          <ContactItem>
            <BiLogoGmail className="icon" />
            <div>{contactDetails.gmail}</div>
          </ContactItem>
        </ContactInfo>

        <SocialLinks>
          <h4>Connect With Me</h4>
          <SocialList>
            <li>
              <SocialLink href={`mailto:${contactDetails.gmail}`}>
                <BiLogoGmail className="icon" />
                <span>Mail</span>
              </SocialLink>
            </li>
            <li>
              <SocialLink href={contactDetails.linkedIn} target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn className="icon" />
                <span>LinkedIn</span>
              </SocialLink>
            </li>
            <li>
              <SocialLink href={contactDetails.github} target="_blank" rel="noopener noreferrer">
                <FaGithub className="icon" />
                <span>GitHub</span>
              </SocialLink>
            </li>
            <li>
              <SocialLink href={contactDetails.twitter} target="_blank" rel="noopener noreferrer">
                <FaSquareXTwitter className="icon" />
                <span>Twitter</span>
              </SocialLink>
            </li>
          </SocialList>
        </SocialLinks>
      </FooterContent>
      
      <FooterBottom>
        <p>© 2024 Vijay Aadhithya. Built with React & ❤️</p>
      </FooterBottom>
    </FooterContainer>
  );
};

export default ContactMe;
