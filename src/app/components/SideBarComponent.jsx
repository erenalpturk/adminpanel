"use client";

import React from 'react'
import MyButton from '../components/MyButton';
import ColorTabComponent from './ColorTabComponent';
import TextTabComponent from './TextTabComponent';
import { useState } from 'react';

export default function SideBarComponent({ isMobile, setBackgroundTheme, setLoginBackground, color, textColor, setTextTheme, setInputBackground, setSide, inputBackground, width, mobileWidth, isTablet, tabletWidth, side, fontFamily, closeSideBar, setFontFamily, backgroundTheme, setColor, setTextColor }) {
    const [tab, setTab] = useState('colorTab')
    return (
        <div className={`overflow-hidden transition-all duration-500 ease-in-out z-20 flex bg-white truncate text-black flex-col h-screen justify-start items-center absolute ${isMobile ? mobileWidth : (isTablet ? tabletWidth : width)} ${side}`}>
            {isMobile && <div className="text-2xl px-2 cursor-pointer rounded-full hover:bg-red-900 hover:text-white" onClick={closeSideBar}>X</div >}
            <div className='w-full flex mb-5 justify-between'>
                <span onClick={() => { setTab('colorTab') }} className='py-2 w-[50%] border text-center cursor-pointer'>COLOR</span>
                <span onClick={() => { setTab('textTab') }} className='py-2 w-[50%] border text-center cursor-pointer'>TEXT</span>
            </div>

            {tab === 'colorTab' ?
                <ColorTabComponent
                    isMobile={isMobile}
                    setFontFamily={setFontFamily}
                    setSide={setSide}
                    side={side}
                    setColor={setColor}
                    setTextColor={setTextColor}
                    setBackgroundTheme={setBackgroundTheme}
                    setLoginBackground={setLoginBackground}
                    setTextTheme={setTextTheme}
                    setInputBackground={setInputBackground} 
                    backgroundTheme={backgroundTheme}
                    textColor={textColor}
                    color={color}
                    inputBackground={inputBackground}
                    /> :
                <TextTabComponent
                    isMobile={isMobile}
                    setFontFamily={setFontFamily}
                    setColor={setColor}
                    setTextColor={setTextColor}
                    setBackgroundTheme={setBackgroundTheme}
                    setLoginBackground={setLoginBackground}
                    setTextTheme={setTextTheme}
                    setInputBackground={setInputBackground}
                    fontFamily={fontFamily} />}

        </div>
    )
}
