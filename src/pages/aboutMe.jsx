import React from 'react';
import styled from 'styled-components';
import { theme } from '../styles/theme';
import { 
  PageContainer, 
  SectionContainer, 
  PageTitle, 
  Card, 
  CardTitle, 
  CardText,
  FlexContainer,
  Badge
} from '../components/StyledComponents';

const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${theme.spacing.xl};
  
  @media (min-width: ${theme.breakpoints.lg}) {
    grid-template-columns: 1fr 1fr;
  }
`;

const ProfileCard = styled(Card)`
  text-align: center;
  
  .profile-emoji {
    font-size: 4rem;
    margin-bottom: ${theme.spacing.lg};
    display: block;
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: ${theme.spacing.md};
  margin-top: ${theme.spacing.lg};
`;

const SkillBadge = styled(Badge)`
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  text-align: center;
  font-weight: ${theme.typography.fontWeight.medium};
`;

const TimelineItem = styled.div`
  position: relative;
  padding-left: ${theme.spacing.xl};
  margin-bottom: ${theme.spacing.lg};
  
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: ${theme.spacing.sm};
    width: 12px;
    height: 12px;
    background: ${theme.colors.primary[500]};
    border-radius: 50%;
  }
  
  &::after {
    content: '';
    position: absolute;
    left: 5px;
    top: 24px;
    width: 2px;
    height: calc(100% - 12px);
    background: ${theme.colors.primary[200]};
  }
  
  &:last-child::after {
    display: none;
  }
`;

const AboutMe = () => {
  return (
    <PageContainer>
      <SectionContainer>
        <PageTitle>About Me</PageTitle>
        
        <AboutGrid>
          <ProfileCard delay="0s">
            <span className="profile-emoji">👨‍💻</span>
            <CardTitle>Full Stack Developer</CardTitle>
            <CardText>
              An aspiring full stack web developer with expertise in the MERN stack and ELK stack. 
              I'm passionate about creating efficient, scalable web applications and always eager 
              to learn new technologies.
            </CardText>
            <CardText>
              Currently working as an Analyst Programmer at Ramco Systems Limited, where I develop 
              enterprise-level applications and contribute to innovative projects that serve 
              thousands of users.
            </CardText>
          </ProfileCard>

          <Card delay="0.2s">
            <CardTitle>My Journey</CardTitle>
            <div style={{ marginTop: theme.spacing.lg }}>
              <TimelineItem>
                <CardTitle style={{ fontSize: theme.typography.fontSize.lg, marginBottom: theme.spacing.xs }}>
                  2019 - 2023
                </CardTitle>
                <CardText>
                  Completed B.E. in Computer Science and Engineering from Ramco Institute of Technology 
                  with 8.6 CGPA. Built strong foundations in programming and software development.
                </CardText>
              </TimelineItem>
              
              <TimelineItem>
                <CardTitle style={{ fontSize: theme.typography.fontSize.lg, marginBottom: theme.spacing.xs }}>
                  2023 (Feb - Aug)
                </CardTitle>
                <CardText>
                  Started as a Project Trainee at Ramco Systems Limited, gaining hands-on experience 
                  with enterprise development and learning industry best practices.
                </CardText>
              </TimelineItem>
              
              <TimelineItem>
                <CardTitle style={{ fontSize: theme.typography.fontSize.lg, marginBottom: theme.spacing.xs }}>
                  2023 - Present
                </CardTitle>
                <CardText>
                  Promoted to Analyst Programmer, now leading development of complex web applications 
                  and mentoring new team members.
                </CardText>
              </TimelineItem>
            </div>
          </Card>
        </AboutGrid>

        <Card delay="0.4s" style={{ marginTop: theme.spacing.xl }}>
          <CardTitle>Core Technologies & Interests</CardTitle>
          <CardText style={{ marginBottom: theme.spacing.lg }}>
            I specialize in modern web development technologies and am constantly expanding my skill set:
          </CardText>
          
          <SkillsGrid>
            <SkillBadge variant="primary">React.js</SkillBadge>
            <SkillBadge variant="primary">Node.js</SkillBadge>
            <SkillBadge variant="primary">MongoDB</SkillBadge>
            <SkillBadge variant="primary">Python</SkillBadge>
            <SkillBadge variant="secondary">Elasticsearch</SkillBadge>
            <SkillBadge variant="secondary">Docker</SkillBadge>
            <SkillBadge variant="secondary">Playwright</SkillBadge>
            <SkillBadge variant="secondary">WSL</SkillBadge>
          </SkillsGrid>
        </Card>

        <Card delay="0.6s" style={{ marginTop: theme.spacing.xl }}>
          <CardTitle>What Drives Me</CardTitle>
          <FlexContainer direction="column" gap={theme.spacing.md}>
            <CardText>
              🎯 <strong>Problem Solving:</strong> I love tackling complex challenges and finding elegant solutions 
              that make a real impact.
            </CardText>
            <CardText>
              🚀 <strong>Innovation:</strong> Always exploring new technologies and methodologies to stay at the 
              forefront of web development.
            </CardText>
            <CardText>
              🤝 <strong>Collaboration:</strong> I believe the best solutions come from working together and 
              sharing knowledge with teammates.
            </CardText>
            <CardText>
              📈 <strong>Growth:</strong> Committed to continuous learning and helping others grow in their 
              development journey.
            </CardText>
          </FlexContainer>
        </Card>
      </SectionContainer>
    </PageContainer>
  );
};

export default AboutMe;
