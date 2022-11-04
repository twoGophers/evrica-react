import React from 'react';
import './Advantages.scss';
import EmptyBlock from '../ui/empty-block/EmptyBlock';

export default function Advantages({advantages}) {
  return (
    <>
        <EmptyBlock height={80} />
        <div className='advantages container'>
            <h3 className='title-block'>Преимущества сервиса</h3>
            <div className="advantages__block">
                { advantages.map( item => (
                    <div key={item.id} className="advantages__block-item">
                        <img 
                            src={require(`../../assets/images/advantages/${item.images}`)} 
                            alt={require(`../../assets/images/advantages/${item.images}`)}  
                            srcSet={require(`../../assets/images/advantages/${item.images}`)}  
                        />
                        <div className="advantages__block-item-content">
                            <p className='advantages__block-item-title'>
                                {item.title}
                            </p>
                            <p className='advantages__block-item-text'>
                                {item.text}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        <EmptyBlock height={72} />
    </>
  )
}
