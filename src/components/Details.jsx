import React from "react";
import contactGif from "../assets/contact_15579182.gif"


function Details () {

    return (

        <div>

            <section>

                                
            <div className="w-full bg-gray-300 h-16 rounded-r-lg">

            </div>


            <div className="flex justify-between ">

                <div className="w-[60%] hidden md:block">
                <img src="https://img.freepik.com/free-photo/colonial-style-house-night-scene_1150-17925.jpg?t=st=1745235321~exp=1745238921~hmac=e42f2a16f6648a2ee7f41947dafa9b583f590703ee5bf500aa93680f93268220&w=1380" alt="" 
                className="w-full  rounded-r-xl relative -top-2 z-10"
                />  
                </div>

                <div className="w-full md:w-[40%] flex flex-col justify-center items-center">
                    <p className="text-slate-500 text-[2.5rem]
                    font-bold font-mono text-center
                    ">LUXURIOUS PG</p>
                    <p className="text-orange-500 text-[2.3rem] font-bold
                    font-mono z-10
                    ">For Rent</p>
                </div>

            </div>


            <div className="w-full bg-gray-300 h-16 relative -top-5
            rounded-r-lg flex justify-between items-center pr-4">

                <div>   
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                </div>

                <div>
                    <p className="flex justify-center items-center gap-3 text-orange-500
                    font-semibold 
                    ">
                        <img src={contactGif} alt="" height={40}
                        width={40} className="rounded-full"
                        />

                        +918888899999
                    </p>
                    <p></p>
                </div>
            </div>


            </section>

        </div>
    )


}

export default Details;