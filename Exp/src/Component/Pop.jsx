import React   from 'react'

export default function Pop({ Show, setShowPop }) {
  if (!Show) return null;

  return (
    <div className='fixed top-0 left-1/2 transform -translate-x-1/2 bg-opacity-25 backdrop-blur-md w-48 rounded-lg bg-white shadow-lg flex flex-row justify-between items-center p-4 sm:w-64 md:w-72 lg:w-80 xl:w-96'>
      <p className='text-sm font-serif font-semibold text-black sm:text-base md:text-lg'>
        Value Can't be zero
      </p>
      <button onClick={() => setShowPop(false)} className='text-gray-700 hover:text-gray-900 text-lg'>
        <i className="fa-solid fa-xmark"></i>
      </button>
    </div>
  );
}  