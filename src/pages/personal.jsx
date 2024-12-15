import { personal } from '../data/allDetails';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Typography } from '@mui/material';
import { keyframes, styled } from 'styled-components';

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

const EducationCard = styled(Card)`
  opacity: 0;
  animation: ${fadeInUp} 0.5s ease-in-out forwards;
  animation-delay: ${(props) => props.delay || '0s'};
  background-color: #f1f1f1;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 300px;
  margin: 1rem;
`;

const EducationCardContent = styled(CardContent)`
  padding: 1.5rem !important;
`;

const Personal = () => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem', padding: '2rem' }}>
      {personal.map((e, index) => (
        <EducationCard key={e.project} delay={`${index * 0.2}s`}>
          <EducationCardContent>
            <Typography gutterBottom variant="h5" component="div">
              {e.project}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {`${e.technology}`}
            </Typography>
          </EducationCardContent>
        </EducationCard>
      ))}
    </div>
  );
};

export default Personal;