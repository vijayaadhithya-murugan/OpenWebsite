import React from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { theme } from '../styles/theme';
import { 
  PageContainer, 
  SectionContainer, 
  FlexContainer, 
  Button 
} from '../components/StyledComponents';

// Animations
const fadeInUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const float = keyframes`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
`;

// Styled Components
const HeroSection = styled.div`
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: linear-gradient(135deg, ${theme.colors.primary[50]} 0%, ${theme.colors.accent[50]} 100%);
`;

const HeroContent = styled.div`
  max-width: 800px;
  padding: ${theme.spacing['2xl']};
`;

const Greeting = styled.h2`
  font-size: ${theme.typography.fontSize.xl};
  color: ${theme.colors.primary[600]};
  font-weight: ${theme.typography.fontWeight.medium};
  margin-bottom: ${theme.spacing.md};
  animation: ${fadeInUp} 0.8s ease-out;
`;

const Name = styled.h1`
  font-size: ${theme.typography.fontSize['5xl']};
  font-weight: ${theme.typography.fontWeight.bold};
  background: linear-gradient(135deg, ${theme.colors.primary[600]}, ${theme.colors.accent[600]});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: ${theme.spacing.lg};
  animation: ${fadeInUp} 0.8s ease-out 0.2s both;
  
  @media (max-width: ${theme.breakpoints.md}) {
    font-size: ${theme.typography.fontSize['3xl']};
  }
`;

const Title = styled.h3`
  font-size: ${theme.typography.fontSize['2xl']};
  color: ${theme.colors.neutral[700]};
  font-weight: ${theme.typography.fontWeight.medium};
  margin-bottom: ${theme.spacing.xl};
  animation: ${fadeInUp} 0.8s ease-out 0.4s both;
  
  @media (max-width: ${theme.breakpoints.md}) {
    font-size: ${theme.typography.fontSize.xl};
  }
`;

const Description = styled.p`
  font-size: ${theme.typography.fontSize.lg};
  color: ${theme.colors.neutral[600]};
  line-height: ${theme.typography.lineHeight.relaxed};
  margin-bottom: ${theme.spacing['2xl']};
  animation: ${fadeInUp} 0.8s ease-out 0.6s both;
`;

const CTAButtons = styled.div`
  display: flex;
  gap: ${theme.spacing.lg};
  justify-content: center;
  flex-wrap: wrap;
  animation: ${fadeInUp} 0.8s ease-out 0.8s both;
`;

const PrimaryButton = styled(Button)`
  padding: ${theme.spacing.md} ${theme.spacing['2xl']};
  font-size: ${theme.typography.fontSize.lg};
  background: linear-gradient(135deg, ${theme.colors.primary[500]}, ${theme.colors.primary[600]});
  border: none;
  color: white;
  
  &:hover {
    background: linear-gradient(135deg, ${theme.colors.primary[600]}, ${theme.colors.primary[700]});
    transform: translateY(-3px);
    box-shadow: ${theme.shadows.lg};
  }
`;

const SecondaryButton = styled(Button)`
  padding: ${theme.spacing.md} ${theme.spacing['2xl']};
  font-size: ${theme.typography.fontSize.lg};
  background: transparent;
  border: 2px solid ${theme.colors.primary[500]};
  color: ${theme.colors.primary[600]};
  
  &:hover {
    background: ${theme.colors.primary[500]};
    color: white;
    transform: translateY(-3px);
    box-shadow: ${theme.shadows.lg};
  }
`;

const FloatingEmoji = styled.div`
  font-size: 2rem;
  animation: ${float} 3s ease-in-out infinite;
  margin: 0 ${theme.spacing.sm};
  display: inline-block;
`;

const HighlightSection = styled.div`
  background: white;
  padding: ${theme.spacing['3xl']} ${theme.spacing.lg};
  margin-top: ${theme.spacing['2xl']};
`;

const HighlightGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${theme.spacing.xl};
  max-width: 1000px;
  margin: 0 auto;
  
  @media (min-width: ${theme.breakpoints.md}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const HighlightCard = styled.div`
  text-align: center;
  padding: ${theme.spacing.xl};
  border-radius: ${theme.borderRadius.xl};
  background: ${theme.colors.neutral[50]};
  border: 1px solid ${theme.colors.neutral[200]};
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${theme.shadows.lg};
    border-color: ${theme.colors.primary[300]};
  }
  
  .icon {
    font-size: 3rem;
    margin-bottom: ${theme.spacing.md};
  }
  
  h4 {
    color: ${theme.colors.neutral[800]};
    font-size: ${theme.typography.fontSize.lg};
    font-weight: ${theme.typography.fontWeight.semibold};
    margin-bottom: ${theme.spacing.sm};
  }
  
  p {
    color: ${theme.colors.neutral[600]};
    font-size: ${theme.typography.fontSize.base};
  }
`;

const Home = () => {
  return (
    <>
      <HeroSection>
        <HeroContent>
          <Greeting>Hello, I'm</Greeting>
          <Name>Vijay Aadhithya</Name>
          <Title>
            Full Stack Developer <FloatingEmoji>🚀</FloatingEmoji>
          </Title>
          <Description>
            Passionate about creating innovative web applications with the MERN stack. 
            Currently building scalable solutions at Ramco Systems Limited and exploring 
            the latest in web technologies.
          </Description>
          <CTAButtons>
            <Link to="/experience" style={{ textDecoration: 'none' }}>
              <PrimaryButton>View My Work</PrimaryButton>
            </Link>
            <Link to="/about" style={{ textDecoration: 'none' }}>
              <SecondaryButton>About Me</SecondaryButton>
            </Link>
          </CTAButtons>
        </HeroContent>
      </HeroSection>

      <HighlightSection>
        <SectionContainer>
          <HighlightGrid>
            <HighlightCard>
              <div className="icon">💻</div>
              <h4>Full Stack Development</h4>
              <p>Expert in MERN stack with experience in building scalable web applications</p>
            </HighlightCard>
            <HighlightCard>
              <div className="icon">🏢</div>
              <h4>Enterprise Experience</h4>
              <p>1+ years at Ramco Systems Limited working on enterprise-level projects</p>
            </HighlightCard>
            <HighlightCard>
              <div className="icon">🌱</div>
              <h4>Continuous Learning</h4>
              <p>Always exploring new technologies like Docker, Elasticsearch, and Python automation</p>
            </HighlightCard>
          </HighlightGrid>
        </SectionContainer>
      </HighlightSection>
    </>
  );
};

export default Home;
