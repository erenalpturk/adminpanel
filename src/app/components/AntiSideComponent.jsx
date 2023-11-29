"use client";

import React from 'react'

export default function AntiSideComponent({ closeSideBar, antiSideBar}) {

    return (

        <div className={`h-full w-full bg-[#201d1d8f] absolute z-10 bg-pink ${antiSideBar}`}
            onClick={closeSideBar}>
        </div>

    )
}
