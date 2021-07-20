import React from 'react';

const Form = ({ inputHandler, inputValue, sumbitHandler }) => {
  return (
    <form onSubmit={sumbitHandler} className='form'>
      <div className='form__container container'>
        <input
          onChange={inputHandler}
          value={inputValue}
          type='text'
          className='form__input form__input--error'
          placeholder='Shorten a link here...'
        />
        <label className='form__label form__label--error'>
          Please add a link
        </label>
        <input
          type='submit'
          value='Shorten it!'
          className='form__input form__input--btn'
        />
      </div>
    </form>
  );
};

export default Form;
