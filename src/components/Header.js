import React from 'react';

const Header = () => {
  const handleHambugerOnClick = () => {
    document.querySelector('.nav').classList.toggle('active');
  };

  return (
    <header className='header'>
      <div className='header__container container'>
        <div className='header__logo-wrap'>
          <a href='/' className='header__logo-link'>
            <img
              src='../images/logo.svg'
              alt='site logo'
              className='header__logo'
            />
          </a>
        </div>
        <nav className='header__nav nav'>
          <ul className='nav__container'>
            <li className='nav__element'>
              <a href='/' className='nav__link'>
                Features
              </a>
            </li>
            <li className='nav__element'>
              <a href='/' className='nav__link'>
                Pricing
              </a>
            </li>
            <li className='nav__element'>
              <a href='/' className='nav__link'>
                Resources
              </a>
            </li>
          </ul>
          <div className='nav__btns-wrap'>
            <button className='nav__btn'>Login</button>
            <button className='nav__btn nav__btn--marked'>Sign Up</button>
          </div>
        </nav>
        <div onClick={handleHambugerOnClick} className='header__hamburger-menu'>
          <span className='header__hamburger-menu-icon fas fa-bars'></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
