'use client'
import React, { useState, useEffect } from 'react'
const index = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
      console.log(count);
  }, [count])
  return (
    <>
    <div>count: {count}</div>
    <button onClick={()=>setCount(count+1)}>incr</button>
    </>
  )
}

export default index