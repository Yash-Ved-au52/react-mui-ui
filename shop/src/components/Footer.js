import React from 'react';
import { Container, Grid, Typography, TextField, Button, Box, IconButton } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box component="footer" sx={{ backgroundColor: '#f5f5f5', py: 4, width: '100vw', marginLeft: 'calc(-50vw + 50%)' }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>About Us</Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>Lorem ipsum dolor sit amet cons adipisicing elit sed do eiusm tempor incididunt ut labor et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</Typography>
            <Box sx={{ mt: 2, display: 'flex', justifyContent: 'flex-start', gap: 1 }}>
              <IconButton color="primary" href="https://www.facebook.com">
                <Facebook />
              </IconButton>
              <IconButton color="primary" href="https://www.twitter.com">
                <Twitter />
              </IconButton>
              <IconButton color="primary" href="https://www.instagram.com">
                <Instagram />
              </IconButton>
              <IconButton color="primary" href="https://www.linkedin.com">
                <LinkedIn />
              </IconButton>
            </Box>
          </Grid>
          <Grid item xs={12} md={2}>
            <Typography variant="h6" gutterBottom>Information</Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>About us</Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>Order Tracking</Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>Privacy Policy</Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>Terms & Conditions</Typography>
          </Grid>
          <Grid item xs={12} md={2}>
            <Typography variant="h6" gutterBottom>My Account</Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>Login</Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>My Account</Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>Cart</Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>Wishlist</Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField label="Subscribe to Newsletter" variant="filled" fullWidth sx={{ mt: 2 }} />
            <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>Subscribe</Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
