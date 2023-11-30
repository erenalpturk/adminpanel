"use client";

import { useEffect, useState } from "react";
import settingsIcon from '../../public/settings.svg'
import MyButton from './components/MyButton';
import SideBarComponent from "./components/SideBarComponent";
import LoginRegisterComponent from "./components/LoginRegisterComponent";
import SettingsButtonConponent from "./components/SettingsButtonConponent";
import AntiSideComponent from "./components/AntiSideComponent";
import { Context } from "./context";

export default function Home() {

  const [side, setSide] = useState('left-0')
  const [antiSideBar, setAntiSideBar] = useState('hidden')
  const [width, setWidth] = useState('w-0')
  const [mobileWidth, setMobileWidth] = useState('w-0')
  const [tabletWidth, setTabletWidth] = useState('w-0')
  const [fontFamily, setFontFamily] = useState('font-Inter')
  const [textColor, setTextColor] = useState('text-greenTheme')
  const [color, setColor] = useState('greenTheme')
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [backgroundTheme, setBackgroundTheme] = useState('bg-lightTheme')
  const [textTheme, setTextTheme] = useState('text-lightThemeText')
  const [loginBackground, setLoginBackground] = useState('bg-loginBackgroundLighter')
  const [inputBackground, setInputBackground] = useState('bg-loginBackgroundLighter')
  const [showPassword, setShowPassword] = useState('password')
  const [signUp, setSignUp] = useState(true)
  const [black, setBlack] = useState('text-black')

  const reset = () => {
    setSide("left-0"); setFontFamily("font-Inter"); setTextColor("text-greenTheme"); setColor("greenTheme"); setBackgroundTheme("bg-lightTheme"); setTextTheme('text-lightThemeText');
    setLoginBackground('bg-loginBackgroundLighter'); setInputBackground('bg-loginBackgroundLighter'); setBlack('text-black')
  }

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      setIsMobile(screenWidth < 768);
      setIsTablet(screenWidth < 1280)
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const closeSideBar = () => {
    setWidth('w-0');
    setMobileWidth('w-0');
    setTabletWidth('w-0');
    setAntiSideBar('hidden')
    console.log('closeSideBar');
  }
  const openSideBar = () => {
    setWidth('w-1/4');
    setMobileWidth('w-3/4');
    setTabletWidth('w-1/3');
    setAntiSideBar('block');
  }

  const data = {
    reset,
    openSideBar,
    closeSideBar,
    setSide,
    setFontFamily,
    setTextColor,
    setColor,
    setBackgroundTheme,
    setTextTheme,
    setLoginBackground,
    setInputBackground,
    setShowPassword,
    setSignUp,
    setBlack,
    black,
    signUp,
    side,
    antiSideBar,
    width,
    mobileWidth,
    tabletWidth,
    fontFamily,
    textColor,
    color,
    isMobile,
    isTablet,
    backgroundTheme,
    textTheme,
    loginBackground,
    inputBackground,
    showPassword,
  }

  return (
    <Context.Provider value={{ data }}>
      <div className={`${fontFamily} ${backgroundTheme} flex justify-center items-center h-screen w-screen`}>

        <SettingsButtonConponent />

        <AntiSideComponent />
        <LoginRegisterComponent />
        <SideBarComponent />

      </div>
    </Context.Provider>
  )
}