import React from "react";
import Template from "../components/Template";


function SignUp ({setIsLoggedIn}) {

    return (
        <div>
        <Template 
        title = "homeStay"
        desc1 = "Discover affordable, fully-equipped PG rooms with amenities like Wi-Fi, meals, and security. Perfect for students and professionals,book your ideal space online at HomeStay "
        desc2 = "900+ Happy People"
        desc3 = "30K Customers"
        desc4 = "60K Available Rooms"
        formtype = "signup"
        // images = {formImage}
        setIsLoggedIn={setIsLoggedIn}
        />
        </div>
    )


}

export default SignUp;