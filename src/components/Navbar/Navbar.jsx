import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" className="bg-transparent shadow-none">
      <Toolbar className="flex justify-between px-6 py-3">
        {/* Logo */}
        <Typography variant="h6" className="text-yellow-500 font-bold">
          <Link to="/">S2</Link>
        </Typography>

        {/* Menu Links for larger screens */}
        <div className="hidden md:flex space-x-4">
          <Link to="/menu" className="text-red-950 hover:text-yellow-500">Menu</Link>
          <Link to="/events" className="text-gray-700 hover:text-yellow-500">Events</Link>
          <Link to="/about" className="text-gray-700 hover:text-yellow-500">About</Link>
          <Link to="/blog" className="text-gray-700 hover:text-yellow-500">Blog</Link>
          <Link to="/gallery" className="text-gray-700 hover:text-yellow-500">Gallery</Link>
          <Link to="/contact" className="text-gray-700 hover:text-yellow-500">Contact</Link>
        </div>

        {/* Hamburger Menu for small screens */}
        <div className="md:hidden">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleMenu}
          >
            <MenuIcon className="text-yellow-500" />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={open}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>
              <Link to="/menu" className="text-gray-700">Menu</Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link to="/events" className="text-gray-700">Events</Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link to="/about" className="text-gray-700">About</Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link to="/blog" className="text-gray-700">Blog</Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link to="/gallery" className="text-gray-700">Gallery</Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link to="/contact" className="text-gray-700">Contact</Link>
            </MenuItem>
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
