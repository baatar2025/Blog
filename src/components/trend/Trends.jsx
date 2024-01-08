import React from 'react'

export const Trends = (props) => {
  return (
    <div className=' relative flex flex-col'>
      <img src={`${props.img}`} alt="zaza" className=' lg:w-72 sm:w-32 h-80 rounded-2xl' />
      <div className=' bg-slate-50 absolute  w-[70%] h-[32%] bottom-4 left-4 rounded-xl p-4 flex flex-col alig'>
                <button className='bg-[#4B6BFB] text-white rounded-xl lg:p-2 sm:p-1 w-fit'>
                {props.title}
                </button>
                <p className=' text-black'>{props.descripts}</p>
      </div>
           
    </div>
  )
}
