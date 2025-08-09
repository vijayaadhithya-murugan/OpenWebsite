import React from 'react';
import { educationDetails } from '../data/allDetails';
import { 
  PageContainer, 
  SectionContainer, 
  PageTitle, 
  GridContainer,
  Card, 
  CardTitle, 
  CardSubtitle,
  CardText, 
  Badge,
  FlexContainer
} from '../components/StyledComponents';
import styled from 'styled-components';
import { theme } from '../styles/theme';

const EducationCard = styled(Card)`
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background: linear-gradient(135deg, ${theme.colors.success[500]}, ${theme.colors.success[400]});
  }
`;

const GradeDisplay = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  margin-top: ${theme.spacing.md};
  
  .grade {
    font-size: ${theme.typography.fontSize.xl};
    font-weight: ${theme.typography.fontWeight.bold};
    color: ${theme.colors.success[600]};
  }
  
  .label {
    font-size: ${theme.typography.fontSize.sm};
    color: ${theme.colors.neutral[600]};
  }
`;

const YearBadge = styled(Badge)`
  position: absolute;
  top: ${theme.spacing.lg};
  right: ${theme.spacing.lg};
`;

const InstitutionText = styled(CardText)`
  font-style: italic;
  color: ${theme.colors.primary[600]};
  font-weight: ${theme.typography.fontWeight.medium};
`;

const Education = () => {
  return (
    <PageContainer>
      <SectionContainer>
        <PageTitle>Education</PageTitle>
        
        <GridContainer>
          {educationDetails.map((education, index) => (
            <EducationCard key={education.course} delay={`${index * 0.2}s`}>
              <YearBadge variant="success">{education.year}</YearBadge>
              
              <CardTitle>{education.course}</CardTitle>
              <InstitutionText>{education.institution}</InstitutionText>
              
              <GradeDisplay>
                <span className="grade">{education.grade}</span>
                <span className="label">Overall Grade</span>
              </GradeDisplay>
            </EducationCard>
          ))}
        </GridContainer>

        <Card delay="0.8s" style={{ marginTop: theme.spacing['2xl'] }}>
          <CardTitle>Academic Highlights</CardTitle>
          <FlexContainer direction="column" gap={theme.spacing.md}>
            <CardText>
              🎓 <strong>Consistent Performance:</strong> Maintained strong academic performance throughout 
              my educational journey, with a notable CGPA of 8.6 in my engineering degree.
            </CardText>
            <CardText>
              💻 <strong>Technical Foundation:</strong> Built a solid foundation in computer science fundamentals, 
              including data structures, algorithms, software engineering, and database management.
            </CardText>
            <CardText>
              🏆 <strong>Practical Learning:</strong> Actively participated in coding competitions and 
              personal projects during college, applying theoretical knowledge to real-world problems.
            </CardText>
          </FlexContainer>
        </Card>
      </SectionContainer>
    </PageContainer>
  );
};

export default Education;