import React   from 'react'

export default function Pop({value}) { 
  return (
    <div  className='p-2 rounded-md   bg-red-200  w-1/2 flex flex-col  justify-start md:fex-row '>
       <span className='p-1 text-sm   font-serif font-semibold  text-black'>Value can't  be zero:{value} </span>
    </div>
  )
}
