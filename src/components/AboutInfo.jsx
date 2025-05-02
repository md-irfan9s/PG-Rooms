import React from "react";
import homeImage from "../assets/homeImg.jpg"
import logo from "../assets/homelogo.png";


function AboutInfo() {

    return (
        <div className="mt-7 h-5/6 w-11/12 max-w-[1000px] m-auto">
            <div className="mt-[2.5rem] flex justify-center mx-auto">
                <div className="h-[1px] w-[6rem] bg-orange-400"></div>
            </div>

            <h1 className="text-center text-[2.1rem] font-mono text-slate-700
                font-semibold">
                    People why choose us
            </h1>
            

            <div className="mt-5 w-full  h-auto sm:h-3/5 flex flex-col sm:flex-row
            justify-center gap-6 m-auto pb-7">
                {/* left section  */}
                <div className="sm:w-2/5 w-full h-full flex flex-col gap-5 justify-center pt-6">
                <div className="flex gap-2 items-center">
                    <img src={logo} width={60} />
                    <h1 className="uppercase text-orange-500 text-[1.2rem]
                    font-bold
                    ">home stay</h1>
                </div>
                    
                    <p className="text-slate-900 font-normal text-center sm:text-start"
                    >A paying guest (PG) arrangement involves individuals,students 
                        and working professionals, renting a rooms or portion of a private
                        residance owned by someone else. This type of accomodation is common in 
                        urban areas and offers an affordable and flexible housing solution.
                    </p>
                    <div className="flex gap-3 text-base text-slate-700 font-medium">
                        <img />
                        <div>
                            <p className="text-orange-500 font-medium">900+</p>
                            <p>Happy People</p>
                        </div>
                        <div>
                            <p className="text-orange-500 font-medium">30K+</p>
                            <p>Coustomers</p>
                        </div>
                        <div>
                            <p className="text-orange-500 font-medium">60K+</p>
                            <p>Available Rooms</p>
                        </div>
                    </div>
                </div>

                {/* right section  */}
                <div>
                    <img src={homeImage} 
                    className="w-[500px] h-full rounded-lg"
                    data-aos = "flip-left" />

                </div>
            </div>
        </div>
    )
}

export default AboutInfo