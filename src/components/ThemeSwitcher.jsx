import React, { useContext, useEffect } from 'react'
import { ThemeContext } from '../context/ThemeContext'

export default function ThemeSwitcher() {
    const {theme,setTheme}=useContext(ThemeContext);
    useEffect(()=>{
        if(theme==='dark'){
            document.documentElement.classList.add('dark')
        }else{
            document.documentElement.classList.remove('dark')
        }
    },[theme])
    const handleClick = ()=>{
        setTheme(theme ==='light'?'dark':'light')
    }
  return (
    <button onClick={handleClick}>
        {theme == 'light' ? '🌙':'☀️'}
    </button>
  )
}
