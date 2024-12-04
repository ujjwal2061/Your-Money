import React, { useEffect, useState } from 'react'
import {useRef} from 'react'
import Pop from './Pop';

export default function Content() {
  const spanRef = useRef(null);
  const [total ,setTotal]=useState(0);
  const [inputvalue,setInputvalue]=useState("")
  const [name,setName]=useState("");
  const [amount,setAmount]=useState("")
  const [allOver,setAllover]=useState([]);
  const [NewTotalValue,setNewTotalValue]=useState("") 
  const [showPop, setShowPop] = useState(false); 
  const  showPopHandler =()=> setShowPop(true);

 

  const handlebtn=(event)=>{
    event.preventDefault()
    // pass the value to pop as a props 
      if(parseFloat(inputvalue)== 0){
        showPopHandler();
      }else{
        setTotal((total)=>total+parseFloat(inputvalue))
        setInputvalue("")
        setInputvalue("")

      }
      //-> the parseFloat is use to convert the inputvalue to the number 
  }

  const handleraddbtn=(e)=>{
      e.preventDefault();
      //-> object of the NewEpensev that store the name and amount  
     const newExpensev= {
      name,
     amount:parseFloat(amount)
    }
      const Newtotal=NewTotalValue ? parseFloat(NewTotalValue):total;
     const value=Newtotal-parseFloat(amount)
     // check the Reamaing value with the Zero 
     
     //-> this part show the all expense list in the array fromat where there is allover and newExpenseve 
    setAllover([...allOver,newExpensev])
    setNewTotalValue(value)
    setAmount("") 
    setName("")
    if (spanRef.current) {
      spanRef.current.style.backgroundColor = "red";
      spanRef.current.style.color="white";
    
    }  
  
  }
  return (
    <>
            
        <Pop Show={showPop}  setShowPop={setShowPop}/>
   <div className='p-4'>
      <div className='flex flex-row justify-center  gap-2 p-2  rounded-lg '>
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
        <div className='flex flex-row justify-center  gap-2 p-1 rounded-lg'>
        <div className='bg-gray-600 py-2 px-2 flex flex-col justify-center  items-start rounded-lg gap-2 md:flow-row   sm:flex-row '>
          <form onSubmit={handleraddbtn}>
          <label className='p-1  font-itim font-semibold text-lg'>Expens Name</label>
          <input className='m-2  px-2 py-1 border-2 rounded-md placeholder:font-mono outline-none   focus: focus:border-green-600' type='text' placeholder='Exp Name..' value={name} onChange={(e)=>setName(e.target.value)} />
          <label className=' p-1 font-itim font-semibold text-lg '>Amount</label>
          <input className='m-2  px-2 py-1 border-2 rounded-md placeholder: font-mono outline-none   md:w-64  sm:w-52 focus:border-red-600' type='number' placeholder='Amount..' value={amount} onChange={(e)=>setAmount(e.target.value)} />
          <button  className=" px-4 py-2 bg-rose-600 font-mono   tracking-tight  text-white text-sm rounded-md font-semibold hover:shadow-lg hover:bg-rose-400 cursor-pointer  hover:text-gray-600"  type='submit'>Add</button>
          </form>
        </div>
      </div>
      <div className='p-4'>
          <ul className=' px-3 py-2  mt-2 text-black flex flex-col rounded-lg '>
             {allOver.map((exp, index)=>(
            <li className='p-2 flex flex-row justify-around ' key={index}><span className='border-r-4  font-mono font-semibold border-gray-600 text-lg border-b-0 border-t-0 border-l-0  w-32 px-1'>{exp.name}</span><span className='border-r-4  font-itim font-semibold  border-b-0 border-t-0 border-l-0 w-32 px-1'>Rs:{exp.amount}</span> </li> ))}
           </ul>
     </div>
    </div>
      <div className='p-3 m-2 flex flex-col items-center justify-center md:flex-row '>
        <span  ref={spanRef} className='transition ease-in-out delay-150 hover:-translate-y-1  hover:scale-110  hover:bg-green-600 cursor-pointer  font-mono  bg-green-500 font-semibold text-black px-3 py-2 rounded-md'>Reaming Balance:{NewTotalValue}</span>
      </div>
  </div>

  
    </>
  )
}
  