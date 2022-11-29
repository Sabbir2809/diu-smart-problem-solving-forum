import React from 'react';
import './Index.css';
import Main from './Main';
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
