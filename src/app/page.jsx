"use client";

import { useEffect, useState } from "react";
import settingsIcon from '../../public/settings.svg'
import Image from "next/image";
import MyButton from './components/MyButton';
import SideBar from './components/SideBar';

export default function Home() {
  const props = JSON.parse(localStorage.getItem('props'))
  const [side, setSide] = useState(props.side)
  const [antiSideBar, setAntiSideBar] = useState('hidden')
  const [width, setWidth] = useState('w-0')
  const [mobileWidth, setMobileWidth] = useState('w-0')
  const [fontFamily, setFontFamily] = useState(props.fontFamily)
  const [textColor, setTextColor] = useState(props.textColor)
  const [color, setColor] = useState(props.color)
  const [isMobile, setIsMobile] = useState(false);

  // Set&GetLocalStorage
  useEffect(() => {
    localStorage.setItem('props', JSON.stringify({
      side: side,
      fontFamily: fontFamily,
      textColor: textColor,
      color: color,
    }));
  }, [color, fontFamily, side, textColor]);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      setIsMobile(screenWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const closeSideBar = () => {
    setWidth('w-0');
    setMobileWidth('w-0');
    setAntiSideBar('hidden')
  }
  const openSideBar = () => {
    setWidth('w-1/4');
    setMobileWidth('w-full');
    setAntiSideBar('block');
  }

  return (
    <div className={`${fontFamily} bg-primary shadow-md flex justify-center items-center h-screen w-screen`}>

      {/* Settings Button */}
      <button
        onClick={openSideBar}
        className={`animate-bounce absolute ${side} p-5 text-black flex bg-${color} flex-col rounded-full justify-around`} >
        <Image className="animate-spin" src={settingsIcon} />
      </button>

      {/* AntiSideBar */}
      <div className={`h-full w-full bg-[#201d1d8f] absolute z-10 bg-pink ${antiSideBar}`}
        onClick={closeSideBar}>
      </div>


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