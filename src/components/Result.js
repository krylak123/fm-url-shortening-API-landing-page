import React from 'react';

const Result = () => {
  return (
    <div className='result'>
      <div className='result__links-wrap'>
        <p className='result__from'></p>
        <p className='result__to'></p>
      </div>
      <button className='result__btn'>Copy</button>
    </div>
  );
};

export default Result;
