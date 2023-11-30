"use client";

import React from 'react'
import Image from 'next/image'
import settingsIcon from '../../../public/settings.svg'
import { Context, useContext } from '../context';


export default function SettingsButtonConponent() {
    const { openSideBar, side, color} = useContext(Context).data

    return (
        <button
            onClick={openSideBar}
            className={`absolute ${side} p-2 top-20 text-black flex bg-${color} flex-col rounded-full items-center`} >
            <Image className="animate-spin-slow w-[70%]" src={settingsIcon} />
        </button>
    )
}
