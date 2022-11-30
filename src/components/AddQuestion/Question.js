import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
// import { TagsInput } from 'react-tag-input-component';
import './Question.css';

const Question = () => {
  return (
    <div className='add-question'>
      <div className='add-question-container'>
        <div className='head-title'>
          <h1>Ask a Public Question</h1>
        </div>
        <div className='question-container'>
          <div className='question-options'>
            <div className='question-option'>
              <div className='title'>
                <h3>Title</h3>
                <small>Be Specific & Imaging You are asking a Question to another person</small>
                <input type='text' placeholder='Add Question Title' />
              </div>
            </div>
            <div className='question-option'>
              <div className='title'>
                <h3>Body</h3>
                <small>Include All Information Someone would need to Answer your Question</small>
                <ReactQuill className='react-quill' theme='snow' />
              </div>
            </div>
            <div className='question-option'>
              <div className='title'>
                <h3>Tags</h3>
                <small>Add up to 5 tags to describe what your question is about</small>
                {/* <TagsInput name='tags' placeHolder='Press Enter to add new tag' /> */}
              </div>
            </div>
          </div>
        </div>
        <button className='button'>Add Your Question</button>
      </div>
    </div>
  );
};

export default Question;
