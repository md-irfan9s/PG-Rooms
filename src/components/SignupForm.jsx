import React, { useContext } from "react";
import formGif from "../assets/formgif.gif"
import { AppContext } from "../context/AppContext";
import { AiOutlineEye, AiOutlineEyeInvisible  } from "react-icons/ai";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


function SignupForm({setIsLoggedIn}) {

    const {signformData, setSignFormData,showPassword, setshowPassword,
    showConfirmPassword,setshowConfirmPassword} = useContext(AppContext);
    
    const navigate = useNavigate();

    function changeHandler(event) {
        setSignFormData( (prevData) => (
            {
                ...prevData,
                [event.target.name] : event.target.value,
            }
        ))
    }
    console.log(signformData);

    function submitHandler(event) {
        event.preventDefault();

        if(signformData.createPassword !== signformData.confirmPassword) {
            toast.error("Password does not match");
            return ;
        }

        setIsLoggedIn(true);
        toast.success("Account is sccesfully created");
        
        navigate("/dashboard");
    }

    return (
        

        <form className="w-11/12 h-5/6 mx-auto flex flex-col gap-4 max-w-[450px]"
        onSubmit={submitHandler}>

        <div className="flex justify-between items-center">

            <div className="pt-4 space-y-2">
                <h1 className="text-3xl font-bold
                bg-gradient-to-r from-black via-orange-500 to-black inline-block text-transparent bg-clip-text">
                    
                Welcome Back!</h1>
                <p className="text-gray-800 font-semibold text-sm">Save Time, Energy & Money - Find & Book Your New Room 100% online </p>
            </div>

            <img src={formGif} width={50}/>
        </div>

        {/* first and last Name  */}


        <div className="w-full flex justify-between gap-2">
                {/* First Name  */}
                <label>
                    <p className=" text-[0.875rem] mb-1 loading-[1.375rem]"
                    >First Name<sup className="text-pink-700">*</sup></p>
                    <input
                    required
                    type="text"
                    name="firstName"
                    onChange={changeHandler}
                    placeholder="first name"
                    value={signformData.firstName}
                    className="w-full rounded-[0.5rem]  p-[12px] 
                    border-black border-b-[2px]"
                    />
                </label>

                {/* Last Name */}
                <label>
                    <p className=" text-[0.875rem] mb-1 loading-[1.375rem]"
                    >Last Name<sup className="text-pink-700">*</sup></p>
                    <input
                    required
                    type="text"
                    name="lastName"
                    onChange={changeHandler}
                    placeholder="last name"
                    value={signformData.lastName}
                    className="w-full  rounded-[0.5rem]  p-[12px] 
                border-black border-b-[2px]
                "
                    />
                </label>

            </div>
        
            {/* email address  */}

            <label className="">
                    <p className=" text-[0.875rem] mb-1 loading-[1.375rem]"
                    >Email Address<sup className="text-pink-700">*</sup></p>
                    <input
                    required
                    type="email"
                    name="email"
                    onChange={changeHandler}
                    placeholder="Enter email address"
                    value={signformData.email}
                    className="w-full bg-richblack-800 rounded-[0.5rem]  p-[12px] 
                    border-black border-b-[2px]"
                    />
            </label>
            {/* Create and confirm password  */}

            <div className="w-full flex justify-between gap-2">
            <label className="relative">
                    <p className=" text-[0.875rem] mb-1 loading-[1.375rem]"
                    >Create Password<sup className="text-pink-700">*</sup></p>
                    <input
                    required
                    type= {showPassword ? ("text") : ("password")}
                    name="createPassword"
                    onChange={changeHandler}
                    placeholder="Create Password"
                    value={signformData.createPassword}
                    className="w-full bg-richblack-800 rounded-[0.5rem] p-[12px] 
                border-black border-b-[2px]
                "
                    />

                    <span className="absolute right-3 top-[38px] cursor-pointer"
                    onClick={() => setshowPassword( (prev) => !prev)}>
                        {showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF"/>)
                         : 
                         (<AiOutlineEye fontSize={24} fill="#AFB2BF"/>) }
                    </span>
            </label>


            <label className="relative ">
                    <p className=" text-[0.875rem] mb-1 loading-[1.375rem]"
                    >Confirm Password<sup className="text-pink-700">*</sup></p>
                    <input
                    required
                    type= {showConfirmPassword ? ("text") : ("password")}
                    name="confirmPassword"
                    onChange={changeHandler}
                    placeholder="Confirm Password"
                    value={signformData.confirmPassword}
                    className="w-full  rounded-[0.5rem]  p-[12px] 
                    border-black border-b-[2px]"
                    />

                    <span className="absolute right-3 top-[38px] cursor-pointer"
                    onClick={() => setshowConfirmPassword( (prev) => !prev)}>
                        {showConfirmPassword ?
                         (<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF"/>) : 
                         (<AiOutlineEye fontSize={24} fill="#AFB2BF"/>) }
                    </span>
            </label>
            </div>
            
            <button className="w-full bg-orange-500 rounded-[8px] font-medium text-white px-[12px] 
                py-[8px] mt-5 hover:bg-slate-700 transition-all duration-300"
                >Create Acoount</button>

        </form>
    )
    }

export default SignupForm;