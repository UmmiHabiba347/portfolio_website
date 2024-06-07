import React from 'react'
import './Navbar.css'
import img1 from '../../assets/iconImages/Facebook_icon.svg.png'
import img2 from '../../assets/iconImages/Instagram_icon.png'
import img3 from '../../assets/iconImages/174857in.png'
import Sidebar from '../SideBar.jsx/Sidebar'



function Navbar() {
  return (
    <>
    <div className='Navbar h-[100px]'>
        {/* SIDEBAR */}
        <Sidebar />
        <div className="wrapper h-[100%] max-w-[1366px] m-auto items-center flex justify-between ">
             <span>Umm-i-Habiba</span>
        <div className='flex gap-2'>
            <div><img height={'40px'} width={'40px'} src={img1} alt="" /></div>
            <div><img height={'40px'} width={'40px'} src={img2} alt="" /></div>
            <div><img height={'40px'} width={'40px'} src={img3} alt="" /></div>
        </div>

        </div>

    </div>
    </>
  )
}

export default Navbar;