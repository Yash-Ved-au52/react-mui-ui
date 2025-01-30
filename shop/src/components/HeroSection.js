import React from 'react';
import { Grid, Typography, Button, Box } from '@mui/material';

const HeroSection = () => {
  return (
    <Box sx={{ backgroundColor: '#dcd0d0', color: '#201e1e', py: 0, pt: 3, display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden' }}>
      <Box sx={{ width: '100%', maxWidth: '100%', p: 0, m: '0 auto', display: 'flex', justifyContent: 'center' }}>
        <Grid container spacing={0} alignItems="center" justifyContent="center" sx={{ pt: 2, m: 0 }}>
          <Grid item xs={12} md={6} sx={{ p: 0, m: 0 }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', p: 0, mt: 2 }}>
              <Box sx={{ width: { xs: '100%', md: '80%' }, p: 0, m: 0 }}>
                <img
                  src={process.env.PUBLIC_URL + '/images/banner/banner.png'}
                  alt="Bag with dog"
                  style={{ width: '100%', margin: 0, padding: 0, display: 'block', border: 'none' }}
                />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} sx={{ p: { xs: 1, md: 0 }, m: 0 }}>
            <Typography variant="h6" gutterBottom>Huge Collection -</Typography>
            <Typography variant="h3" gutterBottom>New Bags</Typography>
            <Typography variant="body1" gutterBottom sx={{ lineHeight: 1.8 }}>Torem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo tempor incididunt ut labore et dolore magna</Typography>
            <Button
              variant="contained"
              color="primary"
              sx={{
                mb: 4,
                background: 'linear-gradient(to right, #ff8e53, #ff2a6d)',
                color: '#fff',
                fontWeight: 'bold',
                borderRadius: '20px',
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
                transition: 'transform 0.3s, box-shadow 0.3s',
                '&:hover': {
                  background: 'linear-gradient(to right, #ff2a6d, #ff8e53)',
                  transform: 'scale(1.05)',
                  boxShadow: '0 6px 15px rgba(0, 0, 0, 0.3)'
                }
              }}
            >
              Shop Now
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default HeroSection;
