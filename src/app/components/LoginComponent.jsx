"use client";

import React from 'react'

export default function LoginComponent({ color, textColor, textTheme, backgroundTheme }) {

    return (
        <div className={`${backgroundTheme} ${textTheme} flex w-4/5 lg:w-1/3 justify-center shadow-lg shadow-cyan-500 items-center rounded-lg`}>
            <div className="w-1/1 p-10 gap-10 flex flex-col justify-center items-center">
                <h2 className={`${textColor} text-3xl text-center font-bold`}>Hi, Welcome Back</h2>
                <p className={`${textTheme} text-center`}>Enter your credentials to continue</p>
                <form>
                    <div className="mb-2">
                        <label className={`px-1 ${textTheme}`} htmlFor="username">Username:</label>
                        <input required placeholder='username' className="text-black border w-full py-2 px-3 rounded" type="text" id="username" name="username" />
                    </div>
                    <div className="mb-2">
                        <label className={`px-1 ${textTheme}`} htmlFor="password">Password:</label>
                        <input required placeholder='password' className='text-black border w-full py-2 px-3 rounded' type="password" id="password" name="password" />
                    </div>

                    <div className="flex justify-between">
                        <label className={`block ${textTheme} font-bold my-4`}>
                            <input type="checkbox"
                                className={`leading-loose ${textTheme}`}></input>
                            <span className={`py-2 text-sm ${textTheme} leading-snug`}> Remember Me </span></label>
                        <label className={`block ${textTheme} font-bold my-4`}><a
                            href="#"
                            className={`cursor-pointer text-sm ${textColor} border-b-2 border-gray-200 hover:border-gray-400`}>
                            <span>Forgot Password?</span></a>
                        </label>
                    </div>
                    <button className={`text-white bg-${color} py-3 w-full rounded-xl type="submit"`}>SIGN IN</button>
                </form>
            </div>
        </div>
    )
}
