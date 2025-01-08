import React, { useEffect } from "react";
import AOS from "aos"
import "aos/dist/aos.css"

function ServiceItem({cart}) {

    useEffect( () => {
        AOS.init({
            duration: 1000
        });
    }, [])

    return (
        <div className="">

            {/* card 1  */}

            <div className="max-w-full flex flex-col gap-2 items-center border border-slate-700
            rounded-md group shadow-xl hover:border-orange-500 py-3" 
            data-aos="zoom-in">
                <img src={cart.Gif} width={100}
                    className="translate-y-10 group-hover:translate-y-0 transition-all duration-300" />
                <p className="text-orange-400 uppercase text-[1.2rem] font-semibold
            translate-y-10 group-hover:translate-y-0 transition-all duration-300">
                    {cart.title}</p>
                <p className="translate-y-10 opacity-0 group-hover:translate-y-0
            group-hover:opacity-100 transition-all duration-300
            w-[90%] text-center text-slate-700 font-medium ease-out -z-10
            ">{cart.description}</p>
            </div>


        </div>
    )
}

export default ServiceItem;