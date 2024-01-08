import React, { useState,useEffect, useRef } from 'react'
import { Post } from './Post';

export const Allpost = () => {
    const [datas,setdata]=useState([]);
    const [load,setload]=useState(6)
    const jref=useRef(10)
    useEffect(()=>{
      fetch('https://dev.to/api/articles')
      .then(res => res.json())
      .then(data => setdata(data))  
    },[]);
      let sets=[];
      let i=0;
      function loadmore(){
        setload(load+3)
       ``
      }
      datas.forEach((e)=>{
        i++;
        if(i<=load)
          sets.push(<Post title={e?.user.name} date={e?.created_at} desk={e?.title} img={e?.user.profile_image}/>)
      }) 
  return (
    <div>
        <div className='mx-[10%] mb-[10%]'>
            <h1 className='text-2xl mb-5'>All Blog Post</h1>
            <div className='flex justify-between' >
                <div className='flex gap-3'>
                    <li>All</li>
                    <li>Desing</li>
                    <li>Travel</li>
                    <li>Fation</li>
                    <li>Technology</li>
                    <li>Branding</li>
                </div>
                <hr/>
                <div>
                    <li>View All</li>
                </div>
            </div>
        </div>
        <div className=' grid grid-cols-3 gap-8 mx-[10%] justify-center mb-24'>
                {sets}
        </div>
        <div className='flex justify-center mb-28'>
        <button className=' rounded-lg  border-slate-500 bg-slate-300 w-fit p-1' onClick={loadmore}>Load More</button>
        </div>  
    </div>
  )
}
