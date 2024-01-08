import React, { useEffect, useState } from 'react'
export const Articles = () => {
    const [articles,setarticles]=useState([]);
  useEffect(()=>{
    fetch('https://dev.to/api/articles')
    .then(res => res.json())
    .then(data => setarticles(data))  
  },
  []
  )
  return (
    <div className=' grid grid-cols-3 gap-10'>
        {
            articles.map((e)=>{
               return(
                <div>
                    <h2 className='mb-5 '>{e.title}</h2>
                    <div className=' bg-slate-500 rounded-xl'>{e.description}</div>                  
                </div>
               )
            })
        }
    </div>
  )
}
