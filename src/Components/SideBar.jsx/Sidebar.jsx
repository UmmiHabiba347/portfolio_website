import React, { useState } from 'react'
import './Sidebar.css'
import Links from './Links/Links'
import { motion } from 'framer-motion';
import ToggleButton from './ToggleButton/ToggleButton'
// import { delay } from 'framer-motion/dist';
// import { type } from '@testing-library/user-event/dist/type';

function Sidebar() {
const [open,setOpen] = useState(false)


const variants = {
    open:{
        clipPath:"circle(1200px at 50px 50px )",
        transition:{
            type:"spring",
            stiffness: 20,
            
        }
    },
    closed: {
        clipPath: "circle (30px at 50px 50px)",
        transition:{
            delay:0.5,
            type:"spring",
            stiffness:400,
            damping:40,
        }
    }

}

  return (
    <>
    <motion.div animate={open ? "open" : "closed"} className='flex flex-col items-center justify-between bg-white text-[#333] '>
       
        <motion.div variants={variants} className='fixed w-[400px] bg-white top-0 left-0 bg-[#fff]'>
        
            <Links />
        </motion.div>
            <ToggleButton setOpen={setOpen} />
    </motion.div>
    </>
  )
}

export default Sidebar