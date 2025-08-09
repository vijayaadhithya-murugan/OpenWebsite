import React from 'react';
import { skillSet } from '../data/allDetails';
import { 
  PageContainer, 
  SectionContainer, 
  PageTitle, 
  GridContainer,
  IconCard, 
  CardTitle, 
  CardText, 
  Badge
} from '../components/StyledComponents';
import styled from 'styled-components';
import { theme } from '../styles/theme';

const SkillCard = styled(IconCard)`
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: ${props => {
      switch(props.level) {
        case 'Advanced': return `linear-gradient(90deg, ${theme.colors.success[500]}, ${theme.colors.success[400]})`;
        case 'Intermediate': return `linear-gradient(90deg, ${theme.colors.warning[500]}, ${theme.colors.warning[400]})`;
        case 'Beginner': return `linear-gradient(90deg, ${theme.colors.primary[500]}, ${theme.colors.primary[400]})`;
        default: return `linear-gradient(90deg, ${theme.colors.neutral[400]}, ${theme.colors.neutral[300]})`;
      }
    }};
  }
`;

const SkillIcon = styled.div`
  font-size: 3.5rem;
  color: ${theme.colors.primary[500]};
  margin-bottom: ${theme.spacing.lg};
  transition: all 0.3s ease;
  
  ${SkillCard}:hover & {
    transform: scale(1.1);
    color: ${theme.colors.primary[600]};
  }
`;

const LevelBadge = styled(Badge)`
  margin-top: ${theme.spacing.md};
`;

const SkillsGrid = styled(GridContainer)`
  @media (min-width: ${theme.breakpoints.sm}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: ${theme.breakpoints.md}) {
    grid-template-columns: repeat(3, 1fr);
  }
  
  @media (min-width: ${theme.breakpoints.lg}) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const SkillCategory = styled.div`
  margin-bottom: ${theme.spacing['2xl']};
  
  h3 {
    color: ${theme.colors.neutral[800]};
    font-size: ${theme.typography.fontSize['2xl']};
    font-weight: ${theme.typography.fontWeight.semibold};
    margin-bottom: ${theme.spacing.xl};
    text-align: center;
  }
`;

const getBadgeVariant = (level) => {
  switch(level) {
    case 'Advanced': return 'success';
    case 'Intermediate': return 'warning';
    case 'Beginner': return 'primary';
    default: return 'secondary';
  }
};

const SkillSet = () => {
  // Group skills by level
  const groupedSkills = skillSet.reduce((acc, skill) => {
    if (!acc[skill.level]) {
      acc[skill.level] = [];
    }
    acc[skill.level].push(skill);
    return acc;
  }, {});

  const levelOrder = ['Advanced', 'Intermediate', 'Beginner'];

  return (
    <PageContainer>
      <SectionContainer>
        <PageTitle>Technical Skills</PageTitle>
        
        {levelOrder.map(level => (
          groupedSkills[level] && (
            <SkillCategory key={level}>
              <h3>
                {level} Level 
                {level === 'Advanced' && ' 🚀'}
                {level === 'Intermediate' && ' 📈'}
                {level === 'Beginner' && ' 🌱'}
              </h3>
              <SkillsGrid>
                {groupedSkills[level].map((skill, index) => (
                  <SkillCard 
                    key={skill.skill} 
                    delay={`${index * 0.1}s`}
                    level={skill.level}
                  >
                    <SkillIcon>{skill.icon}</SkillIcon>
                    <CardTitle>{skill.skill}</CardTitle>
                    <LevelBadge variant={getBadgeVariant(skill.level)}>
                      {skill.level}
                    </LevelBadge>
                  </SkillCard>
                ))}
              </SkillsGrid>
            </SkillCategory>
          )
        ))}

        <div style={{ 
          background: `linear-gradient(135deg, ${theme.colors.primary[50]}, ${theme.colors.accent[50]})`,
          padding: theme.spacing['2xl'],
          borderRadius: theme.borderRadius.xl,
          textAlign: 'center',
          marginTop: theme.spacing['2xl']
        }}>
          <h3 style={{ 
            color: theme.colors.neutral[800], 
            marginBottom: theme.spacing.lg,
            fontSize: theme.typography.fontSize['2xl']
          }}>
            Continuous Learning Journey 📚
          </h3>
          <CardText style={{ 
            fontSize: theme.typography.fontSize.lg,
            color: theme.colors.neutral[700]
          }}>
            I'm always exploring new technologies and improving my skills. Currently focusing on 
            advancing my knowledge in cloud technologies, microservices architecture, and modern 
            DevOps practices.
          </CardText>
        </div>
      </SectionContainer>
    </PageContainer>
  );
};

export default SkillSet;
