import React from 'react'
import { useState } from 'react'
import logo from './../assets/images/disney-logo.png'
import user from './../assets/images/user profile.png'
import { HiHome,HiMagnifyingGlass,HiStar,HiPlayCircle,HiTv } from 'react-icons/hi2';
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import HeaderItems from './HeaderItems';

function Header() {
const [toggle,setToggle]=useState(false);
const menu=[{
            name:'Home',
            icon:HiHome},
            {
            name:'Search',
            icon:HiMagnifyingGlass},
            {
            name:'Watchlist',
            icon:HiPlus},
            {
            name:'Originals',
            icon:HiStar},
            {
            name:'Movies',
            icon:HiPlayCircle},
            {
            name:'Series',
            icon:HiTv}
            ]
  return (
    <div className='flex items-center justify-between p-5'>
        
        <div className='flex items-center gap-12'>
                    <img src={logo} className='w-[70px] object-cover md:w-[115px] mx-8'/>   
            <div className="hidden gap-8 md:flex">
                     {menu.map((item,index)=>(
                        <HeaderItems key={index} name={item.name} Icon={item.icon}/>
                     ))}
            </div>
        
            <div className="flex gap-5 md:hidden">
                     {menu.map((item,index)=>index < 3 && (
                        <HeaderItems key={index} name={''} Icon={item.icon}/>
                    ))}
            </div>
        
            <div className='md:hidden' onClick={()=> setToggle(!toggle)}>
                        <HeaderItems name={''} Icon={HiDotsVertical}/>
            
                 {toggle ?
                    <div className='absolute mt-3 bg-[#121212] border-[1px] border-gray-700 p-3 px-5 py-4 '>
                    {menu.map((item,index)=>index > 2 && (
                        <HeaderItems key={index} name={item.name} Icon={item.icon}/>
                    ))}
                    </div>
                :null}
            </div>
        
        </div>
        
        <div>
            <img src={user} className='w-[40px] rounded-full m-5'/>
        </div>
    </div>
  )
}

export default Header