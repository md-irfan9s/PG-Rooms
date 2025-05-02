import React from "react";
import HomeContent from "../components/HomeContent";
import AboutInfo from "../components/AboutInfo";
import Testimonial from "../components/Testimonial";

function About() {

    return (
        <div>
            
            <HomeContent /> 
            

            <div>
                <AboutInfo />  
            </div>


            <div>
                <Testimonial />
            </div>
        </div>
    )
}

export default About