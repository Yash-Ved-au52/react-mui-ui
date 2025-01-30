import React from 'react';
import { Card, CardContent, CardMedia, Typography, IconButton, Button, Grid, Box } from '@mui/material';
import { Favorite, Share, AddShoppingCart } from '@mui/icons-material';
import data from '../Data/data.json';  // Importing the JSON data

const ProductCard = () => {
  return (
    <Grid container spacing={4} sx={{ marginTop: 4, marginBottom: 4 }}>
      {data.map((product) => (
        <Grid item xs={12} sm={6} md={4} key={product.id}>
          <Card sx={{ 
            position: 'relative', 
            overflow: 'hidden', 
            transition: 'transform 0.3s', 
            '&:hover': { 
              transform: 'scale(1.05)', 
              boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)' 
            }
          }}>
            <Box sx={{ 
              height: 200, // Set the height of the box
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center', 
              background: '#dcd6d6',
              overflow: 'hidden'
            }}>
              <CardMedia
                component="img"
                image={process.env.PUBLIC_URL + product.image}
                alt={product.name}
                sx={{ width: '70%', height: '100%', objectFit: 'cover' }} // Decreased the width to 80%
              />
            </Box>
            <CardContent>
              <Typography variant="h5" component="div" sx={{ fontFamily: 'Comic Sans MS, Comic Sans, cursive', fontWeight: 'bold' }}>{product.name}</Typography>
              <Typography variant="body2" color="text.secondary">{`$${product.price}`}</Typography>
              <Typography variant="body2" color="text.secondary">{product.description}</Typography>
              <Box sx={{ mt: 2 }}>
                <IconButton sx={{ color: '#ff2a6d' }}><Favorite /></IconButton>
                <IconButton sx={{ color: '#ff8e53' }}><Share /></IconButton>
              </Box>
              <Button variant="contained" sx={{ mt: 2, backgroundColor: '#ff8e53', '&:hover': { backgroundColor: '#ff2a6d' } }} startIcon={<AddShoppingCart />}>Add to Cart</Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductCard;
