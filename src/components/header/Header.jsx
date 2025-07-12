import React from 'react'
import logo from "../../assets/logo.svg"
import arrow from "../../assets/ChevronDown.svg"
import avtr from "../../assets/Profile.svg"
import cart from "../../assets/Cart.svg"

const Header = () => {
  return (
    <header className='py-[21px]'>
        <div className="container">
            <div className="flex items-center justify-between">
                <div className="">
                    <img src={logo} alt="" />
                </div>
                <ul className='flex justify-between items-center gap-[82px]'>
                    <li className='text-[16px] font-medium text-center'><a href="#" className='flex items-center gap-1 justify-center'>Discover <span><img src={arrow} alt="" /></span></a></li>
                    <li className='text-[16px] font-medium text-center'><a href="#">About</a></li>
                    <li className='text-[16px] font-medium text-center'><a href="#">Contact</a></li>
                </ul>
                <div className="flex justify-center items-center gap-[20px]">
                    <img src={avtr} alt="" />
                    <img src={cart} alt="" />
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header