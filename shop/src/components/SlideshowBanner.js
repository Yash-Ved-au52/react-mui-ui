import React, { useState, useEffect } from 'react';
import { Box, Typography, Fade } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const messages = [
  "20% off on your first order!",
  "Summer sale starts now, visit any store.",
  "Please like and subscribe :)"
];

const theme = createTheme({
  typography: {
    fancyFont: {
      fontFamily: '"Comic Sans MS", "Comic Sans", cursive',
      fontWeight: 'bold',
      fontSize: '1.75rem',
      textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
      color: '#000'
    }
  }
});

const SlideshowBanner = () => {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
        setFade(true);
      }, 500);
    }, 3500); // Change message every 3.5 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ backgroundColor: '#cb9090', py: 6, width: '100vw', marginLeft: 'calc(-50vw + 50%)', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
        <Fade in={fade} timeout={{ enter: 500, exit: 500 }}>
          <Typography variant="fancyFont" align="center">
            {messages[currentMessageIndex]}
          </Typography>
        </Fade>
      </Box>
    </ThemeProvider>
  );
};

export default SlideshowBanner;
