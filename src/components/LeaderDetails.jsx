import React from "react";


function LeaderDetails({data}) {

    return (

        <div className="mt-[5rem]">

            <div className="mb-4 flex flex-col justify-center items-center 
            border-[1.5px] border-orange-500">

                <img src={data.image} className="h-2/4 w-4/5 relative bottom-[5rem]
                rounded-md
                "/>

                <div className="flex flex-col justify-center items-center gap-2 relative bottom-[2rem]">
                    <p className="text-lg font-bold">{data.title}</p>
                    <p className="font-normal">{data.desc}</p>
                    <p className="text-center font-light">{data.paragraph}</p>
                </div>
                

            </div>

        </div>



    )


}

export default LeaderDetails;