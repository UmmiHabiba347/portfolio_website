import { Button } from '@material-tailwind/react'
import React from 'react'

function ToggleButton({setOpen}) {
  return (
    <>
     <Button onClick={()=>setOpen((prev) => !prev)} className='fixed w-[50px] h-[50px] rounded-[50%] h-[25px] bg-transparent border border-none top-[25px]  '>
        ToggleButton</Button>
    </>
  )
} 

export default ToggleButton