import React   from 'react'

export default function Pop({Show,setShowPop}) { 
  if (!Show) return null ;
  return (
    <div  className='  fixed  inset-0  bg-opacity-25 backdrop-blur-sm  rounded-md   bg-red-200  w-1/2 flex flex-col  justify-start md:fex-row '>
       <p className='p-1 text-sm   font-serif font-semibold  text-black'></p>
       <button onClick={()=>setShowPop(false)}>X</button>
    </div>
  )
}
