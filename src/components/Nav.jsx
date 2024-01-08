import React, { useState,useEffect } from 'react'
import { Metablg } from './metablogsvgs/Metablg'
import { Search } from './metablogsvgs/Search'
import Link from 'next/link';

export const Nav = () => {
    const [data,setdata]=useState([]);
    const [index,setindex]=useState(0);
useEffect(()=>{
    fetch('https://dev.to/api/articles')
    .then(res => res.json())
    .then(data => setdata(data))  
  },
  []
  )
  function sumclick(){
    setindex(index+1)
    // console.log(index)
  }
  function minus(){
    if(index>=0){
        setindex(index-1)
    }   
  }
  let Database = data[index];

    return (
    <>
        <div className='flex flex-col justify-center my-10  p-3 ' >
            <div className='flex justify-around mx-[10%]'>
                <div>
                 <Metablg/>
                </div>
                <ul className='text-xl flex gap-4 '>
                    <Link href='/home'>Home</Link>
                    <Link href='/blog'>Blog</Link>
                    <Link href='/contact'>Contact</Link>                   
                </ul>
                <div className='flex bg-slate-100 p-1 gap-1 rounded-sm'>
                    <input className=' bg-slate-100 rounded-sm '></input>
                    <button> <Search/> </button> 
                </div>
            </div>
        </div>  
         <div className='flex justify-center mx-[10%] my-[5%] relative text-center'>
            {/* <img src='/img/Imagewoman.png' className='w-[100%]'/> */}
            <img src={`${Database?.social_image}`} className='w-[100%]'/>
            <div className='absolute bg-slate-50 w-[40%] h-[32%] bottom-4 left-4 rounded-xl lg:p-6 sm:p-4 flex flex-col alig'>
                <button className='bg-[#4B6BFB] text-[white] rounded-xl lg:p-2 sm:p-1 w-fit'>
                    {Database?.user.name}
                </button>
                <p className='lg:text-2xl sm:text-base w-[100%] flex flex-wrap'>{Database?.title}</p>
                <p>{Database?.published_timestamp}</p>
            </div>
           
        </div>
        <div className='flex justify-center right-11 gap-5'>
            <button onClick={minus} className='bg-slate-300 rounded-lg border-black p-3 '> back</button>
            <button onClick={sumclick} className='bg-slate-300 rounded-lg border-black p-3' > next </button>
        </div>
        <div>
           
        </div>
    </> 
  )
}
