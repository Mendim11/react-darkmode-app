import React from "react";
import { ReactComponent as Sun } from "./Sun.svg";
import { ReactComponent as Moon } from "./Moon.svg";
import "./DarkMode.css";

const DarkMode = () => {
    const setDarkMode = () => {
        console.log("Setting dark mode");
        document.querySelector("body").setAttribute('data-theme', 'dark');
    };
    
    const setLightMode = () => {
        console.log("Setting light mode");
        document.querySelector("body").setAttribute('data-theme', 'light');
    };

    const toggleTheme = (e) => {
        console.log("Toggle theme called");
        if (e.target.checked) {
            setDarkMode();
        } else {
            setLightMode();
        }
    };

    return (
        <div className='dark_mode'>
            <input
                className='dark_mode_input'
                type='checkbox'
                id='darkmode-toggle'
                onChange={toggleTheme}
            />
            <label className='dark_mode_label' htmlFor='darkmode-toggle'>
                <Sun />
                <Moon />
            </label>
        </div>
    );
};

export default DarkMode;
