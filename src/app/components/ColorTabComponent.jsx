"use client";

import React from 'react'
import MyButton from '../components/MyButton';


export default function ColorTabComponent({ setColor, isMobile, setTextColor, setSide, setBackgroundTheme, setLoginBackground, setTextTheme, color, inputBackground, setInputBackground, width, mobileWidth, side, backgroundTheme }) {
    const dark = 'bg-darkTheme' === backgroundTheme
    const light = 'bg-lightTheme' === backgroundTheme
    const purpleTheme = 'text-purpleTheme' === color
    const yellowTheme = 'text-yellowTheme' === color
    const greenTheme = 'text-blueTheme' === color
    const lightBlueTheme = 'text-lightBlueTheme' === color
    const darkBlueTheme = 'text-darkBlueTheme' === color
    const blueTheme = 'text-darkBlueTheme' === color
    const darkRedTheme = 'text-darkRedTheme' === color
    const inputDarker = 'bg-inputBackgroundDarker' === inputBackground
    const inputLighter = 'bg-inputBackgroundLighter' === inputBackground
    const left = 'left-0' === side
    const right = 'right-0' === side
    

    return (
        <div className={`w-[100%] flex flex-col ${isMobile ? mobileWidth : width} ${side}`}>
            <div className='w-[90%] m-auto flex items-center justify-around'>
                <h1 className='w-60 text-[14px]'> THEME MODE</h1>
                <div className='w-40 flex justify-around'>
                    <MyButton text="DARK" click={() => { setBackgroundTheme('bg-darkTheme'); setLoginBackground('bg-loginBackgroundDarker'); setTextTheme('text-darkThemeText') }} cname={`bg-darkTheme ${dark && 'border-blue-300 border-2 shadow-md shadow-blue-300'} text-darkThemeText rounded px-6 py-3`} />
                    <MyButton text="LİGHT" click={() => { setBackgroundTheme('bg-lightTheme'); setLoginBackground('bg-loginBackgroundLighter'); setTextTheme('text-lightThemeText') }} cname={`bg-lightTheme ${light && 'border-blue-300 border-2 shadow-md shadow-blue-300'} text-lightThemeText rounded px-6 py-3`} />
                </div>
            </div>

            <div className={`w-full border-b-2 border-lineColor my-5 border-col`}></div>

            <div className='w-[90%] m-auto flex flex-col items-start gap-5 justify-center'>
                <h1 className='text-[14px]'>PRESENT COLOR</h1>
                <div className='w-[90%] flex-col flex justify-items-start m-auto'>
                    <span className='w-full flex flex-wrap justify-items-start'>
                        <MyButton text="" click={() => { setColor('purpleTheme'); setTextColor('text-purpleTheme') }} cname={`rounded-full ${purpleTheme && 'border-blue-300 border-2 shadow-md shadow-blue-300'} p-6 mr-2 mt-2 bg-purpleTheme`} />
                        <MyButton text="" click={() => { setColor('yellowTheme'); setTextColor('text-yellowTheme') }} cname={`rounded-full ${yellowTheme && 'border-blue-300 border-2 shadow-md shadow-blue-300'} p-6 mr-2 mt-2 bg-yellowTheme`} />
                        <MyButton text="" click={() => { setColor('blueTheme'); setTextColor('text-blueTheme') }} cname={`rounded-full ${blueTheme && 'border-blue-300 border-2 shadow-md shadow-blue-300'} p-6 mr-2 mt-2 bg-blueTheme`} />
                        <MyButton text="" click={() => { setColor('greenTheme'); setTextColor('text-greenTheme') }} cname={`rounded-full ${greenTheme && 'border-blue-300 border-2 shadow-md shadow-blue-300'} p-6 mr-2 mt-2 bg-greenTheme`} />
                        <MyButton text="" click={() => { setColor('lightBlueTheme'); setTextColor('text-lightBlueTheme') }} cname={`rounded-full ${lightBlueTheme && 'border-blue-300 border-2 shadow-md shadow-blue-300'} p-6 mr-2 mt-2 bg-lightBlueTheme`} />
                        <MyButton text="" click={() => { setColor('darkBlueTheme'); setTextColor('text-darkBlueTheme') }} cname={`rounded-full ${darkBlueTheme && 'border-blue-300 border-2 shadow-md shadow-blue-300'} p-6 mr-2 mt-2 bg-darkBlueTheme`} />
                        <MyButton text="" click={() => { setColor('darkRedTheme'); setTextColor('text-darkRedTheme') }} cname={`rounded-full ${darkRedTheme && 'border-blue-300 border-2 shadow-md shadow-blue-300'} p-6 mr-2 mt-2 bg-darkRedTheme`} />
                    </span>
                </div>
            </div>

            <div className={`w-full border-b-2 border-lineColor my-5 border-col`}></div>


            <div className='w-[90%] m-auto flex items-center justify-around'>
                <h1 className='w-60 text-[14px]'> INPUT BACKGROUND</h1>
                <div className='w-40 flex justify-around'>
                    <MyButton text="" click={() => { setInputBackground('bg-inputBackgroundDarker'); }} cname={`bg-darkTheme ${inputDarker && 'border-blue-300 border-2 shadow-md shadow-blue-300'} text-darkThemeText rounded px-6 py-3`} />
                    <MyButton text="" click={() => { setInputBackground('bg-inputBackgroundLighter'); }} cname={`bg-lightTheme ${inputLighter && 'border-blue-300 border-2 shadow-md shadow-blue-300'} text-lightThemeText rounded px-6 py-3`} />
                </div>
            </div>

            <div className={`w-full border-b-2 border-lineColor my-5 border-col`}></div>


            <div className='w-[90%] m-auto flex items-center justify-around'>
                <h1 className='w-60 text-[14px]'>THEME LAYOUT</h1>
                <div className='w-40 flex justify-around'>
                    <MyButton text="<" click={() => { setSide('left-0') }} cname={`bg-lightTheme ${left && 'border-blue-300 border-2 shadow-md shadow-blue-300'} text-lightThemeText rounded px-6 py-3`} />
                    <MyButton text=">" click={() => { setSide('right-0') }} cname={`bg-lightTheme ${right && 'border-blue-300 border-2 shadow-md shadow-blue-300'} text-lightThemeText rounded px-6 py-3`} />
                </div>
            </div>
        </div>
    )
}
