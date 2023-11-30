"use client";

import React from 'react'
import { Context, useContext } from '../context';

export default function RegisterComponent() {
    const { color, textColor, textTheme, loginBackground, inputBackground, setShowPassword, showPassword, signUp, black, setSignUp } = useContext(Context).data


    return (
        <div className={`${loginBackground} ${textTheme} flex max-w-[400px] p-[20px] lg:p-[24px] justify-center shadow-lg items-center rounded-lg`}>
            <div className="w-1/1 gap-5 flex flex-col justify-center items-center">
                <h1 className={`${black} text-[20px] text-center`}>BERRY</h1>
                <div>
                    <h2 className={`${textColor} text-[20px] text-center font-bold`}>Sign Up</h2>
                    <p className={`${textTheme} text[14px] text-center`}>Enter your credentials to continue</p>
                </div>
                <p className={`${black} text[16px] text-center`}>Sign up with Email address</p>
                <form className='w-full'>
                    <div className="mb-2 flex justify-between">
                        <input required placeholder='First Name' className={`text-black placeholder:text-[12px] ${inputBackground} border w-[48%] py-2 px-3 rounded focus:border-blue-300 focus:placeholder:text-blue-300 focus:placeholder:text-[11px] focus:placeholder:pt-20' type='password' id="password" name="password"`} />
                        <input required placeholder='Last name' className={`text-black placeholder:text-[12px] ${inputBackground} border w-[48%] py-2 px-3 rounded focus:border-blue-300 focus:placeholder:text-blue-300 focus:placeholder:text-[11px] focus:placeholder:pt-20' type='password' id="password" name="password"`} />
                    </div>
                    <div className="mb-2">
                        <input required placeholder='Email Adress / Username' className={`text-black placeholder:text-[12px] ${inputBackground} border w-full py-2 px-3 rounded focus:border-blue-300 focus:placeholder:text-blue-300 focus:placeholder:text-[11px] focus:placeholder:pt-20' type='password' id="password" name="password"`} />
                    </div>
                    <div className="mb-2 relative">
                        <input type={showPassword} required placeholder='Password' className={`text-black placeholder:text-[12px] ${inputBackground} border w-full py-2 px-3 rounded focus:border-blue-300 focus:placeholder:text-blue-300 focus:placeholder:text-[11px] focus:placeholder:pt-20' type="password" id="password" name="password"`} />
                        <div onClick={() => { setShowPassword(showPassword == 'text' ? 'password' : 'text') }} className='absolute px-2 cursor-pointer rounded-full hover:bg-gray-200 right-2 top-2'>X</div>
                    </div>
                    <label className={`block ${textTheme} my-4`}>
                        <input type="checkbox"
                            className={` ${textTheme} cursor-pointer`}></input>
                        <span className={`py-2 text-[12px] ${textTheme}`}> Agree with <u>Terms & Condition.</u></span></label>
                    <button className={`text-white text-[15px] bg-${color} py-2 w-full rounded type="submit"`}>Sign Up</button>
                    <div className={`w-full border-b-2 border-lineColor mt-5 border-col`}></div>
                    <div onClick={() => setSignUp(true)} className={`text-[14px] w-full mt-5 cursor-pointer text-center ${textTheme}`}>
                        <p className={`${black}`}>Already have account?</p>
                    </div>
                </form>
            </div>
        </div>
    )
}
