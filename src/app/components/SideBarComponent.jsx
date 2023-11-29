"use client";

import React from 'react'
import MyButton from '../components/MyButton';

export default function SideBarComponent({ isMobile, setBackgroundTheme, textTheme, setTextTheme, backgroundTheme, width, mobileWidth, side, setSide, closeSideBar, setFontFamily, setColor, setTextColor }) {

    return (

        <div className={`overflow-hidden transition-all duration-500 ease-in-out z-20 flex bg-white truncate text-black flex-col h-screen justify-around items-center absolute
      ${isMobile ? mobileWidth : width} ${side}`}>

            {isMobile && <div className="text-2xl" onClick={closeSideBar}>X</div >}

            <div className='w-full flex flex-col items-center gap-5 justify-around'>
                <h1 className='text-3xl'>THEME LAYOUT</h1>
                <div className='w-full flex justify-around'>
                    <MyButton text="GO LEFT" click={() => { setSide('left-0') }} cname={""} />
                    <MyButton text="GO RIGHT" click={() => { setSide('right-0') }} cname={""} />
                </div>
            </div>

            <div className='w-full flex flex-col items-center gap-5 justify-around'>
                <h1 className='text-3xl'>MODE</h1>
                <div className='w-full flex justify-around'>
                    <MyButton text="DARK" click={() => { setBackgroundTheme('bg-darkTheme'); setTextTheme('text-darkThemeText') }} cname={`bg-darkTheme text-darkThemeText rounded px-6 py-3`} />
                    <MyButton text="LİGHT" click={() => { setBackgroundTheme('bg-lightTheme'); setTextTheme('text-lightThemeText') }} cname={`bg-lightTheme text-lightThemeText rounded px-6 py-3`} />

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

    )
}
