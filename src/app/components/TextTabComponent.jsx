"use client";

import React from 'react'
import MyButton from '../components/MyButton';
import { Context, useContext } from '../context';


export default function TextTabComponent() {
    
    const { setFontFamily, isMobile, width, mobileWidth, side, fontFamily } = useContext(Context).data
    const roboto = 'font-roboto' === fontFamily
    const inter = 'font-Inter' === fontFamily
    const poppins = 'font-Poppins' === fontFamily
    
    return (
        <div className={`w-[100%] flex flex-col ${isMobile ? mobileWidth : width} ${side}`}>
            <div className='w-[90%] m-auto flex flex-col items-start gap-5 justify-center'>
                <h1 className='text-3xl'>FONT STYLE</h1>
                <div className='w-full flex flex-col gap-5 justify-start'>
                    <MyButton text="Inter" click={() => { setFontFamily('font-sans') }} cname={`font-sans border ${inter && 'border-blue-300 shadow-md shadow-blue-300'} text-start rounded py-2 pl-3`} />
                    <MyButton text="Roboto" click={() => { setFontFamily('font-serif') }} cname={`font-serif border ${roboto && 'border-blue-300 shadow-md shadow-blue-300'} text-start rounded py-2 pl-3`} />
                    <MyButton text="Poppins" click={() => { setFontFamily('font-mono') }} cname={`font-mono border ${poppins && 'border-blue-300 shadow-md shadow-blue-300'} text-start rounded py-2 pl-3`} />
                </div>
            </div>
        </div>
    )
}
