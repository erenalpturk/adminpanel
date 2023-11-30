"use client";

import React from 'react'
import LoginComponent from './LoginComponent';
import RegisterComponent from './RegisterComponent';
import { useState } from 'react';
import { Context, useContext } from '../context';


export default function LoginRegisterComponent() {
    const { signUp } = useContext(Context).data

    return (
        <div className=''>
            {signUp ? < LoginComponent /> : <RegisterComponent />}
        </div>
    )
}
