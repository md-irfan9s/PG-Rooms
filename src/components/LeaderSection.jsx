import React from "react";
import LeaderData from "../AllData/LeaderData";
import LeaderDetails from "./LeaderDetails";


function LeaderSection() {

    return (

        <div className="mt-6">

                <div className="flex justify-center mx-auto">
                        <div className="h-[1px] w-[6rem] bg-orange-400"></div>
                    </div>

                    <h1 className="text-center text-[2.1rem] font-mono text-slate-700
                        font-semibold capitalize">
                            our leader  
                    </h1>

                <div className="grid lg:grid-cols-3 place-items-center mt-9 gap-3
            md:grid-cols-3 sm:grid-cols-2">


                {
                    LeaderData.map( (data, id) => (

                        <LeaderDetails key = {id} data = {data} />

                    ))
                }

                </div>
                

        </div>


    )


}

export default LeaderSection;