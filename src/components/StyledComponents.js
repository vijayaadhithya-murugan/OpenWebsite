import styled, { keyframes } from 'styled-components';
import { theme } from '../styles/theme';

// Animations
const fadeInUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideInLeft = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-30px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

// Container Components
export const PageContainer = styled.div`
  min-height: calc(100vh - 200px);
  padding: ${theme.spacing['2xl']} ${theme.spacing.lg};
  background: linear-gradient(135deg, ${theme.colors.neutral[50]} 0%, ${theme.colors.primary[50]} 100%);
  
  ${theme.breakpoints.md && `@media (min-width: ${theme.breakpoints.md})`} {
    padding: ${theme.spacing['3xl']} ${theme.spacing.xl};
  }
`;

export const SectionContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${theme.spacing.md};
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${theme.spacing.xl};
  
  ${theme.breakpoints.md && `@media (min-width: ${theme.breakpoints.md})`} {
    grid-template-columns: repeat(2, 1fr);
  }
  
  ${theme.breakpoints.lg && `@media (min-width: ${theme.breakpoints.lg})`} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

// Card Components
export const Card = styled.div`
  background: ${theme.colors.neutral[50]};
  border-radius: ${theme.borderRadius.xl};
  box-shadow: ${theme.shadows.md};
  padding: ${theme.spacing.xl};
  transition: all 0.3s ease;
  border: 1px solid ${theme.colors.neutral[200]};
  opacity: 0;
  animation: ${fadeInUp} 0.6s ease-out forwards;
  animation-delay: ${props => props.delay || '0s'};
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: ${theme.shadows.xl};
    border-color: ${theme.colors.primary[300]};
  }
`;

export const IconCard = styled(Card)`
  text-align: center;
  
  .icon {
    font-size: 3rem;
    color: ${theme.colors.primary[500]};
    margin-bottom: ${theme.spacing.md};
    display: block;
  }
`;

// Typography Components
export const PageTitle = styled.h1`
  font-size: ${theme.typography.fontSize['4xl']};
  font-weight: ${theme.typography.fontWeight.bold};
  color: ${theme.colors.neutral[900]};
  text-align: center;
  margin-bottom: ${theme.spacing['2xl']};
  background: linear-gradient(135deg, ${theme.colors.primary[600]}, ${theme.colors.accent[600]});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: ${slideInLeft} 0.8s ease-out;
  
  ${theme.breakpoints.md && `@media (min-width: ${theme.breakpoints.md})`} {
    font-size: ${theme.typography.fontSize['5xl']};
  }
`;

export const SectionTitle = styled.h2`
  font-size: ${theme.typography.fontSize['3xl']};
  font-weight: ${theme.typography.fontWeight.semibold};
  color: ${theme.colors.neutral[800]};
  margin-bottom: ${theme.spacing.lg};
`;

export const CardTitle = styled.h3`
  font-size: ${theme.typography.fontSize.xl};
  font-weight: ${theme.typography.fontWeight.semibold};
  color: ${theme.colors.neutral[900]};
  margin-bottom: ${theme.spacing.sm};
`;

export const CardSubtitle = styled.h4`
  font-size: ${theme.typography.fontSize.lg};
  font-weight: ${theme.typography.fontWeight.medium};
  color: ${theme.colors.primary[600]};
  margin-bottom: ${theme.spacing.sm};
`;

export const CardText = styled.p`
  font-size: ${theme.typography.fontSize.base};
  color: ${theme.colors.neutral[600]};
  line-height: ${theme.typography.lineHeight.relaxed};
  margin-bottom: ${theme.spacing.sm};
`;

export const Badge = styled.span`
  display: inline-block;
  padding: ${theme.spacing.xs} ${theme.spacing.sm};
  background: ${props => {
    switch(props.variant) {
      case 'success': return theme.colors.success[100];
      case 'warning': return theme.colors.warning[100];
      case 'error': return theme.colors.error[100];
      case 'primary': return theme.colors.primary[100];
      default: return theme.colors.neutral[100];
    }
  }};
  color: ${props => {
    switch(props.variant) {
      case 'success': return theme.colors.success[800];
      case 'warning': return theme.colors.warning[800];
      case 'error': return theme.colors.error[800];
      case 'primary': return theme.colors.primary[800];
      default: return theme.colors.neutral[800];
    }
  }};
  border-radius: ${theme.borderRadius.full};
  font-size: ${theme.typography.fontSize.sm};
  font-weight: ${theme.typography.fontWeight.medium};
`;

// Button Components
export const Button = styled.button`
  padding: ${theme.spacing.sm} ${theme.spacing.lg};
  border-radius: ${theme.borderRadius.md};
  border: none;
  font-weight: ${theme.typography.fontWeight.medium};
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: ${theme.typography.fontSize.base};
  
  ${props => {
    switch(props.variant) {
      case 'primary':
        return `
          background: ${theme.colors.primary[500]};
          color: white;
          &:hover {
            background: ${theme.colors.primary[600]};
            transform: translateY(-2px);
            box-shadow: ${theme.shadows.md};
          }
        `;
      case 'secondary':
        return `
          background: ${theme.colors.neutral[200]};
          color: ${theme.colors.neutral[700]};
          &:hover {
            background: ${theme.colors.neutral[300]};
          }
        `;
      default:
        return `
          background: transparent;
          color: ${theme.colors.primary[600]};
          border: 1px solid ${theme.colors.primary[300]};
          &:hover {
            background: ${theme.colors.primary[50]};
          }
        `;
    }
  }}
`;

// Layout Components
export const FlexContainer = styled.div`
  display: flex;
  flex-direction: ${props => props.direction || 'row'};
  justify-content: ${props => props.justify || 'flex-start'};
  align-items: ${props => props.align || 'stretch'};
  gap: ${props => props.gap || theme.spacing.md};
  flex-wrap: ${props => props.wrap || 'nowrap'};
`;

export const Divider = styled.hr`
  border: none;
  height: 1px;
  background: linear-gradient(to right, transparent, ${theme.colors.neutral[300]}, transparent);
  margin: ${theme.spacing.xl} 0;
`;
