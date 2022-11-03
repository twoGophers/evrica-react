import React from 'react';
import './Header.scss';
import Logo from '../../assets/images/logo.svg';
import Phone from '../../assets/images/phone.svg';
import Button from '../ui/button/Button';
import User from '../../assets/images/user.svg';

export default function Header() {
  return (
    <header className='header container'>
        <div className="header__logo">
          <img src={Logo} alt={Logo} srcSet={Logo} />
        </div>
        <div className="header__contact">
          <div className="phone">
            <img src={Phone} alt={Phone} srcSet={Phone} />
            <p className='phone__number'>8 (495) 127-82-80</p>
          </div>
          <Button img={User} isImg={true} text={'Напишите нам'} />
          <Button isImg={false} text={'Личный кабинет'} />
        </div>
    </header>
  )
}
