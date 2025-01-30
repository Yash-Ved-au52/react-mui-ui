import React from 'react';
import { Container, Typography } from '@mui/material';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import SlideshowBanner from './components/SlideshowBanner';
import ProductCard from './components/ProductCard';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <SlideshowBanner />
      
      <Container maxWidth="lg">
        <Typography variant="h4" align="center" gutterBottom sx={{ mt: 4 }}>
          Our Products
        </Typography>
        <ProductCard />
      </Container>
      
      <Footer />
    </>
  );
};

export default App;
