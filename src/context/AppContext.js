import React, {createContext, useState } from "react";
import { useContext } from "react";



export const AppContext = createContext();   // Create an App Context

export default function AppContextProvider({children}) {    // Set Provider of App Context

    const [openMenu, setMenu] = useState(false);
    const [isLoggedin, setIsLoggedIn] = useState(false);
    const [imageIndex, setImageIndex] = useState(0);
    const [formData, setFormData] = useState({
        email : "",
        password : "",
    })
    const [signformData, setSignFormData] = useState({
        firstName : "",
        lastName : "",
        email : "",
        password : "",
        createPassword : "",
        confirmPassword : "",

    })
    const [showPassword, setshowPassword] = useState(false);
    const [showConfirmPassword, setshowConfirmPassword] = useState(false)

    const value = {
        openMenu, 
        setMenu,
        isLoggedin,
        setIsLoggedIn,
        imageIndex,
        setImageIndex,
        formData,
        setFormData,
        showPassword,
        setshowPassword,
        signformData,
        setSignFormData,
        showConfirmPassword,
        setshowConfirmPassword
    }



    return <AppContext.Provider value ={value}>
        {children}
    </AppContext.Provider>
}