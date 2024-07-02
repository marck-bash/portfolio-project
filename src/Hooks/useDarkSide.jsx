import { useState, useEffect } from 'react';

export default function useDarkSide() {
    const [theme, setTheme] = useState(localStorage.theme);
    //switch out the true section of the ternary with your desired light mode style
    const colorTheme = theme === "dark" ? "nord" : "dark";
    
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