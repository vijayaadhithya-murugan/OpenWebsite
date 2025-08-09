import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from '../styles/theme';

const Nav = styled.nav`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid ${theme.colors.neutral[200]};
  box-shadow: ${theme.shadows.sm};
  position: sticky;
  top: 0;
  z-index: 100;
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${theme.spacing.lg};
`;

const NavList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style-type: none;
  padding: ${theme.spacing.lg} 0;
  margin: 0;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: ${theme.spacing.md};
    padding: ${theme.spacing.md} 0;
  }
`;

const Logo = styled.h3`
  margin: 0;
  font-size: ${theme.typography.fontSize['2xl']};
  font-weight: ${theme.typography.fontWeight.bold};
  background: linear-gradient(135deg, ${theme.colors.primary[600]}, ${theme.colors.accent[600]});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  
  @media (max-width: 768px) {
    font-size: ${theme.typography.fontSize.xl};
  }
`;

const NavItems = styled.div`
  display: flex;
  gap: ${theme.spacing.sm};
  
  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
    gap: ${theme.spacing.xs};
  }
`;

const StyledNavLink = styled(NavLink)`
  color: ${theme.colors.neutral[700]};
  text-decoration: none;
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  border-radius: ${theme.borderRadius.md};
  font-weight: ${theme.typography.fontWeight.medium};
  font-size: ${theme.typography.fontSize.base};
  transition: all 0.2s ease;
  position: relative;
  
  &:hover {
    color: ${theme.colors.primary[600]};
    background-color: ${theme.colors.primary[50]};
    transform: translateY(-2px);
  }
  
  &.active {
    color: ${theme.colors.primary[700]};
    background-color: ${theme.colors.primary[100]};
    box-shadow: ${theme.shadows.sm};
    
    &::after {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 50%;
      transform: translateX(-50%);
      width: 60%;
      height: 2px;
      background: linear-gradient(90deg, ${theme.colors.primary[500]}, ${theme.colors.accent[500]});
      border-radius: ${theme.borderRadius.full};
    }
  }
  
  @media (max-width: 768px) {
    padding: ${theme.spacing.xs} ${theme.spacing.sm};
    font-size: ${theme.typography.fontSize.sm};
  }
`;

const NavBar = () => {
  return (
    <Nav>
      <NavContainer>
        <NavList>
          <Logo>Vijay Aadhithya</Logo>
          <NavItems>
            <li>
              <StyledNavLink to="/about">About Me</StyledNavLink>
            </li>
            <li>
              <StyledNavLink to="/education">Education</StyledNavLink>
            </li>
            <li>
              <StyledNavLink to="/experience">Experience</StyledNavLink>
            </li>
            <li>
              <StyledNavLink to="/personal">Projects</StyledNavLink>
            </li>
            <li>
              <StyledNavLink to="/skills">Skills</StyledNavLink>
            </li>
          </NavItems>
        </NavList>
      </NavContainer>
    </Nav>
  );
};

export default NavBar;
