import React from "react";

function CardItem ({card}) {

    return (
        <div className="relative  group">
            <div>
                <img src={card.img} 
                className="w-[500px] h-[300px] rounded-lg group-hover:blur-[1px] transition-all duration-500
                group-hover:opacity-70"/>
                <div className="flex justify-center">
                    <p
                    className="absolute top-[14rem] text-center opacity-0 group-hover:-translate-y-full
                    transition-all duration-500 group-hover:opacity-100 ease-out
                    text-slate-900 w-[75%] font-semibold group-hover:backdrop-opacity-50"
                    >{card.title}</p>
                </div>
                
            </div>
        </div>
    )
}

export default CardItem;