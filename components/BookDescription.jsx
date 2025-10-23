import React from 'react'

export default function BookDescription({ title, description }) {
  return (
    <div className='p-4 font-serif'>
        {/* Title */}
        <h1 className='text-xl'>{title}</h1>
        <p className='text-sm'>{description}</p>
    </div>
  )
}
