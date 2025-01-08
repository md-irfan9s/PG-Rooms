import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/homelogo.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { AppContext } from "../context/AppContext";
import MobileNavigation from "./MobileNavigation";
import { IoCloseSharp } from "react-icons/io5";
import { TbLogin } from "react-icons/tb";
import { TbLogin2 } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import { toast } from "react-toastify";

function Navbar({setProgress}) {

    const{openMenu, setMenu, isLoggedin, setIsLoggedIn} = useContext(AppContext);

    function changeHandler() {
        setProgress(20)
        setTimeout( () => {
            setProgress(100);
        }, 1000)
        // setProgress(100)
    }


    function openMenuHandler() {
        setMenu(!openMenu);
        console.log("changed");
        console.log(openMenu);
    }

    return (

        <div className="fixed w-full z-10">
            <div className="flex justify-between w-11/12 max-w-[1000px] mx-auto mt-6 bg-white
            pr-3 rounded-sm
            ">

                <div className="bg-white rounded-full flex justify-center items-center">
                    <NavLink to={"/"}>
                        <img 
                        src={logo} width={80} height={32}
                        loading="lazy"
                        />
                    </NavLink>
                </div>

                <div className="hidden md:block">
                    {/* Navigation Link */}
                    <nav className="flex">
                        <ul className="flex items-center justify-center pt-3 gap-3 pr-3
                        text-slate-950  font-semibold" onClick={changeHandler}>
                            <li >
                                <NavLink to={"/"}>
                                    Home
                                </NavLink>
                            </li>

                            <li>
                                <NavLink to={"/services"}>
                                    Services
                                </NavLink>
                            </li>

                            <li>
                                <NavLink to={"/about"}>
                                    About
                                </NavLink>
                            </li>

                            <li>
                                <NavLink to={"/gallery"}>
                                    Gallery
                                </NavLink>
                            </li>

                            <li>
                                <NavLink to={"/pricing"}>
                                    Pricing
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={"/contact"}>
                                    Contact
                                </NavLink>
                            </li>
                        </ul>

                    </nav>
                    {/* Navlink End  */}
                    
                </div>
            
                        {/* Login and sign up page */}

                <div className=" flex justify-center items-center pr-3 gap-2" onClick={changeHandler}>
                    
                {
                    !isLoggedin && 
                    <Link to={"/login"}>
                        <button className="bg-orange-500 text-white px-3 py-1 rounded-md flex
                        justify-center items-center gap-2 text-xs sm:text-base font-semibold
                        hover:bg-slate-700 transition-all duration-200"
                        
                        >
                            Login
                            <TbLogin/>
                        </button>
                    </Link>
                }
                {
                    !isLoggedin && 
                    <Link to={"/signup"}>
                        <button className="bg-orange-500 text-white px-3 py-1 rounded-md flex
                        justify-center items-center gap-1 text-xs sm:text-base font-semibold
                        hover:bg-slate-700 transition-all duration-200">
                            Sign up
                            <TbLogin2/>
                        </button>
                    </Link>
                }
                {
                    isLoggedin && 
                    <Link to={"/"}>
                        <button className="bg-orange-500 text-white px-3 py-1 rounded-md flex
                        justify-center items-center gap-1 text-xs sm:text-base font-semibold
                        hover:bg-slate-700 transition-all duration-200"
                        onClick={() => {
                            setIsLoggedIn(false);
                            toast.success("Logged out")
                        }}>
                            Log out
                            <TbLogin2/>
                        </button>
                    </Link>
                } 
                {
                    isLoggedin && 
                    <Link to={"/dashboard"}>
                        <button className="bg-orange-500 text-white px-3 py-1 rounded-md flex
                        justify-center items-center gap-1 text-xs sm:text-base font-semibold
                        hover:bg-slate-700 transition-all duration-200">
                            Dashboard
                            <CgProfile/>
                        </button>
                    </Link>
                }  
                    

                    

                </div>


                <div className="flex md:hidden justify-center items-center"
                onClick={openMenuHandler}>
                    {
                        openMenu ? (<IoCloseSharp size={24}/>) : (<RxHamburgerMenu size={24}/>)
                    }     
                </div>

            </div>


            {/* Mobile menu navigation */}
            {
                openMenu ? 
                (<div>
                    <MobileNavigation openMenu = {openMenu} setMenu = {setMenu}  setProgress= {setProgress}/>
                </div>) :
                 (<div className="hidden">
                 </div>)
            }


        </div>


    )


}

export default Navbar