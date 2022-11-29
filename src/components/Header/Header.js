import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import InboxIcon from '@mui/icons-material/Inbox';
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar } from '@mui/material';
import diuMate from './../../image/diuMate.gif';

const Header = () => {
  return (
    <header>
      <div className='header-container'>
        <div className='header-left'>
          {/* <h2>DIUMate</h2> */}
          <img src={diuMate} alt='Logo' />
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
