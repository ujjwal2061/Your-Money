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

export default function Graph({income,expensev,Epenseve}) {
  const chartdata={
    
   labels:["Income","Reaming-Blance","Epenseve"],
   //Store the Data of the Income Reaming-Balance and Expenses
   datasets:[ 
    //Total-Income
    {
      label:"Your-Income",
      data:[income ,],
      backgroundColor: [
        'rgba(75, 192, 192, 0.6)',  ],
        borderWidth:1,
        borderColor:"black",
        borderRadius: 10 ,   
    },
      //Reaming Balance// Expenses Section Graph 
    {
      label:"Reamuing-Blance",
      data:[0,Epenseve],
      backgroundColor: ['rgba(0, 255, 0, 0.6)'],
      borderWidth:1,
      borderColor:"black",
      borderRadius:10 
    },
  // Expenses Section Graph 
    {
        label:"Your-Expenses",
        data:[0,0,expensev],
        backgroundColor: ['rgba(255, 99, 132, 0.6)'],
        borderWidth:1,
        borderColor:"black",
        borderRadius:10 
      },
    ]
  }
  

  const chartOPtions={
    responsive:true,
    plugins:{
      legend:{
        position:'top',
        labels:{
          color:'black',
            font:{
                size:16
            }
          }
        },
       
      }
    }
  

   
  return (
   <>
    <Bar data={chartdata} options={chartOPtions}   />
   </>

  )
}
