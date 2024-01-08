import React from 'react'

export const Post = (props) => {
  return (
    <div className='p-5 rounded-2xl shadow-2xl w-84 hover:bg-orange-200'>
        <img src={`${props.img}`} className='w-90 h-60 mb-4 rounded-xl'/>
        <button className='w-fit text-blue-600 bg-slate-100 rounded-lg p-2'>
            {props.title}
        </button>
        <h1 className='text-xl mb-6'>
            {props.desk}
        </h1>
        <p className=''>
            {props.date}
        </p>
    </div>
  )
}
