import React from "react";
import { NavLink } from "react-router-dom";


function MobileNavigation({openMenu, setMenu, setProgress}) {

    function removeNavbarHandler() {
        setMenu(false);
        setProgress(40);
        setTimeout(() => {
            setProgress(100)
        }, 1000);
    }

    return (
        <div className="block md:hidden">
        <nav className="bg-white w-11/12 h-[40vh] mx-auto border-t-[1px] border-slate-800">

            <ul className="flex flex-col items-start justify-center gap-3 pl-5 pt-5
            font-semibold"
            onClick={removeNavbarHandler}>
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
        </div>
    )
}

export default MobileNavigation;