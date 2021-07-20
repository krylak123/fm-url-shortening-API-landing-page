import React from 'react';

import PanelWrapper from './PanelWrapper';

const Main = () => {
  return (
    <main className='main'>
      <section className='main__intro intro'>
        <div className='intro__container container'>
          <div className='intro__img-wrap'>
            <img
              src='../images/illustration-working.svg'
              alt='illustration working'
              className='intro__img'
            />
          </div>
          <div className='intro__text-wrap'>
            <h1 className='intro__title'>More than just shorter links</h1>
            <p className='intro__text'>
              Build your brand’s recognition and get detailed insights on how
              your links are performing.
            </p>
            <button className='intro__btn btn'>Get Started</button>
          </div>
        </div>
      </section>

      <PanelWrapper />

      <section className='main__info info'>
        <div className='info__container container'>
          <div className='info__intro'>
            <h2 className='info__title'>Advanced Statistics</h2>
            <p className='info__text'>
              Track how your links are performing across the web with our
              advanced statistics dashboard.
            </p>
          </div>
          <div className='info__options'>
            <div className='info__option option'>
              <div className='option__icon-wrap'>
                <img
                  src='../images/icon-brand-recognition.svg'
                  alt='brand recognization icon'
                  className='option__icon'
                />
              </div>
              <h2 className='option__title'>Brand Recognition</h2>
              <p className='option__text'>
                Boost your brand recognition with each click. Generic links
                don’t mean a thing. Branded links help instil confidence in your
                content.
              </p>
            </div>
            <div className='info__option option option--stripes'>
              <div className='option__icon-wrap'>
                <img
                  src='../images/icon-detailed-records.svg'
                  alt='detailed records icon'
                  className='option__icon'
                />
              </div>
              <h2 className='option__title'>Detailed Records</h2>
              <p className='option__text'>
                Gain insights into who is clicking your links. Knowing when and
                where people engage with your content helps inform better
                decisions.
              </p>
            </div>
            <div className='info__option option'>
              <div className='option__icon-wrap'>
                <img
                  src='../images/icon-fully-customizable.svg'
                  alt='fully customizable icon'
                  className='option__icon'
                />
              </div>
              <h2 className='option__title'>Fully Customizable</h2>
              <p className='option__text'>
                Improve brand awareness and content discoverability through
                customizable links, supercharging audience engagement.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className='main__summation summation'>
        <h4 className='summation__title'>Boost your links today</h4>
        <button className='summation__btn btn'>Get Started</button>
      </section>
    </main>
  );
};

export default Main;
