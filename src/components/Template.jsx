import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { useEffect } from "react";
import FormBg from "../assets/formbg.jpg";
import logo from "../assets/homelogo.png";
import { SiTicktick } from "react-icons/si";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import { FcGoogle } from "react-icons/fc";
import AOS from "aos"
import "aos/dist/aos.css"

function Template ({ title, desc1, desc2, desc3, desc4,formtype, isLoggedin, setIsLoggedIn}) {

    useEffect( () => {
        AOS.init({
            duration: 2000
        })
    })
    console.log(setIsLoggedIn)
    // const {imageIndex, setImageIndex} = useContext(AppContext);

    // useEffect(() => {
    //     const intervalId = setInterval(() => {
    //         setImageIndex((prevIndex) =>
    //             prevIndex === images.length - 1 ? 0 : prevIndex + 1
    //         );
    //     }, 3000); // Change image every 3 seconds (3000 ms)
    
    //     return () => clearInterval(intervalId); // Cleanup the interval on component unmount
    // }, [images.length]); // Dependency array ensures the effect runs on mount and cleanup on unmount
    
    // function rightchangeHandler() {
    //     if(imageIndex === images.length - 1) {
    //         setImageIndex(0);
    //     }
    //     else{
    //         setImageIndex(imageIndex+1);
    //     }
    // }

    // function leftchangeHandler() {
    //     if(imageIndex !== 0) {
    //         setImageIndex(imageIndex-1);
    //     }
    //     else{
    //         setImageIndex(images.length-1);
    //     }

    // }
    // console.log(imageIndex);
    // console.log(images.length-1);
    return (

        <div className="h-screen w-full bg-cover bg-center 
        mx-auto justify-center items-center"
        style={{backgroundImage : "url("+FormBg+")"}}>
            <div className="h-[10%]"></div>
            <div className="w-11/12 max-w-[1000px] h-[90%] flex flex-col
            mx-auto justify-between items-start md:flex-row md:items-center gap-5">

            {/* left section */}
            <div className="pt-9  w-[50%] flex flex-col gap-6">
                <div className="flex gap-1 justify-start items-center ">
                    <img src={logo} width={80} height={32}/>
                    <h1 className="text-white italic text-3xl font-bold">{title}</h1>
                </div>

                <div className="">
                    <p className="text-gray-300 text-base font-semibold">
                    {desc1} 
                    </p>
                </div>

                <div className="flex gap-2">
                    <p className="flex justify-center items-center gap-3 text-white font-bold">
                        <SiTicktick color="white" size={20}/>
                        {desc2}
                    </p>
                    <p className="flex justify-center items-center gap-3 text-white font-bold">
                        <SiTicktick color="white" size={20}/>
                        {desc3}
                    </p>

                    <p className="flex justify-center items-center gap-3 text-white font-bold">
                        <SiTicktick color="white" size={20}/>
                        {desc4}
                    </p>
                </div>
                
            </div>

            {/* right section  */}
            
            <div className="bg-white w-[100%] h-[90%] rounded md:w-[60%] bg-opacity-20
            bg-gradient-to-r from-orange-200 shadow-[0px_0px_20px_0px_#f7fafc]
            " data-aos = "fade-in">
                {
                    formtype === "signup" ? 
                    (<SignupForm setIsLoggedIn={setIsLoggedIn}/>) : 
                    (<LoginForm setIsLoggedIn={setIsLoggedIn} />)
                }

                {
                    formtype === "login" ? 
                    (<button className="w-11/12 mx-auto max-w-[450px] flex justify-center items-center font-medium
                        gap-x-4 border border-slate-800 rounded-[8px] px-[12px] py-[8px] mt-3">
                            <FcGoogle size={26}/>
                            <p className="">Sign in with Google</p>
                        </button>) : (<div> </div>)
                }

            
            </div>
                
            </div>

        </div>
    )


}

export default Template;