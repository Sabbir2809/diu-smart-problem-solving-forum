import { Avatar } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import './AllQuestions.css';

const AllQuestions = () => {
  return (
    <div className='all-questions'>
      <div className='all-questions-container'>
        <div className='all-questions-left'>
          <div className='all-options'>
            <div className='all-option'>
              <p>0</p>
              <span>Votes</span>
            </div>
            <div className='all-option'>
              <p>0</p>
              <span>Answers</span>
            </div>
            <div className='all-option'>
              <p>0</p>
              <small>0 Views</small>
            </div>
          </div>
        </div>
        <div className='question-answer'>
          <Link>How to Use Drag & Drop in Design?</Link>
          <div style={{ width: '90%' }}>
            <div>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae maxime
              voluptatum corporis molestias blanditiis ullam similique at necessitatibus impedit
              consectetur?
            </div>
          </div>
          <div style={{ display: 'flex' }}>
            <span className='questions-tags'>react</span>
            <span className='questions-tags'>vue</span>
            <span className='questions-tags'>frontend</span>
          </div>
          <div className='author'>
            <small>Timestamp</small>
            <div className='author-details'>
              <Avatar />
              <p>User Name</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllQuestions;
