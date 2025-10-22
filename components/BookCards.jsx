import React from 'react'

function BookCards({ image, title, description }) {
  return (


<div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col">
      <div className="relative w-full h-56">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white px-2 py-1 text-xs font-semibold uppercase tracking-wide">
          {title.length > 30 ? title.slice(0, 30) + "..." : title}
        </div>
      </div>

      <div className="p-3 flex-grow flex flex-col justify-between">
        <h3
          className="text-base font-semibold text-center truncate"
          title={title}
        >
          {title}
        </h3>
      </div>
    </div>
  )
}

export default BookCards