import React, { useState } from "react";

function NewsData({news}) {

    const [readmore , setreadmore] = useState(false);

    const description = readmore 
            ? (news.desc || 'No description available.') 
            : `${(news.desc || 'No description available.').substring(0, 100)}....`;


    function readmoreHandler() {
        setreadmore(!readmore);
    }

    return (
        <div className="flex flex-col gap-3 border p-4 group hover:border-orange-500 h-5/6
        bg-slate-100 hover:bg-white transition-all duration-500
        ">
            <div className="w-full  overflow-hidden rounded-lg">
                <img src={news.img} alt="" height={100}
                className="w-full h-full object-cover" />
            </div>
            <div className="border-orange-500 group-hover:border-b-[1px] transition-all duration-500">
                <h3 className=" text-slate-700 font-semibold text-xs
                 group-hover:text-slate-800 transition-all duration-500">{news.title}</h3>
            </div>

            <div className="">
                <p className="text-slate-700  font-semibold text-bas
                group-hover:text-slate-800 transition-all duration-500
                ">{description}</p>
                <span className = "read-more cursor-pointer text-orange-500  font-semibold"
                 onClick = {readmoreHandler}>
                         {readmore ? `Show less`: `Read more`}
                    </span>
            </div>
        </div>
    )

}

export default NewsData;