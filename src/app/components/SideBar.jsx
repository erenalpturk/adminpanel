"use client";

import React, { useEffect } from 'react'
import { useState } from 'react'


export default function SideBar(props) {
  const [side, setSide] = useState('right-0')
  const [antiSideBar, setAntiSideBar] = useState('hidden')
  const [width, setWidth] = useState('w-0')
  const [mobileWidth, setMobileWidth] = useState('w-0')
  const [fontFamily, setFontFamily] = useState('')
  const [textColor, setTextColor] = useState('text-greenTheme')
  const [color, setColor] = useState('greenTheme')

  useEffect(() => {
    localStorage.setItem('props', JSON.stringify({
      side: side,
      fontFamily: fontFamily,
      textColor: textColor,
      color: color,
    }));
  }, [color, fontFamily, side, textColor]);

  return (
    <div>
      {/* AntiSideBar */}
      <div className={`h-full w-full bg-[#201d1d8f] absolute z-10 bg-pink ${antiSideBar}`}
        onClick={closeSideBar}>
      </div>


      {/* <SideBar /> */}
      <div className={`overflow-hidden transition-all duration-500 ease-in-out z-20 flex bg-white truncate text-black flex-col h-screen justify-around items-center absolute
    ${isMobile ? mobileWidth : width} ${side}`}>

        {isMobile && <div className="animate-bounce" onClick={closeSideBar}>X</div >}

        <div className='w-full flex flex-col items-center gap-5 justify-around'>
          <h1 className='text-3xl'>THEME LAYOUT</h1>
          <div className='w-full flex justify-around'>
            <MyButton text="GO LEFT" click={() => { setSide('left-0') }} cname={""} />
            <MyButton text="GO RIGHT" click={() => { setSide('right-0') }} cname={""} />
          </div>
        </div>

        <div className='w-full flex flex-col items-center gap-5 justify-around'>
          <h1 className='text-3xl'>FONT STYLE</h1>
          <div className='w-full flex justify-around'>
            <MyButton text="MONO" click={() => { setFontFamily('font-mono') }} cname={`font-mono`} />
            <MyButton text="SANS" click={() => { setFontFamily('font-sans') }} cname={`font-sans`} />
            <MyButton text="SERİF" click={() => { setFontFamily('font-serif') }} cname={`font-serif`} />
            <MyButton text="ROBOTO" click={() => { setFontFamily('font-roboto') }} cname={`font-roboto`} />
          </div>
        </div>

        <div className='w-full flex flex-col items-center gap-5 justify-around'>
          <h1 className='text-3xl'>PRESENT COLOR</h1>
          <div className='w-full flex-col flex justify-around'>
            <span className='w-full flex justify-around'>
              <MyButton text="" click={() => { setColor('pinkTheme'); setTextColor('text-pinkTheme') }} cname={`rounded-full p-5 mr-2 bg-pinkTheme`} />
              <MyButton text="" click={() => { setColor('yellowTheme'); setTextColor('text-yellowTheme') }} cname={`rounded-full p-5 mr-2 bg-yellowTheme`} />
              <MyButton text="" click={() => { setColor('blueTheme'); setTextColor('text-blueTheme') }} cname={`rounded-full p-5 mr-2 bg-blueTheme`} />
              <MyButton text="" click={() => { setColor('greenTheme'); setTextColor('text-greenTheme') }} cname={`rounded-full p-5 mr-2 bg-greenTheme`} />
            </span>
            <span className='w-full flex justify-around'>
              <MyButton text="" click={() => { setColor('lightBlueTheme'); setTextColor('text-lightBlueTheme') }} cname={`rounded-full p-5 mr-2 bg-lightBlueTheme`} />
              <MyButton text="" click={() => { setColor('darkBlueTheme'); setTextColor('text-darkBlueTheme') }} cname={`rounded-full p-5 mr-2 bg-darkBlueTheme`} />
              <MyButton text="" click={() => { setColor('darkRedTheme'); setTextColor('text-darkRedTheme') }} cname={`rounded-full p-5 mr-2 bg-darkRedTheme`} />
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
