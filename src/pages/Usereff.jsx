import React, { useRef, useState } from 'react'

export const Usereff = () => {
    const [countref,setcountref]=useState(0);
    const count=useRef(null);
    function add(){
        count.current=count.current +1;
        setcountref(count.current)
        console.log("useref",count.current)
    }
  return (
    <div>
        <h1>count:{countref}</h1>
        <button onClick={add}>add</button>
    </div>
  )
}
