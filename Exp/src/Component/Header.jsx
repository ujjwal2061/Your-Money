import React, { useContext, useEffect, useState }  from 'react'
import { ToogleContext } from '../Section/Slection'

export default function Header() {
  const {theme ,setTheme}=useContext(ToogleContext)
  const [toggle ,setToogle]=useState(theme)
  useEffect (()=>{
   document.body.style.background=theme==="dark"? '#333':"#fff"
  },[theme])
  const handleToogle =()=>{
    const newTheme=toggle==='dark'?'light':'dark';
    setToogle(newTheme);
    setTheme(newTheme)
  }
  return (
    <div className='p-2 relative '>
      <div className='flex flex-col  md:flex-row  justify-center items-center  gap-4 '>
           {/* ADD THE BUTOON  FOR THE Toogle*/ }
       <button  onClick={handleToogle} className=' absolute top-7 left-2 text-md  sm:left-36'> {toggle==='dark' ?<i className="fa-solid fa-sun bg-white px-2 py-1 rounded-full"></i>:<i className="fa-solid fa-moon bg-black rounded-full  text-white  mr-3 px-2 py-1"></i>}</button>
        <div className={`${toggle==="dark"?"bg-slate-50":"bg-white"} m-3 px-2  py-2 shadow-xl rounded-lg cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1  hover:scale-110 hover:bg-black duration-400`}>
        <h1 className="font-bungee " >Your Money Tracker </h1>
        </div>
        <a  className={`absolute mr-2 right-0 top-6   sm:right-24   flex flex-row items-center shadow-xl font-jetbrains rounded-md px-1 transition ease-in-out delay-150 hover:-translate-y-1  hover:bg-gray-800 hover:scale-110 duration-150 hover:text-white  ${toggle==="dark" ?"bg-white":"bg-white"} ' href='https://x.com/Ujjwal_2061 ' target='_blank'`}>
        <i className="fa-brands fa-square-x-twitter text-xl p-2"></i>
         <span className="hidden sm:block" >Follow</span>
        </a>
      </div>
    </div>
  )
}
