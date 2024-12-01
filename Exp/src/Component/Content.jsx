import React, { useState } from 'react'

export default function Content() {
  const [total ,setTotal]=useState(0);
  const [inputvalue,setInputvalue]=useState("")
  const [name,setName]=useState("");
  const [amount,setAmount]=useState("")
  const [allOver,setAllover]=useState([]);
  const [NewTotalValue,setNewTotalValue]=useState("")

  const handlebtn=(event)=>{
    event.preventDefault()
    //-> the parseFloat is use to convert the inputvalue to the number 
    setTotal((total)=>total+parseFloat(inputvalue))
    setInputvalue("")
  }
  const handleraddbtn=(e)=>{
      e.preventDefault();
      //-> object of the NewEpensev that store the name and amount  
     const newExpensev= {
      name,
     amount:parseFloat(amount)
    }
     const Newtotal=total-parseFloat(amount)
     //-> this part show the all expense list in the array fromat where there is allover and newExpenseve 
    setAllover([...allOver,newExpensev])
    setNewTotalValue(Newtotal)
    setAmount("") 
    setName("")
 
  }
  return (
    <>
    <div className='p-4'>
      <div className='flex flex-row justify-center  gap-2 p-2  rounded-lg'>
        <div className='flex flex-col  shadow-2xl gap-3 items-center justify-center text-black  px-8 py-4 rounded-md md:flex-row sm:flex-col'>
        <form onSubmit={handlebtn} >
          <label className='p-1  font-semibold font-jetbrains'>Income</label>
          <input  className='m-2 border-2 transition ease-in-out delay-150  hover:scale-110 duration-400 px-2 py-1 rounded-md  focus:outline-none placeholder:font-extralight' type="number" value={inputvalue} placeholder='amout please.. ' onChange={(e)=>setInputvalue(e.target.value)} />
          <button className=" ml-2 px-5 py-2  bg-black text-white text-sm rounded-md font-semibold hover:shadow-lg hover:bg-black/[0.8] " type="submit">Add</button>
         </form>
       <p className='px-3 py-2 top-1 right-0  font-mono text-md bg-green-500 rounded-lg  text-white  hover:bg-green-600 cursor-pointer '>Total Income:{total}</p>
        </div>
      </div>

      <div className='p-3 m-2'>
        <div className='p-1 flex flex-row justify-center rounded-lg gap-2 '>
          <form onSubmit={handleraddbtn} className='p-3 flex  flex-row items-center justify-center gap-2  focus:bg-green-300 rounded-lg text-black'>
          <label className='p-1  font-itim font-semibold text-lg'>Expens Name</label>
          <input className='m-2  px-2 py-1 border-2 rounded-md placeholder:font-mono outline-none  focus:border-green-600' type='text' placeholder='Exp Name..' value={name} onChange={(e)=>setName(e.target.value)} />
          <label className='p-1 font-itim  font-semibold text-lg'>Amount</label>
          <input   className=" m-2 px-2 py-1 rounded-lg placeholder:font-mono outline-none border-2 focus:border-red-600" type='number' placeholder='Amount..' value={amount} onChange={(e)=>setAmount(e.target.value)} />
          <button className=" ml-2 px-5 py-2  bg-rose-700 text-white text-sm rounded-md font-semibold hover:shadow-lg hover:bg-rose-500 " type="submit">Add</button>
          </form>
        </div>
      </div>
      <ul>
      {allOver.map((exp, index)=>(
  <li key={index}><span>{exp.name}</span>::<span>{exp.amount}</span></li>
      ))}
    </ul>
    <p>Reaming Your Money:{NewTotalValue}</p>
    
      </div>
    
    </>

    
  )
}
  