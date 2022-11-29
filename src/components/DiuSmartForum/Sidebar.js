import { Public, Stars, Work } from '@mui/icons-material';
import { Link } from '@mui/material';
import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='sidebar-container'>
        <div className='sidebar-options'>
          <div className='sidebar-option'>
            <Link to=''>Home</Link>
          </div>
          <div className='sidebar-option'>
            <Link to=''>PUBLIC</Link>
            <div className='link'>
              <div className='link-tag'>
                <Public />
                <Link to=''>Question</Link>
              </div>
              <div className='tags'>
                <p>Tags</p>
                <p>Users</p>
              </div>
            </div>
          </div>
          <div className='sidebar-option'>
            <p>COLLECTIVES</p>
            <div className='link'>
              <div className='link-tag'>
                <Stars />
                <Link to=''>Explore Collectives</Link>
              </div>
            </div>
          </div>
          <div className='sidebar-option'>
            <p>FIND A JOB</p>
            <div className='link'>
              <div className='link-tag'>
                <Link to=''>Jobs</Link>
              </div>
            </div>
          </div>
          <div className='sidebar-option'>
            <p>TEAMS</p>
            <div className='link-tag'>
              <Work />
              <Link to=''>Companies</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
