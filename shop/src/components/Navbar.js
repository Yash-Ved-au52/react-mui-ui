import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Box, Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Search, ShoppingCart, Favorite, Person, Menu, Home, Category, Info, ContactMail } from '@mui/icons-material';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const menuItems = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
      <List>
        <ListItem button>
          <ListItemIcon><Home /></ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button>
          <ListItemIcon><Category /></ListItemIcon>
          <ListItemText primary="Categories" />
        </ListItem>
        <ListItem button>
          <ListItemIcon><ShoppingCart /></ListItemIcon>
          <ListItemText primary="Products" />
        </ListItem>
        <ListItem button>
          <ListItemIcon><Info /></ListItemIcon>
          <ListItemText primary="About Us" />
        </ListItem>
        <ListItem button>
          <ListItemIcon><ContactMail /></ListItemIcon>
          <ListItemText primary="Contact Us" />
        </ListItem>
        <ListItem button>
          <ListItemIcon><Favorite /></ListItemIcon>
          <ListItemText primary="Wishlist" />
        </ListItem>
        <ListItem button>
          <ListItemIcon><Person /></ListItemIcon>
          <ListItemText primary="Profile" />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <AppBar position="fixed" sx={{ background: 'linear-gradient(to right, #ff8e53, #ff2a6d)', width: '100%', zIndex: 1301, boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)' }}>
      <Toolbar>
        {isMobile ? (
          <>
            <IconButton color="inherit" onClick={toggleDrawer(true)}>
              <Menu sx={{ color: '#fff' }} />
            </IconButton>
            <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
              {menuItems}
            </Drawer>
            <Box sx={{ flexGrow: 1, textAlign: 'center' }}>
              <Typography
                variant="h6"
                component="div"
                sx={{
                  fontFamily: 'Pacifico, cursive',
                  fontWeight: 'bold',
                  color: '#fff',
                  background: 'linear-gradient(to right,rgb(101, 128, 196),rgb(58, 36, 86))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  '&:hover': {
                    transform: 'scale(1.1)',
                    textShadow: '2px 2px 8px rgba(0, 0, 0, 0.4)'
                  }
                }}
              >
                My Shop
              </Typography>
            </Box>
            <IconButton color="inherit"><Search sx={{ color: '#fff' }} /></IconButton>
          </>
        ) : (
          <>
            <Typography
              variant="h6"
              component="div"
              sx={{
                flexGrow: 1,
                fontFamily: 'Pacifico, cursive',
                fontWeight: 'bold',
                color: '#fff',
                background: 'linear-gradient(to right,rgb(82, 121, 121),rgb(49, 24, 81))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                transition: 'transform 0.3s, box-shadow 0.3s',
                '&:hover': {
                  transform: 'scale(1.1)',
                  textShadow: '2px 2px 8px rgba(0, 0, 0, 0.4)'
                }
              }}
            >
              My Shop
            </Typography>
            <Box sx={{ flexGrow: 1, textAlign: 'center' }}>
              {['Home', 'Categories', 'Products', 'About Us', 'Contact Us'].map((text) => (
                <Button color="inherit" sx={{ color: '#fff', fontWeight: 'bold', mx: 1 }} key={text}>{text}</Button>
              ))}
            </Box>
            <IconButton color="inherit"><Search sx={{ color: '#fff' }} /></IconButton>
            <IconButton color="inherit"><ShoppingCart sx={{ color: '#fff' }} /></IconButton>
            <IconButton color="inherit"><Favorite sx={{ color: '#fff' }} /></IconButton>
            <IconButton color="inherit"><Person sx={{ color: '#fff' }} /></IconButton>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
