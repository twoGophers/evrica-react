import React from 'react';
import './Button.scss';

export default function Button({ disabled, img, isImg, text}) {
  return (
    <button disabled={disabled} className="btn" type="text">
      { isImg &&
        <img src={img} alt={img} srcSet={img} />
      }
      <p className='btn-text'>{ text }</p>
    </button>
  )
}
