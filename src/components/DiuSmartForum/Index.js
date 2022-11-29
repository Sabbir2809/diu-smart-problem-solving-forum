import React from 'react';
import Main from '../../Main';
import './Index.css';
import Sidebar from './Sidebar';

const Index = () => {
  return (
    <div className='smartForum-index'>
      <div className='smartForum-index-container'>
        <Sidebar></Sidebar>
        <Main></Main>
      </div>
    </div>
  );
};

export default Index;
