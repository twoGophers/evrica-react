import React from 'react'

export default function EmptyBlock({ height }) {
  return (
    <div className='empty-block' style={{ height : `${height}px` }}></div>
  )
}
