import React from 'react';

const Loader = () => {
  return (
    <div className='loader'>
      <p className='loader__title'>
        Shorting url
        <span className='loader__dot'>.</span>
        <span className='loader__dot'>.</span>
        <span className='loader__dot'>.</span>
      </p>
    </div>
  );
};

export default Loader;
