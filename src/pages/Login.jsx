import React from "react";
import Template from "../components/Template";
// import formImage from "../assets/img.jpg"

function Login ({setIsLoggedIn}) {

    // const IMAGES = [fCard, sCard, tCard]
    return (
        <Template 
        title = "homeStay"
        desc1 = "Discover affordable, fully-equipped PG rooms with amenities like Wi-Fi, meals, and security. Perfect for students and professionals,book your ideal space online at HomeStay "
        desc2 = "900+ Happy People"
        desc3 = "30K Customers"
        desc4 = "60K Available Rooms"
        formtype = "login"
        // images = {formImage}
        setIsLoggedIn={setIsLoggedIn}
        />
    )


}

export default Login;