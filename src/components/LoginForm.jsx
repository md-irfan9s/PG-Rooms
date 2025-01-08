import React, { useContext, useEffect } from "react";
import formGif from "../assets/formgif.gif"
import { AppContext } from "../context/AppContext";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible  } from "react-icons/ai";
import { toast } from "react-toastify";


function LoginForm({setIsLoggedIn}) {


    const navigate = useNavigate();

    const {formData, setFormData, showPassword, setshowPassword} = useContext(AppContext)

    function changeHandler(event) {
        setFormData( (prevData) => (
            {
                ...prevData,
                [event.target.name] : event.target.value,
            }
        ))
    }
    console.log(formData);

    function submitHandler(event) {
        event.preventDefault();
        navigate("/dashboard");
        setIsLoggedIn(true);
        toast.success("Logged In");
    }

    return (
        
        <form className="w-11/12 h-5/6 mx-auto flex flex-col gap-4 max-w-[450px]"
        onSubmit={submitHandler}>
            
            <div className="flex justify-between items-center">

                <div className="pt-4 space-y-2">
                    <h1 className="text-3xl font-bold
                    bg-gradient-to-r from-black via-orange-500 to-black inline-block text-transparent bg-clip-text">
                        
                    Welcome back!</h1>
                    <p className="text-gray-800 font-semibold text-sm">Please Enter your Account details </p>
                </div>
            
                <img src={formGif} width={50}/>
            </div>

            {/* email  */}
            <label className="w-full mt-5">

                <p className="text-md mb-1 loading-[1.375rem]">
                    Email Address <sup className="text-pink-700">*</sup>
                </p>
                <input 
                required
                type="email"
                onChange={changeHandler}
                placeholder="Enter email address"
                name="email"
                value={formData.email}

                className="w-full bg-richblack-800 rounded-[0.5rem] text-richblack-5 p-[12px] 
                border-black border-b-[2px]"

                />

            </label>

            {/* password  */}

            <label className="w-full relative">

                <p className="text-md mb-1 loading-[1.375rem]">
                    Password <sup className="text-pink-700">*</sup>
                </p>
                <input 
                required
                type={showPassword ? "text" : "password"}
                onChange={changeHandler}
                placeholder="Enter password"
                name="password"
                value={formData.password}

                className="w-full bg-richblack-800 rounded-[0.5rem] text-richblack-5 p-[12px] 
                border-black border-b-[2px]"
                />


                <span className="cursor-pointer absolute right-3 top-[38px]"
                onClick={() => setshowPassword( (prev) => !prev)}
                >

                    {
                        showPassword ? 
                        (<AiOutlineEyeInvisible fontSize={24} fill="#0b122e"/>) :
                        (<AiOutlineEye fontSize={24} fill="#0b122e"/>)
                    }

                </span>

                <Link to = "#">
                    <p className="text-xs text-orange-700 mt-1 max-w-max ml-auto">
                        Forgot Paswoord
                    </p>
                </Link>

            </label>

            <button className="bg-orange-500 rounded-[8px] font-medium text-white px-[12px] 
            py-[8px] mb-6 hover:bg-slate-700 transition-all duration-300">
                Sign in
                
            </button>
        </form>
    )
}

export default LoginForm;