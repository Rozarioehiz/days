import React, { useState } from 'react'
import './Header.css'

const Header = () => {
  const daysOfWeeks=[
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  
  ]

  const [date,setDate] = useState(0)
 
const handlechange=()=>{
  setDate((e)=>(e===daysOfWeeks.length-1?0:e+1))
}
  return (
    <>
      
      <div className='body'>
        <h1>{daysOfWeeks[date]}</h1>

        <button onClick={handlechange}>Check Date</button>
      </div>
    </>
  )
}

export default Header
