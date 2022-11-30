import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import InboxIcon from '@mui/icons-material/Inbox';
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className='header-container'>
        <div className='header-left'>
          <Link to='/'>
            <h2>DIUMate</h2>
          </Link>
          <h3>Products</h3>
        </div>
        <div className='header-middle'>
          <div className='header-search-container'>
            <SearchIcon />
            <input type='search' name='search' placeholder='Search...' />
          </div>
        </div>
        <div className='header-right'>
          <div className='header-right-container'>
            <Avatar />
            <InboxIcon />
            <MenuIcon />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
