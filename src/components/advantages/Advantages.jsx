import React from 'react';
import './Advantages.scss';
import EmptyBlock from '../ui/empty-block/EmptyBlock';

export default function Advantages() {
  return (
    <>
        <EmptyBlock height={80} />
        <div className='advantages container'>
            <h3 className='title-block'>Преимущества сервиса</h3>
            <div className="advantages__block">
                <div className="advantages__block-item">
                    <img src="" alt="" srcSet="" />
                    <div className="advantages__block-item-content">
                        <p className='advantages__block-item-title'>
                            Качество топлива
                        </p>
                        <p className='advantages__block-item-text'>
                            Aliquam rhoncus et massa adipiscing risus leo nec lacus, sagittis. Eu, purus ac nisi sit eget sed et, adipiscing felis.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
