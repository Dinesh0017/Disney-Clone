import React from 'react'

function HeaderItems({name,Icon}) {
  return (
    <div className='flex items-center gap-3 text-white text-[20px] font-semibold cursor-pointer 
    hover:underline underline-offset-8 mt-2 '>
        <Icon/>
        <h2 className=''>{name}</h2>
    </div>
  )
}

export default HeaderItems