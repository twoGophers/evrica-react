import React, { useEffect, useState } from 'react';
import './FuelWithDelivery.scss';
import EmptyBlock from '../ui/empty-block/EmptyBlock';
import PhoneInput from 'react-phone-number-input/input';

import {
    Menu,
    MenuItem,
    MenuButton,
    SubMenu,
    MenuHeader,
    MenuDivider,
    MenuRadioGroup
  } from "@szhsin/react-menu";
  import "@szhsin/react-menu/dist/index.css";
import Button from '../ui/button/Button';

export default function FuelWithDelivery({ fuel }) {
    const [phone, setPhone] = useState();
    const [nameFuel, setNameFuel] = useState('ДТ');
    const [range, setRange] = useState(0);
    const [price, setPrice] = useState(0);
    const [total, setTotal] = useState(0);
    const [difference, setDifference] = useState(0);
    const [fuelName, setFuelName] = useState(0);

    const checkedFuel = (item) => {
        setPrice(item.cash);
        setDifference(item.cash - item.noncash);
        handleCost(fuelName);
    }

    const handleCost = (e) => {
        setFuelName(e)
        setTotal(fuelName * price);
    }

  return (
    <>
        <EmptyBlock height={74} />
        <div className='fuel-with-delivery container'>
            <h3 className='title-block'>Топливо с доставкой</h3>
            <form action="">
                <div className="fuel-with-delivery__questionnaire questionnaire">
                    <div className="questionnaire__block">
                        <label htmlFor="select">Вид топлива</label>
                        <div className='questionnaire__field'>
                            <Menu  menuButton={<MenuButton className='form-input'>{nameFuel}</MenuButton>}>
                                { fuel.map(name => (
                                    <SubMenu key={name.id} label={name.name}>
                                        <MenuRadioGroup
                                            >
                                            {
                                                name.euro.map( euroName => (
                                                    <SubMenu key={euroName.id} label={euroName.name}>
                                                        {
                                                            euroName.nameFirm.map( nameFirm => (
                                                                <MenuItem onClick={() => {
                                                                    checkedFuel(nameFirm)
                                                                    setNameFuel(nameFirm.name)
                                                                    }} key={nameFirm.id} value={nameFirm.name}>
                                                                    {nameFirm.name}
                                                                </MenuItem> 
                                                            ))
                                                        }
                                                    </SubMenu>
                                                ))
                                            }
                                        </MenuRadioGroup>
                                    </SubMenu>
                                ))}
                            </Menu>
                        </div>
                    </div>
                    <div className="questionnaire__block">
                        <label htmlFor="range">Объем топлива</label>
                        <div className='questionnaire__field'>
                            <p className='form-input'>{range} литров</p>
                            <input type="range" name="" id="range"  onChange={(e) => {
                                setRange(e.target.value)
                                handleCost(e.target.value)
                                }} value={range}  />
                        </div>
                    </div>
                    <div className="questionnaire__block">
                        <label htmlFor="localDelivery">Место доставки</label>
                        <div className='questionnaire__field'>
                            <input className='form-input' placeholder='Укажите место' type="text" name="" id="localDelivery" />
                        </div>
                    </div>
                    <div className="questionnaire__block">
                        <label htmlFor="nameDelivery">Ваше имя</label>
                        <div className='questionnaire__field'>
                            <input className='form-input' placeholder='Иван' type="text" name="" id="nameDelivery" />
                        </div>
                    </div>
                    <div className="questionnaire__block">
                        <label htmlFor="phoneDelivery">Номер телефона</label>
                        <div className='questionnaire__field'>
                        <PhoneInput
                            id="phoneDelivery"
                            className='form-input'
                            defaultCountry="RU"
                            type="phone"
                            placeholder='+7 (___) ___-__-__'
                            name="phone"
                            value={phone}
                            onChange={setPhone}
                            />
                        </div>
                    </div>
                </div>
                <div className="fuel-with-delivery__calculator calculator">
                    <div className="calculator-total">
                        <p className='calculator-total__title'>ИТОГО</p>
                    </div>
                    <hr />
                    <div className="calculator-cost">
                        <p className='calculator-cost__name'>Стоимость топлива</p>
                        <p className='calculator-cost__name'>{ (range * price).toFixed(2) || 77350.00.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1 ') } ₽</p>
                    </div>
                    <hr />
                    <div className="calculator-liter liter">
                        <div className='liter-head'>
                            <p className='calculator-cost__name'>Цена за литр:</p>
                            <p className='calculator-cost__name'>{price.toFixed(2) || 45.50} ₽</p>
                        </div>
                        <p className='calculator__text'>Цена и стоимость указаны ориентировочно.</p>
                        <p className='calculator__text'>Точные цену и стоимость собщит наш менеджер при подтверждении заявки.</p>
                    </div>
                    <hr />
                    <div className="calculator-benefit benefit">
                        <div className='benefit-head'>
                            <p className='calculator-cost__name'>Выгода:</p>
                            <p>{difference.toFixed(2)} ₽</p>
                        </div>
                        <p className='calculator__text'>При цене на АЗС  49.59 ₽  за литр, цены актуальны на  23.11.2020 г. </p>
                    </div>
                    <hr />
                    <div className="calculator-btn">
                        <Button text={'Заказать топливо'} />
                    </div>
                </div>
            </form>
            <EmptyBlock height={73} />
        </div>
    </>
  )
}
