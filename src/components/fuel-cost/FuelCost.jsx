import React, { useState } from 'react';
import './FuelCost.scss';
import EmptyBlock from '../ui/empty-block/EmptyBlock';


const NameFull = ({ euro }) => {
    return(
        <>
        { euro.map( itemEuro => (
            <>
                <tr>
                    <td rowSpan={4}>{itemEuro.name}</td>
                </tr>
                {itemEuro.nameFirm.map( firm => (
                    <tr key={firm.id}>
                        <td>{firm.name}</td>
                        <td>{ firm.cash === 0 ? '-' : `${firm.cash} р.`} </td>
                        <td>{ firm.noncash === 0 ? '-' : `${firm.noncash} р.`}</td> 
                    </tr>
                ))}
            </>
        ))} 
        </>
    )
}

export default function FuelCost({ fuel }) {

  return (
    <>
        <div className='fuel-cost container'>
            <h3 className='title-block'>Стоимость топлива</h3>
            <table>
                <thead className='table-title'>
                    <tr>
                        <th className='table-title-item'>Сорт топлива</th>
                        <th className='table-title-item'>Экологический класс</th>
                        <th className='table-title-item'>Производитель</th>
                        <th className='table-title-item'>Наличный расчет</th>
                        <th className='table-title-item'>Безналичный расчет</th>
                    </tr>
                </thead>
                { fuel.map(item => (
                    <tbody key={item.id} className='table-body'>
                        <tr>
                            <td className='table-name' rowSpan="12">{item.name}</td>
                        </tr>
                        <NameFull euro={item.euro} />
                    </tbody>
                )) }
            </table>
        </div>
        <EmptyBlock height={100} />
    </>
  )
}
