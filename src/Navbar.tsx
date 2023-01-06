import React, { Fragment } from 'react';
import { Typography, AppBar, CssBaseline, Grid } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { useState } from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Divider from '@mui/material/Divider';
import Login from './login';
import Logout from './logout';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)

  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <Fragment>
      <CssBaseline />
      <AppBar position='relative'>
        <Toolbar>
          {/* <AddShoppingCartIcon /> */}
          <Typography variant='h6' >
            ECommerce
          </Typography>
          <Grid container justifyContent="flex-end">
            <Button color='inherit' id='resource-menu' onClick={handleClick} aria-controls={open ? 'resource-menu' : undefined}
              aria-haspopup='true'
              aria-expanded={open ? 'true' : undefined}><AccountCircleIcon />
            </Button>
          </Grid>
          <Menu id='resource-menu' anchorEl={anchorEl} open={open} MenuListProps={{ 'aria-labelledby': 'resource-button', }} onClose={handleClose} PaperProps={{ sx: { width: '150px' } }}>
            <MenuItem onClick={handleClose}>My Profile</MenuItem>
            <MenuItem onClick={handleClose}>Wishlist</MenuItem>
            <MenuItem onClick={handleClose}>Cart</MenuItem>
            <Divider sx={{ my: 0.5 }} />
            <MenuItem onClick={handleClose}><Login/></MenuItem>
            <MenuItem onClick={handleClose}><Logout/></MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </Fragment>
  );
}

export default Navbar;