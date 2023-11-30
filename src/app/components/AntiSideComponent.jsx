"use client";

import React from 'react'
import { Context, useContext } from '../context';

export default function AntiSideComponent() {
    const {closeSideBar, antiSideBar} = useContext(Context).data
    return (

        <div className={`h-full w-full bg-[#201d1d8f] absolute z-10 bg-pink ${antiSideBar}`}
            onClick={closeSideBar}>
        </div>

    )
}
