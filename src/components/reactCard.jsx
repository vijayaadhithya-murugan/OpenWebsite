import React from 'react';
import styled from 'styled-components';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Typography } from '@mui/material';

// Styled components for the card
// const CardContainer = styled.div`
//   border: 1px solid #ccc;
//   border-radius: 8px;
//   padding: 16px;
//   margin: 16px;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
// `;

// const CardTitle = styled.h2`
//   color: #333;
// `;

// const CardContent = styled.p`
//   color: #555;
// `;

// Reusable React card component
const ReusableCard = ({ title, content }) => {
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {content}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ReusableCard;
