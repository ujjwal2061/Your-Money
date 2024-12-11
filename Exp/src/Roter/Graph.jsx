import React from 'react'
import { Bar } from "react-chartjs-2"
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,Legend
)

export default function Graph({income,expensev,}) {
  const chartdata={
   labels:["Income","Expenses"],
   datasets:[
    {
      lable:"Your-Money",
      data:[income  && expensev],
      backgroundColor: [
        'rgba(75, 192, 192, 0.6)',  
        'rgba(255, 99, 132, 0.6)'   
      ],
      
      
      borderWidth:1,
      borderColor:"black",
      borderRadius: 10 
      
    }
   ]
  }
  const chartOPtions={
    responsive:true,
    plugis:{
      legend:{
        postion:'top',
        laable:{
          color:'blue',
            font:{
                size:16
            }
          }
        },
        title:{
          dispaly:true,
          text:'INcome vs Expenses',
        }
      }
    }
  

   
  return (
   <>
   <div className='shadow-lg flex flex-row justify-center items-center  w-1/2'>

    <Bar data={chartdata} options={chartOPtions}  />
   </div>
   </>

  )
}
