import React from "react";
import backgroundImage from "../assets/bedrooms.jpg"
import { FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

function HomeContent() {
    const navigate = useNavigate();

    function changePageHandler() {
        navigate("/signup")
    }
    return (

        <div className="h-screen w-full bg-center bg-cover bg-fixed"
        style={{backgroundImage : "url("+backgroundImage+")"}}>

            <div className=" h-[79vh] max-w-[80%] flex flex-col items-center justify-center mx-auto
            gap-5 text-white pt-10">
                <h1 className="font-bold text-5xl">
                    Rapidly Book<span
                    className="font-extrabold bg-gradient-to-bl from-orange-600 to-orange-200 bg-clip-text text-transparent"
                    > Your Rooms Now</span>
                </h1>
                <p className="text-slate-300 font-semibold text-base">
                    Save Time, Energy & Money - Find & Book Your New Room 100% online
                </p>

            </div>

            <div className="space-x-6 max-w-[80%] flex justify-center mx-auto">
                <button className="flex justify-center items-center gap-2 text-white bg-orange-400 px-4 py-2 rounded-md font-semibold
                transition-all duration-200 hover:bg-orange-700 border-orange-500 text-sm
                " onClick={changePageHandler}>
                    Start Now
                    <FaArrowRightLong/>
                </button>

                <button className="flex justify-center items-center gap-2 text-white bg-slate-700 px-4 py-1 rounded-md font-semibold
                transition-all duration-200 hover:bg-slate-800 text-sm">
                    Take Tour
                    <FaArrowRightLong/>

                </button>
            </div>

    </div>


    );


}

export default HomeContent;