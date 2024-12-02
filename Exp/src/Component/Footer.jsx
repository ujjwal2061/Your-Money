import React from 'react'

export default function Footer() {
  return (
    <section className=' bottom-12  right-1 left-2 p-5   flex-col justify-center md:flex-row'>
       <div className='p-2  rounded-md  flex flex-col items-center gap-2 justify-center md:flow-row '>
       <div className='px-7 py-3 flex flex-row justify-center gap-6 text-black rounded-md'>
           <a href='https://x.com/Ujjwal_2061' target='_blank' ><i className="fa-brands fa-x-twitter"></i></a>
           <a href='https://github.com/ujjwal2061' target='_blank' ><i className="fa-brands fa-github"></i></a>
         </div>
         <p className="  underline font-itim text-xl">I will add more Feature in this Project && Don't Forget to Follow me</p>
         </div>
      
    </section>
  )
}
