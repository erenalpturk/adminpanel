"use client";

import React from 'react'
import { useState } from 'react'


export default function SideBar() {
  const [side, setSide] = useState('right')
  const [width, setWidth] = useState('60')
  return (
    <div className={`flex bg-white text-black w-${width}  flex-col h-screen justify-center items-center fixed ${side}-0`}>
      <button onClick={()=>setSide('right')}>go right</button>
      <button onClick={()=>setSide('left')}>go left</button>
    </div>
  )
}
