import { FilterList } from '@mui/icons-material';
import React from 'react';
import { Link } from 'react-router-dom';
import AllQuestions from './AllQuestions';
import './Main.css';

const Main = () => {
  return (
    <div className='main'>
      <div className='main-container'>
        <div className='main-top'>
          <h2>All Questions</h2>
          <Link to='/add-question'>
            <button>Ask Question</button>
          </Link>
        </div>
        <div className='main-description'>
          <p>All Question State</p>
          <div className='main-filter'>
            <div className='main-tabs'>
              <div className='main-tab'>
                <Link to=''>Newest</Link>
              </div>
              <div className='main-tab'>
                <Link to=''>Active</Link>
              </div>
              <div className='main-tab'>
                <Link to=''>More</Link>
              </div>
            </div>
            <div className='main-filter-item'>
              <FilterList />
              <p>Filter</p>
            </div>
          </div>
        </div>
        <div className='questions'>
          <div className='question'>
            <AllQuestions></AllQuestions>
            <AllQuestions></AllQuestions>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
