import React, { useState } from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import useDarkSide from '../Hooks/useDarkSide';

export default function Switcher() {
    const [colorTheme, setTheme] = useDarkSide();
    const [darkSide, setDarkSide] = useState(
        colorTheme === "lofi" ? true : false
    );
    
    const toggleDarkMode = (checked) => {
        setTheme(colorTheme);
        setDarkSide(checked);
    }
    
  return (
    <>
        <DarkModeSwitch 
            checked={darkSide}
            onChange={toggleDarkMode}
            size={30}
        />
    </>
  )
}
