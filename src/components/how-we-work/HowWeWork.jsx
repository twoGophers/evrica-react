import React from 'react';
import EmptyBlock from '../ui/empty-block/EmptyBlock';
import './HowWeWork.scss';
import img from "../../assets/images/arrow.svg"

export default function HowWeWork({ howWeWork }) {
  return (
    <>
        <EmptyBlock height={100} />
        <div className="how-we-work container">
           <h3 className='title-block'>Как мы работаем</h3>
           <div className="how-we-work__block">
            { howWeWork.map (item => (
              <div key={item.id} className="how-we-work__block-item">
                <div className="how-we-work__block-item-head">
                  <img 
                    className='how-we-work__block-item-head-img' 
                    src={require(`../../assets/images/${item.image}`)} 
                    alt={require(`../../assets/images/${item.image}`)} 
                    srcSet={require(`../../assets/images/${item.image}`)} 
                  />
                  <div className="how-we-work__time">
                    <p>{item.time}</p>
                    { item.vector &&
                      <a href="/">
                      <img 
                        className='how-we-work__block-item-head-vector' 
                        src={require(`../../assets/images/${item.vector}`)} 
                        alt={require(`../../assets/images/${item.vector}`)} 
                        srcSet={require(`../../assets/images/${item.vector}`)} 
                      />
                      </a>
                    }
                  </div>
                </div>
                <div className="how-we-work__block-item-title">
                  <p>{item.title}</p> 
                </div>
                <div className="how-we-work__block-item-content">
                  <p>
                    {item.content}
                  </p>
                </div>
                <div className="how-we-work__block-item-text">
                  <p>
                    {item.text}
                  </p>
                </div>
              </div>
            )) }
           </div>
        </div>
        <EmptyBlock height={100} />
    </>
  )
}
