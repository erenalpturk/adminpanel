"use client";

import React from 'react'
import ColorTabComponent from './ColorTabComponent';
import TextTabComponent from './TextTabComponent';
import { useState } from 'react';
import { Context, useContext } from '../context';




export default function SideBarComponent() {
    const [tab, setTab] = useState('colorTab')
    const { isMobile, width, mobileWidth, side, isTablet, tabletWidth, closeSideBar,reset } = useContext(Context).data

    return (
        <div className={`overflow-hidden transition-all duration-500 ease-in-out z-20 flex bg-white truncate text-black flex-col h-screen justify-start items-center absolute ${isMobile ? mobileWidth : (isTablet ? tabletWidth : width)} ${side}`}>
            <div className='flex justify-around w-full items-center py-5'>
                <h1 className='w-[65%] text-[14px]'> Theme Customization</h1>

                <div className='flex justify-around '>
                    <button onClick={reset} className='border border-red-600 px-3 py-1 text-red-600 rounded'>Reset</button>
                    <div className="text-2xl px-2 cursor-pointer rounded-full items-center justify-center hover:bg-gray-200" onClick={closeSideBar}>X</div >
                </div>
            </div>
            <div className='w-full flex mb-5 justify-between'>
                <span onClick={() => { setTab('colorTab') }} className='py-4 w-[50%] border text-center cursor-pointer'>COLOR</span>
                <span onClick={() => { setTab('textTab') }} className='py-4 w-[50%] border text-center cursor-pointer'>TEXT</span>
            </div>

            {tab === 'colorTab' ? <ColorTabComponent /> : <TextTabComponent />}

        </div>
    )
}
