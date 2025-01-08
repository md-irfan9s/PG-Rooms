import React, { useEffect }  from "react";
import HomeContent from "../components/HomeContent";
import serviceCart from "../AllData/serviceData.js"
import ServiceItem from "../components/ServiceItem.jsx";
import cctvgif from "../assets/cctv1.gif"
import { useNavigate } from "react-router-dom";
import AboutInfo from "../components/AboutInfo.jsx";
import AOS from "aos"
import "aos/dist/aos.css"
import handshakeGif from "../assets/handshake.gif"
import cards from "../AllData/imagecard.js"
import CardItem from "../components/CardItem.jsx";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import animatedGif from "../assets/sofa.gif"
import news from "../AllData/news.js"
import NewsData from "../components/NewsData.jsx";

function Home() {

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

    const navigate = useNavigate();

    function changePageHandler() {
        navigate("/services")
    }

    return (
        <div >
            
            <HomeContent/>



        <div className="h-screen w-11/12 max-w-[1000px] mx-auto mt-6 relative">
            <img src={cctvgif} width={50} 
            className="absolute -right-5"/>

            <div className="flex justify-center mx-auto">
                <div className="h-[1px] w-[6rem] bg-orange-400"></div>
            </div>
            <h1 className="text-center text-[2.1rem] font-mono text-slate-700
                font-semibold">
                    Services
                </h1>

            <div className="grid lg:grid-cols-4 place-items-center mt-6 gap-3
            md:grid-cols-3 sm:grid-cols-2
            ">
            {
                serviceCart.map( (cart, id) => (
                    <ServiceItem cart={cart} key={id}/>
                ))
            }
            </div>
            <div className="w-full flex justify-end mt-5">
                <p className=" text-orange-500 font-mono cursor-pointer"
                onClick={changePageHandler}
                >More Services</p>
            </div>


            <div>
                <AboutInfo />  
            </div>


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



            <section className=" w-full">
                <div className="flex justify-center mx-auto">
                    <div className="h-[1px] w-[6rem] bg-orange-400"></div>
                </div>

                <h1 className="text-center text-[2.1rem] font-mono text-slate-700
                    font-semibold capitalize">
                        the news
                </h1>

                <img src={animatedGif} width={50} 
                className="absolute -right-5"/>

                <div>
                    {
                        news.map( (news) => (
                            <NewsData  news = {news}/>
                        ))
                    }
                </div>
            </section>

            

            </div>
            

            


            
        </div>
    )
}
export default Home;