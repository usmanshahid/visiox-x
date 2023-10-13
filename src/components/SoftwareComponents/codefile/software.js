import React from 'react';
import { Box, Button, Typography, CssBaseline } from '@mui/material';
import backgroundlogo from '../images/background.png';
import { keyframes } from '@mui/system'; // Import keyframes from @mui/system

const SoftwareApp = () => {
  const containerStyle = {
    backgroundImage: `url(${backgroundlogo})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    minHeight: '100vh',
  };

  // Define keyframes animation
  const moveLeftToRight = keyframes`
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(0);
    }
  `;

  const animationStyle = {
    animation: `${moveLeftToRight} 1.5s ease-in-out`, // Apply the animation
    overflow: 'hidden', // Hide overflowing text during animation
  };

  return (
    <div>
      <CssBaseline />
      <Box style={containerStyle}>
        <Box
          sx={{
            marginLeft: { xs: '5%', md: '15%' },
            paddingTop: { xs: '20%', md: '8%' },
            width: { xs: '90%', md: '36%' },
            ...animationStyle, // Apply animation style
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: '30px', md: '60px' },
              color: 'white',
            }}
          >
            Your Software Team for Digital Experiences
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: '13px', md: '18px' },
              color: 'white',
            }}
          >
            We help businesses build great software and products with speed, quality, and agility at a competitive price through a global team of product managers, designers, and software developers.
          </Typography>
          <br />
          <Button
            variant="contained"
            sx={{
              backgroundColor: 'white',
              fontWeight: 'bold',
              color: 'black',
              borderRadius: '20px',
              fontSize: '13px',
              mt: '20px',
            }}
          >
            Learn More
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default SoftwareApp;
