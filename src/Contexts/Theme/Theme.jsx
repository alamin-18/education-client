import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';
export const ThemeContext = createContext()
const Theme = ({children}) => {
    const [dark,setDrak] = useState(false)
    const ThemInfo = {dark,setDrak}
    return (
        <ThemeContext.Provider value={ThemInfo}>
            {children}
        </ThemeContext.Provider>
    );
};

export default Theme;