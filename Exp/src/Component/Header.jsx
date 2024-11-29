import React from 'react'

export default function Header() {
  return (
    <div className='p-2 relative '>
      <div className='flex flex-col  md:flex-row  justify-center  items-center  gap-4 '>
        <div className=' m-3 px-2  py-2 shadow-xl rounded-lg cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1  hover:scale-110 hover:bg-black duration-400'>
        <h1 className='font-bungee' >Your Money Tracker </h1>
        </div>
        <a  className='absolute mr-2 right-0 top-6  flex flex-row items-center shadow-xl font-jetbrains rounded-md px-2 transition ease-in-out delay-150 hover:-translate-y-1  hover:bg-gray-800 hover:scale-110 duration-150 hover:text-white  ' href='https://x.com/Ujjwal_2061 ' target='_blank'>
        <i className="fa-brands fa-square-x-twitter text-xl p-2"></i>
         <span className="hidden sm:block" >Follow</span>
        </a>
      </div>
    </div>
  )
}
