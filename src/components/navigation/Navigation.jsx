import React from 'react';
import './Navigation.scss';
import Arrow from '../../assets/images/arrow.svg';

export default function Navigation() {
  return (
    <nav className='nav container'>
        <div className="nav__dropdown">
            <button className="nav__dropbtn">
                <p>Доставка топлива</p>
            </button>
        </div>
        <div className="nav__dropdown">
            <button className="nav__dropbtn">
                <p>Топливные карты</p>
                <img className='nav__arrow' src={Arrow} alt={Arrow} srcSet={Arrow} />
            </button>
            <div className="nav__dropdown-content">
                <a href="#">One карта</a>
                <a href="#">Two карта</a>
                <a href="#">Three карта</a>
            </div>
        </div>
        <div className="nav__dropdown">
            <button className="nav__dropbtn">
                <p>АЗК</p>
                <img className='nav__arrow' src={Arrow} alt={Arrow} srcSet={Arrow} />
            </button>
            <div className="nav__dropdown-content">
                <a href="#">One АЗК</a>
                <a href="#">Two АЗК</a>
                <a href="#">Three АЗК</a>
                <a href="#">Four АЗК</a>
            </div>
        </div>
        <div className="nav__dropdown">
            <button className="nav__dropbtn">
                <p>Цены на топливо</p>
            </button>
        </div>
        <div className="nav__dropdown">
            <button className="nav__dropbtn">
                <p>О компании</p>
                <img className='nav__arrow' src={Arrow} alt={Arrow} srcSet={Arrow} />
            </button>
            <div className="nav__dropdown-content">
                <a href="#">One о компании </a>
                <a href="#">Two о компании</a>
                <a href="#">Three о компании</a>
            </div>
        </div>
        <div className="nav__dropdown">
            <button className="nav__dropbtn">
                <p>Контакты</p>
            </button>
        </div>
    </nav>
  )
}
