"use client";

import { useEffect, useState } from "react";
import settingsIcon from '../../public/settings.svg'
import MyButton from './components/MyButton';
import SideBarComponent from "./components/SideBarComponent";
import LoginComponent from "./components/LoginComponent";
import SettingsButtonConponent from "./components/SettingsButtonConponent";
import AntiSideComponent from "./components/AntiSideComponent";

export default function Home() {
  const props = JSON.parse(localStorage.getItem('props')) || {};
  const [side, setSide] = useState(props.side || 'left-0')
  const [antiSideBar, setAntiSideBar] = useState('hidden')
  const [width, setWidth] = useState('w-0')
  const [mobileWidth, setMobileWidth] = useState('w-0')
  const [tabletWidth, setTabletWidth] = useState('w-0')
  const [fontFamily, setFontFamily] = useState(props.fontFamily || 'font-Inter')
  const [textColor, setTextColor] = useState(props.textColor || 'text-greenTheme')
  const [color, setColor] = useState(props.color || 'greenTheme')
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [backgroundTheme, setBackgroundTheme] = useState(props.backgroundTheme || 'bg-lightTheme')
  const [textTheme, setTextTheme] = useState(props.textTheme || 'text-lightThemeText')
  const [loginBackground, setLoginBackground] = useState(props.loginBackground || 'bg-loginBackgroundLighter')
  const [inputBackground, setInputBackground] = useState(props.inputBackground || 'bg-loginBackgroundLighter')
  const [showPassword, setShowPassword] = useState('password')


  // Set&GetLocalStorage
  useEffect(() => {
    localStorage.setItem('props', JSON.stringify({
      side: side,
      fontFamily: fontFamily,
      textColor: textColor,
      color: color,
      backgroundTheme: backgroundTheme,
      textTheme: textTheme,
      loginBackground: loginBackground,
      inputBackground: inputBackground
    }));
  }, [color, fontFamily, side, textColor, backgroundTheme, textTheme, loginBackground, inputBackground]);

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
    setAntiSideBar('hidden')
  }
  const openSideBar = () => {
    setWidth('w-1/4');
    setMobileWidth('w-3/4');
    setTabletWidth('w-1/3');
    setAntiSideBar('block');
  }

  return (
    <div className={`${fontFamily} ${backgroundTheme} flex justify-center items-center h-screen w-screen`}>

      <SettingsButtonConponent
      openSideBar={openSideBar}
      side={side}
      color={color}
      />

      <AntiSideComponent
      closeSideBar={closeSideBar}
      antiSideBar={antiSideBar}
      />


      <LoginComponent
        color={color}
        textColor={textColor}
        textTheme={textTheme}
        backgroundTheme={backgroundTheme}
        loginBackground={loginBackground}
        inputBackground={inputBackground}
        showPassword={showPassword}
        setShowPassword={setShowPassword}
      />


      <SideBarComponent
        isMobile={isMobile}
        isTablet={isTablet}
        mobileWidth={mobileWidth}
        width={width}
        tabletWidth={tabletWidth}
        side={side}
        setSide={setSide}
        setFontFamily={setFontFamily}
        color={color}
        setColor={setColor}
        setTextColor={setTextColor}
        textColor={textColor}
        setBackgroundTheme={setBackgroundTheme}
        backgroundTheme={backgroundTheme}
        textTheme={textTheme}
        setTextTheme={setTextTheme}
        setLoginBackground={setLoginBackground}
        setInputBackground={setInputBackground}
        inputBackground={inputBackground}
        fontFamily={fontFamily}
      />

    </div>
  )
}