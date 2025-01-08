import React from "react";

function NewsData({news}) {

    return (
        <div>
            <div>
                <img src={news.img} alt="" />
            </div>
            <div>
                <h3>{news.title}</h3>
            </div>

            <div>
                <p>{news.desc}</p>
            </div>
        </div>
    )

}

export default NewsData;