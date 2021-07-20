import React from 'react';

const Result = ({ linkFrom, linkTo }) => {
  return (
    <div className='result'>
      <div className='result__links-wrap'>
        <p className='result__from'>{linkFrom}</p>
        <p className='result__to'>{linkTo}</p>
      </div>
      <button className='result__btn'>Copy</button>
    </div>
  );
};

export default Result;
