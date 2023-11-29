"use client";

import React from 'react'

export default function LoginComponent({ color, textColor, textTheme, loginBackground, inputBackground, setShowPassword, showPassword }) {

    return (
        <div className={`${loginBackground} ${textTheme} flex max-w-[400px] p-[24px] justify-center shadow-lg items-center rounded-lg`}>
            <div className="w-1/1 gap-5 flex flex-col justify-center items-center">
                <h1 className={`${textColor} text-[20px] text-center`}>BERRY</h1>
                <div>
                    <h2 className={`${textColor} text-[20px] text-center font-bold`}>Hi, Welcome Back</h2>
                    <p className={`${textTheme} text[16px] text-center`}>Enter your credentials to continue</p>
                </div>
                <form className='w-full'>
                    <div className="mb-2">
                        <input required placeholder='Email Adress / Username' className={`text-black placeholder:text-[12px] ${inputBackground} border w-full py-2 px-3 rounded focus:border-blue-300 focus:placeholder:text-blue-300 focus:placeholder:text-[11px] focus:placeholder:pt-20' type='password' id="password" name="password"`} />
                    </div>
                    <div className="mb-2 relative">
                        <input type={showPassword} required placeholder='Password' className={`text-black placeholder:text-[12px] ${inputBackground} border w-full py-2 px-3 rounded focus:border-blue-300 focus:placeholder:text-blue-300 focus:placeholder:text-[11px] focus:placeholder:pt-20' type="password" id="password" name="password"`} />
                    <div onClick={()=>{setShowPassword(showPassword =='text' ? 'password' : 'text')}} className='absolute px-2 cursor-pointer rounded-full hover:bg-gray-200 right-2 top-2'>X</div>
                    </div>

                    <div className="flex justify-between">
                        <label className={`block ${textTheme} my-4`}>
                            <input type="checkbox"
                                className={` ${textTheme}`}></input>
                            <span className={`py-2 text-[12px] ${textTheme}`}> Keep me logged in </span></label>
                        <label className={`block ${textTheme} my-4`}><a
                            href="#"
                            className={`cursor-pointer text-[12px] ${textColor} `}>
                            <span>Forgot Password?</span></a>
                        </label>
                    </div>
                    <button className={`text-white text-[15px] bg-${color} py-2 w-full rounded type="submit"`}>Sign In</button>
                    <div className={`w-full border-b-2 border-lineColor mt-5 border-col`}></div>
                    <div className={`text-[14px] w-full mt-5 cursor-pointer text-center ${textTheme}`}>
                        <a href='register'>Don't have an account?</a>
                    </div>
                </form>
            </div>
        </div>
    )
}
