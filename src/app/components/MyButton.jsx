"use client";

import React from 'react'

export default function MyButton(props) {

    return (
        <button onClick={props.click} className={props.cname}>
            {props.text}
        </button>
    )
}
