"use client";

import { useEffect, useState } from "react";
import settingsIcon from '../../public/settings.svg'
import Image from "next/image";

export default function Home() {
  const [side, setSide] = useState('right-0')
  const [antiSide, setAntiSide] = useState('left-0')
  const [width, setWidth] = useState('w-0')
  const [mobileWidth, setMobileWidth] = useState('w-0')
  const [antiWidth, setAntiWidth] = useState('w-0')
  const [antiMobileWidth, setAntiMobileWidth] = useState('w-0')
  const [blur, setBlur] = useState('')
  const [fontFamily, setFontFamily] = useState('')
  const [textColor, setTextColor] = useState('text-greenTheme')
  const [color, setColor] = useState('greenTheme')




  console.log(width)
  return (
    <div className={`${fontFamily} bg-primary shadow-md flex justify-center items-center h-screen w-screen`}>

      <button onClick={() => { setWidth('w-1/4'); setMobileWidth('w-4/5'); setBlur('blur-md');setAntiMobileWidth('w-1/5'); setAntiWidth('w-3/4') }} className={` animate-bounce absolute ${side} p-5 text-black flex bg-${color} flex-col rounded-full justify-around`} ><Image className="animate-spin" src={settingsIcon} /></button>

      {/* <LoginContainer /> */}
      <div className={`bg-white flex w-4/5 lg:w-1/3 justify-center items-center rounded-lg`}>
        <div className="w-1/1 p-10 gap-10 flex flex-col justify-center items-center">
          <h2 className={`${textColor} text-3xl text-center font-bold`}>Hi, Welcome Back</h2>
          <p className="text-black text-center">Enter your credentials to continue</p>
          <form>
            <div className="mb-2">
              <label className="px-1 text-gray-600" htmlFor="username">Username:</label>
              <input required placeholder='username' className="text-black border w-full py-2 px-3 rounded" type="text" id="username" name="username" />
            </div>
            <div className="mb-2">
              <label className="px-1 text-gray-600" htmlFor="password">Password:</label>
              <input required placeholder='password' className='text-black border w-full py-2 px-3 rounded' type="password" id="password" name="password" />
            </div>

            <div className="flex justify-between">
              <label className="block text-gray-500 font-bold my-4">
                <input type="checkbox"
                  className="leading-loose text-pink-600"></input>
                <span className="py-2 text-sm text-gray-600 leading-snug"> Remember Me </span></label>
              <label className="block text-gray-500 font-bold my-4"><a
                href="#"
                className={`cursor-pointer text-sm ${textColor} border-b-2 border-gray-200 hover:border-gray-400`}>
                <span>Forgot Password?</span></a>
              </label>
            </div>
            <button className={`text-white bg-${color} py-3 w-full rounded-xl type="submit"`}>SIGN IN</button>
          </form>
        </div>
      </div>


      <div className={`${antiMobileWidth} lg:${antiWidth} h-full ${blur} absolute z-10 bg-pink ${antiSide}`} onClick={() => { setWidth('w-0'); setMobileWidth('w-0'); setBlur('');setAntiMobileWidth('w-0'); setAntiWidth('w-0') }}>
      </div>
      {/* <SideBar /> */}
      <div className={` overflow-hidden	transition-all duration-500 ease-in-out flex bg-white truncate text-black ${mobileWidth} lg:${width} flex-col h-screen justify-around items-center absolute ${side}`}>
        <div className='w-full flex flex-col items-center gap-5 justify-around'>
          <h1 className='text-3xl'>THEME LAYOUT</h1>
          <div className='w-full flex justify-around'>
            <button onClick={() => { setSide('left-0'); setAntiSide('right-0') }}>GO LEFT</button>
            <button onClick={() => { setSide('right-0'); setAntiSide('left-0') }}>GO RIGHT</button>
          </div>
        </div>


        <div className='w-full flex flex-col items-center gap-5 justify-around'>
          <h1 className='text-3xl'>FONT STYLE</h1>
          <div className='w-full flex justify-around'>
            <button className={`font-mono`} onClick={() => setFontFamily('font-mono')}>Mono</button>
            <button className={`font-sans`} onClick={() => setFontFamily('font-sans')}>Sans</button>
            <button className={`font-serif`} onClick={() => setFontFamily('font-serif')}>Serif</button>
            <button className={`font-roboto`} onClick={() => setFontFamily('font-roboto')}>Roboto</button>
          </div>
        </div>


        <div className='w-full flex flex-col items-center gap-5 justify-around'>
          <h1 className='text-3xl'>PRESENT COLOR</h1>
          <div className='w-full flex-col flex justify-around'>
            <span className='w-full flex justify-around'>
              <button className='rounded-full p-5 mr-2 bg-pinkTheme' onClick={() => { setColor('pinkTheme'); setTextColor('text-pinkTheme') }}></button>
              <button className='rounded-full p-5 mr-2 bg-darkRedTheme' onClick={() => { setColor('darkRedTheme'); setTextColor('text-darkRedTheme') }}></button>
              <button className='rounded-full p-5 mr-2 bg-greenTheme' onClick={() => { setColor('greenTheme'); setTextColor('text-greenTheme') }}></button>
              <button className='rounded-full p-5 mr-2 bg-yellowTheme' onClick={() => { setColor('yellowTheme'); setTextColor('text-yellowTheme') }}></button>
            </span>
            <span className='w-full flex justify-around' >
              <button className='rounded-full p-5 mr-2 bg-blueTheme' onClick={() => { setColor('blueTheme'); setTextColor('text-blueTheme') }}></button>
              <button className='rounded-full p-5 mr-2 bg-lightBlueTheme' onClick={() => { setColor('lightBlueTheme'); setTextColor('text-lightBlueTheme') }}></button>
              <button className='rounded-full p-5 mr-2 bg-darkBlueTheme' onClick={() => { setColor('darkBlueTheme'); setTextColor('text-darkBlueTheme') }}></button>
            </span>
          </div>
        </div>

      </div>

    </div>
  )
}