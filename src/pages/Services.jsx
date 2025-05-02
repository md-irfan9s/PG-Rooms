import React from "react";
import HomeContent from "../components/HomeContent";
import ServiceItem from "../components/ServiceItem";
import serviceCart from "../AllData/serviceData.js"

function Services({}) {

    

    return (

        <div >

            <HomeContent />
            

            <div className="flex justify-center mx-auto mt-8">
                <div className="h-[1px] w-[6rem] bg-orange-400"></div>
            </div>
            <h1 className="text-center text-[2.1rem] font-mono text-slate-700
                font-semibold">
                    Services
                </h1>

            <div className="h-full w-11/12 max-w-[1000px] mx-auto pb-6 mt-4
            grid lg:grid-cols-4 place-items-center gap-3
            md:grid-cols-3 sm:grid-cols-2
            ">

            {
                serviceCart.map( (cart) => (
                    <ServiceItem cart={cart} key={serviceCart.id}/>
                ))
            }


            </div>

            
            
            
        </div>
    )
}

export default Services;