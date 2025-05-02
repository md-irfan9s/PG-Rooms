import React from "react";

function CategoryRoomData({CategoryRoom}) {


    return (
        <div className="w-full mx-auto flex justify-center items-center">

            <div className="h-5/6 border border-opacity-5 shadow-md shadow-black
            hover:shadow-none transition-all duration-500
            ">

                <img src={CategoryRoom.image}/>


                <p className="text-center bg-orange-500 text-white font-semibold
                pt-2 pb-2
                ">{CategoryRoom.text}</p>

            </div>
        
        </div>
    )


}

export default CategoryRoomData