import React, { useState } from 'react';
import { workExperience } from '../data/allDetails';
import { 
  PageContainer, 
  SectionContainer, 
  PageTitle, 
  Card, 
  CardTitle, 
  CardSubtitle, 
  CardText, 
  Badge, 
  FlexContainer,
  Button,
  Divider
} from '../components/StyledComponents';
import styled from 'styled-components';
import { theme } from '../styles/theme';

// Experience-specific styled components
const ExperienceCard = styled(Card)`
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background: linear-gradient(135deg, ${theme.colors.primary[500]}, ${theme.colors.accent[500]});
  }
`;

const CompanyHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: ${theme.spacing.lg};
  flex-wrap: wrap;
  gap: ${theme.spacing.sm};
`;

const TimelineDate = styled.div`
  color: ${theme.colors.neutral[500]};
  font-size: ${theme.typography.fontSize.sm};
  font-weight: ${theme.typography.fontWeight.medium};
`;

const TechnologyList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacing.xs};
  margin: ${theme.spacing.md} 0;
`;

const DetailsSection = styled.div`
  margin-top: ${theme.spacing.lg};
  padding-top: ${theme.spacing.lg};
  border-top: 1px solid ${theme.colors.neutral[200]};
`;

const ListItem = styled.li`
  margin-bottom: ${theme.spacing.sm};
  color: ${theme.colors.neutral[700]};
  line-height: ${theme.typography.lineHeight.relaxed};
  
  &::marker {
    color: ${theme.colors.primary[500]};
  }
`;

const ExpandButton = styled(Button)`
  margin-top: ${theme.spacing.md};
  font-size: ${theme.typography.fontSize.sm};
`;

const formatDateRange = (startDate, endDate) => {
  const formatDate = (dateStr) => {
    if (!dateStr) return 'Present';
    const [year, month] = dateStr.split('-');
    const date = new Date(year, month - 1);
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  };
  
  return `${formatDate(startDate)} - ${formatDate(endDate)}`;
};

const ExperienceItem = ({ experience, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <ExperienceCard delay={`${index * 0.2}s`}>
      <CompanyHeader>
        <div>
          <CardTitle>{experience.role}</CardTitle>
          <CardSubtitle>{experience.company}</CardSubtitle>
          <TimelineDate>
            {formatDateRange(experience.startDate, experience.endDate)} • {experience.duration}
          </TimelineDate>
        </div>
        <FlexContainer direction="column" align="flex-end" gap={theme.spacing.xs}>
          <Badge variant={experience.type === 'Full-time' ? 'primary' : 'secondary'}>
            {experience.type}
          </Badge>
          <CardText style={{ margin: 0, fontSize: theme.typography.fontSize.sm }}>
            📍 {experience.location}
          </CardText>
        </FlexContainer>
      </CompanyHeader>

      <TechnologyList>
        {experience.technologies.map((tech, index) => (
          <Badge key={index} variant="primary">
            {tech}
          </Badge>
        ))}
      </TechnologyList>

      <CardText>
        {experience.responsibilities[0]}
        {experience.responsibilities.length > 1 && !isExpanded && '...'}
      </CardText>

      {isExpanded && (
        <DetailsSection>
          <h4 style={{ 
            color: theme.colors.neutral[800], 
            marginBottom: theme.spacing.md,
            fontSize: theme.typography.fontSize.lg 
          }}>
            Key Responsibilities
          </h4>
          <ul style={{ paddingLeft: theme.spacing.lg }}>
            {experience.responsibilities.slice(1).map((responsibility, index) => (
              <ListItem key={index}>{responsibility}</ListItem>
            ))}
          </ul>

          {experience.achievements && experience.achievements.length > 0 && (
            <>
              <h4 style={{ 
                color: theme.colors.neutral[800], 
                marginBottom: theme.spacing.md,
                marginTop: theme.spacing.lg,
                fontSize: theme.typography.fontSize.lg 
              }}>
                Key Achievements
              </h4>
              <ul style={{ paddingLeft: theme.spacing.lg }}>
                {experience.achievements.map((achievement, index) => (
                  <ListItem key={index} style={{ color: theme.colors.success[700] }}>
                    {achievement}
                  </ListItem>
                ))}
              </ul>
            </>
          )}
        </DetailsSection>
      )}

      {experience.responsibilities.length > 1 && (
        <ExpandButton 
          variant="outline" 
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? 'Show Less' : 'Show More Details'}
        </ExpandButton>
      )}
    </ExperienceCard>
  );
};

const Experience = () => {
  return (
    <PageContainer>
      <SectionContainer>
        <PageTitle>Professional Experience</PageTitle>
        
        <FlexContainer direction="column" gap={theme.spacing.xl}>
          {workExperience.map((experience, index) => (
            <ExperienceItem 
              key={experience.id} 
              experience={experience} 
              index={index}
            />
          ))}
        </FlexContainer>

        <Divider />
        
        <div style={{ textAlign: 'center' }}>
          <CardText style={{ fontSize: theme.typography.fontSize.lg, color: theme.colors.neutral[600] }}>
            🚀 Currently growing and learning at Ramco Systems Limited
          </CardText>
        </div>
      </SectionContainer>
    </PageContainer>
  );
};

export default Experience;