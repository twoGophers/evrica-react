import React, {useState} from 'react';
import './FuelDelivery.scss';
import Button from '../ui/button/Button.jsx';
import PhoneInput from 'react-phone-number-input/input';

export default function FuelDelivery() {

    const [ name, setName ] = useState();
    const [ phone, setPhone ] = useState();
    const [ checkbox, setCheckbox] = useState(Boolean);

  return (
    <div className='delivery container'>
        <h1>Доставка топлива</h1>
        <div className="delivery__quick-order">
            <h3 className='title-block'>Быстрый <span>заказ топлива</span></h3>
            <form className='delivery-form form' action="" method="post">
                <div className='form-block'>
                    <label htmlFor="name">Ваше имя</label>
                    <input 
                        className='form-input'
                        id="name" 
                        type="text" 
                        placeholder='Иван' 
                        name="name" 
                        onChange={(e) => setName(e.target.value)} 
                        />
                    {/* Не успел ошибк прикрутить */}
                    <div className="invalid" style={ name ? { opacity: 0 } : { opacity : 0 }}>Введите имя</div>
                </div>
                <div className='form-block'>
                    <label htmlFor="phone">Ваше имя</label>
                    <PhoneInput
                        id="phone"
                        className='form-input'
                        defaultCountry="RU"
                        type="phone"
                        placeholder='+7 (___) ___-__-__'
                        name="phone"
                        value={phone}
                        onChange={setPhone}
                        />
                    {/* Не успел ошибк прикрутить */}
                    <div className="invalid" style={ phone ? { opacity: 0 } : { opacity : 0 }}>Введите номер телефона</div>
                </div>
                <div className='form-block'>
                    <Button disabled={checkbox && name && phone ? false : true} isImg={false} text={'Заказать топливо'} />
                </div>
            </form>
            <div className="delivery-approval approval-checkbox">
                <input className='checkbox__input' type="checkbox" name="" id="checkbox_1" />
                <label className='checkbox__label' onClick={() => setCheckbox(!checkbox)} htmlFor="checkbox_1">Я согласен с условиями обработки данных</label>
            </div>
        </div>
    </div>
  )
}
