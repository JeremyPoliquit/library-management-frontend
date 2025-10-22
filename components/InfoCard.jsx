import React from "react";

function InfoCard({ title, icon: Icon, count, over, items, buttonText }) {
  return (
    <div className="flex flex-col items-center p-4 border rounded-xl w-64">
      <div className="flex justify-center items-center gap-2 mb-2">
        <Icon className="w-5 h-5" />
        <h2 className="text-xl font-semibold font-serif">{title}</h2>
      </div>
      <p className="text-3xl text-center font-sans font-bold">
        {count}
        <span className="text-sm font-normal">{over}</span>
      </p>

      <div className="flex justify-center items-center">
        <ul className="text-sm mt-2 space-y-2">
          {items.map((item, idx) => (
            <li key={idx} className="font-serif">
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex justify-center">
        <button className="mt-3 w-48  bg-black text-white rounded-md py-1">
          {buttonText}
        </button>
      </div>
    </div>
  );
}

export default InfoCard;
