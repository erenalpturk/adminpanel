"use client";

import React from 'react'
import Image from 'next/image'
import settingsIcon from '../../../public/settings.svg'


export default function SettingsButtonConponent({ openSideBar, side, color}) {

    return (
        <button
            onClick={openSideBar}
            className={`animate-bounce absolute ${side} p-5 top-20 text-black flex bg-${color} flex-col rounded-full justify-around`} >
            <Image className="animate-spin" src={settingsIcon} />
        </button>
    )
}
