import { data } from 'autoprefixer'
import React, { useState,useEffect } from 'react'
import { Trends } from './Trends';

export const Trending = () => {
  const [datas,setdatas]=useState([]);

  useEffect(()=>{
    fetch('https://dev.to/api/articles')
    .then(res => res.json())
    .then(data => setdatas(data))  
  },[]);
    let set=[];
      for(let i=0;i<=3;i++){
        set.push(<Trends title={datas[i]?.user.name} img={datas[i]?.social_image} descripts={datas[i]?.title} />)
      }
  return (
    <div className='flex gap-20 justify-center w-[90%] flex-wrap m-[10%]'  >
      {set}
    </div>
  )
}
