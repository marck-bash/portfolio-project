import { useState, useEffect } from 'react';

export default function useDarkSide() {
    const [theme, setTheme] = useState(localStorage.theme);
    const colorTheme = theme === "dark" ? "lofi" : "dark";
    
    localStorage.setItem("theme", theme);
    
    useEffect(() => {
        if (localStorage.theme == "dark") {
            localStorage.setItem("theme", "dark");
            document.querySelector("html").setAttribute("data-theme", theme)
        } else {
            localStorage.setItem("theme", theme);
            document.querySelector("html").setAttribute("data-theme", theme)
        }
    }, [theme, colorTheme])
    
    return [colorTheme, setTheme];
}