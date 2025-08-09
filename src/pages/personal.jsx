import React, { useState } from 'react';
import { personal } from '../data/allDetails';
import { 
  PageContainer, 
  SectionContainer, 
  PageTitle, 
  GridContainer,
  Card, 
  CardTitle, 
  CardText, 
  Badge,
  Button,
  FlexContainer
} from '../components/StyledComponents';
import styled from 'styled-components';
import { theme } from '../styles/theme';
import { FaGithub, FaExternalLinkAlt, FaCode, FaEye } from 'react-icons/fa';

const ProjectCard = styled(Card)`
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: 100%;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: ${props => 
      props.status === 'Completed' 
        ? `linear-gradient(90deg, ${theme.colors.success[500]}, ${theme.colors.success[400]})`
        : `linear-gradient(90deg, ${theme.colors.warning[500]}, ${theme.colors.warning[400]})`
    };
  }
`;

const ProjectImage = styled.div`
  width: 100%;
  height: 200px;
  background: linear-gradient(135deg, ${theme.colors.primary[100]}, ${theme.colors.accent[100]});
  border-radius: ${theme.borderRadius.md};
  margin-bottom: ${theme.spacing.lg};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${theme.colors.neutral[500]};
  font-size: ${theme.typography.fontSize.lg};
  position: relative;
  overflow: hidden;
  
  &::after {
    content: '🚀';
    font-size: 3rem;
    opacity: 0.3;
  }
`;

const TechnologyList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacing.xs};
  margin: ${theme.spacing.md} 0;
`;

const StatusBadge = styled(Badge)`
  position: absolute;
  top: ${theme.spacing.lg};
  right: ${theme.spacing.lg};
`;

const FeaturesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: ${theme.spacing.md} 0;
  flex-grow: 1;
`;

const FeatureItem = styled.li`
  color: ${theme.colors.neutral[700]};
  margin-bottom: ${theme.spacing.sm};
  padding-left: ${theme.spacing.lg};
  position: relative;
  
  &::before {
    content: '✓';
    position: absolute;
    left: 0;
    color: ${theme.colors.success[500]};
    font-weight: bold;
  }
`;

const ProjectActions = styled.div`
  display: flex;
  gap: ${theme.spacing.sm};
  margin-top: ${theme.spacing.lg};
  padding-top: ${theme.spacing.lg};
  border-top: 1px solid ${theme.colors.neutral[200]};
`;

const ActionButton = styled(Button)`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${theme.spacing.xs};
  font-size: ${theme.typography.fontSize.sm};
  padding: ${theme.spacing.sm} ${theme.spacing.md};
`;

const ExpandButton = styled(Button)`
  margin-top: ${theme.spacing.md};
  font-size: ${theme.typography.fontSize.sm};
  width: 100%;
`;

const Personal = () => {
  const [expandedProjects, setExpandedProjects] = useState(new Set());

  const toggleExpanded = (projectId) => {
    const newExpanded = new Set(expandedProjects);
    if (newExpanded.has(projectId)) {
      newExpanded.delete(projectId);
    } else {
      newExpanded.add(projectId);
    }
    setExpandedProjects(newExpanded);
  };

  return (
    <PageContainer>
      <SectionContainer>
        <PageTitle>Personal Projects</PageTitle>
        
        <GridContainer>
          {personal.map((project, index) => {
            const isExpanded = expandedProjects.has(project.id);
            
            return (
              <ProjectCard 
                key={project.id} 
                delay={`${index * 0.2}s`}
                status={project.status}
              >
                <StatusBadge variant={project.status === 'Completed' ? 'success' : 'warning'}>
                  {project.status}
                </StatusBadge>
                
                <ProjectImage />
                
                <CardTitle>{project.project}</CardTitle>
                
                <TechnologyList>
                  {project.technologies.map((tech, index) => (
                    <Badge key={index} variant="primary">
                      {tech}
                    </Badge>
                  ))}
                </TechnologyList>
                
                <CardText>
                  {isExpanded 
                    ? project.description 
                    : `${project.description.substring(0, 120)}...`
                  }
                </CardText>
                
                {isExpanded && (
                  <>
                    <h4 style={{ 
                      color: theme.colors.neutral[800], 
                      marginBottom: theme.spacing.sm,
                      fontSize: theme.typography.fontSize.lg 
                    }}>
                      Key Features
                    </h4>
                    <FeaturesList>
                      {project.features.map((feature, index) => (
                        <FeatureItem key={index}>{feature}</FeatureItem>
                      ))}
                    </FeaturesList>
                  </>
                )}
                
                <ExpandButton 
                  variant="outline" 
                  onClick={() => toggleExpanded(project.id)}
                >
                  <FaEye /> {isExpanded ? 'Show Less' : 'Show More Details'}
                </ExpandButton>
                
                <ProjectActions>
                  {project.github && (
                    <ActionButton 
                      variant="outline"
                      as="a"
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub /> Code
                    </ActionButton>
                  )}
                  {project.demo && (
                    <ActionButton 
                      variant="primary"
                      as="a"
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaExternalLinkAlt /> Demo
                    </ActionButton>
                  )}
                  {!project.demo && !project.github && (
                    <ActionButton variant="secondary" disabled>
                      <FaCode /> Coming Soon
                    </ActionButton>
                  )}
                </ProjectActions>
              </ProjectCard>
            );
          })}
        </GridContainer>

        <Card delay="0.8s" style={{ marginTop: theme.spacing['2xl'] }}>
          <CardTitle>Project Development Philosophy</CardTitle>
          <FlexContainer direction="column" gap={theme.spacing.md}>
            <CardText>
              🎯 <strong>Problem-Solving Focus:</strong> Each project addresses real-world problems 
              and provides practical solutions that I've encountered or observed.
            </CardText>
            <CardText>
              🛠️ <strong>Technology Exploration:</strong> These projects serve as learning platforms 
              where I experiment with new technologies and best practices.
            </CardText>
            <CardText>
              📚 <strong>Continuous Improvement:</strong> I regularly refactor and enhance these projects 
              as I learn new techniques and patterns.
            </CardText>
            <CardText>
              🤝 <strong>Open Source:</strong> Most of my projects are open source to contribute to 
              the developer community and receive feedback.
            </CardText>
          </FlexContainer>
        </Card>
      </SectionContainer>
    </PageContainer>
  );
};

export default Personal;