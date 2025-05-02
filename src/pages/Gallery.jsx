import React  from "react";
import HomeContent from "../components/HomeContent";
import CardItem from "../components/CardItem";
import cards from "../AllData/imagecard.js"
import handshakeGif from "../assets/handshake.gif"
import Slider from "react-slick";
import { useEffect } from "react";
import AOS from "aos"
import "aos/dist/aos.css"

function Gallery() {

    const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,           // Enable autoplay
            autoplaySpeed: 3000,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                    },
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                    },
                },
            ],
        };
        
    
        useEffect( () => {
            AOS.init({
                duration : 1000
            })
        })

    return (
        <div>
            
            <HomeContent/> 


            <div className="h-5/6 w-11/12 max-w-[1000px] mx-auto relative">

            <section className="mt-6 w-full h-full">

            <div className="flex justify-center mx-auto">
                <div className="h-[1px] w-[6rem] bg-orange-400"></div>
            </div>

            <h1 className="text-center text-[2.1rem] font-mono text-slate-700
                font-semibold">
                    Some memories which we captures
            </h1>

                <img src={handshakeGif} width={50} 
                className="absolute -left-5"/>

            <div className="w-full  mt-[5rem]">
            <Slider {...settings}>
                
                {
                    cards.map( (card) => (
                        <CardItem card={card} />
                    ))
                }

            </Slider>

            </div>

            </section>

            </div>
            

        </div>
    )


}

export default Gallery;