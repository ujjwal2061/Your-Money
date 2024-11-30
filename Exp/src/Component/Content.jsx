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
    <div>
      <form onSubmit={handlebtn} >
        <label>Income:</label>
        <input type="number"
        value={inputvalue}
        onChange={(e)=>setInputvalue(e.target.value)} />
        <button type='submit' >Add to Total Money</button>
      </form>
      <p>Your First Add Money is:{total}</p>
      <div>
        <label>Expens Name:</label>
        <input type='text'
        placeholder='Exp Name..'
        value={name}
        onChange={(e)=>setName(e.target.value)} />
        <label>Amount:</label>
        <input type='number'
        placeholder='Amount....'
        value={amount}
        onChange={(e)=>setAmount(e.target.value)} />
         <button onClick={handleraddbtn}>Add</button>
      </div>
      <ul>
      {allOver.map((exp, index)=>(
  <li key={index}><span>{exp.name}</span>::<span>{exp.amount}</span></li>
      ))}
    </ul>
    <p>Reaming Your Money:{NewTotalValue}</p>
      </div>
  )
}
  