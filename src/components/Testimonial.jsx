import React from "react";
import thumbimg from "../assets/hands-showing-positive-gesture_1134-313.jpg"
import profile1 from "../assets/cute-smiling-young-man-with-bristle-looking-satisfied_176420-18989.jpg"
import profile2 from "../assets/indoor-studio-shot-attractive-beautiful-pretty-young-woman-wearing-eyeglasses-yellow-sweatshirt-having-long-fair-hair-posing-isolated-pink-wall-people-emotions-concept_176.avif"
import profile3 from "../assets/photo-handsome-unshaven-guy-looks-with-pleasant-expression-directly-camera_176532-8164.jpg"
import profile4 from "../assets/smiling-young-brunette-caucasian-girl-looks-camera-olive-green_141793-93004.jpg"

function Testimonial () {

    return (

        <div className="pb-8 mt-6">

            <div>

                <div className=" w-full bg-center bg-cover p-6" 
                style={{ backgroundImage: `url(${thumbimg})` }}
                >
                
                <div className="mx-auto flex flex-col lg:flex-row justify-center items-center w-[99%] h-full
                gap-5 font-semibold ">

                    <div className=" bg-slate-300 p-2 rounded-lg
                    ">
                        <p
                        >"Ideal for tenants looking for a stress-free living setup.
                            The rooms are clean, well-ventilated, and maintained regularly. Security and hygiene standards are met consistently.
                            The host is polite and attentive to tenant needs.
                            Reviews often praise the peaceful surroundings and supportive environment."</p>
                    </div>

                    <div className="bg-slate-300 p-2 rounded-lg">
                    <p>
                            
                            "A solid choice for anyone in need of a reliable PG accommodation.
                            Rooms are comfortable, clean, and equipped with basic facilities. The property feels safe and well-kept.
                            The landlord is helpful and maintains good communication.
                            Reviews commonly highlight the convenience and overall satisfaction of staying here."
                        </p>
                    </div>
                        
                        <div className="bg-slate-300 p-2 rounded-lg">
                            <p>
                                "Tenants will find this PG to be a reliable and comfortable choice.
                                Rooms are tidy, spacious, and regularly cleaned. Security measures are in place, ensuring peace of mind.
                                Amenities are well-provided, and the host is cooperative.
                                Reviews often mention a homely vibe and a smooth stay overall."
                            </p>
                        </div>
                        
                        <div className="bg-slate-300 p-2 rounded-lg">
                            <p>
                                "This PG is a great option for those seeking a balanced lifestyle.
                                The rooms are neat, hygienic, and offer decent space. Safety is well-managed, and common areas are clean.
                                The landlord is approachable and responsive.
                                Reviews frequently mention a calm atmosphere and good overall management."
                            </p>
                        </div>
                        

                        </div>

                    <div className="flex flex-col">

                        <div className="pt-2 flex justify-between">
                            <img src={profile1} height={50} width={60}
                            className="rounded-md "
                            />
                            <img src={profile2} height={50} width={60}
                            className="rounded-md "
                            />
                            <img src={profile3} height={50} width={60}
                            className="rounded-md "
                            />
                            <img src={profile4} height={50} width={60}
                            className="rounded-md "
                            />
                        </div>

                        <div className="flex justify-between text-orange-500 font-semibold">
                            <p>Jack Finnigan</p>
                            <p>Christina</p>
                            <p>Jhon Doe</p>
                            <p>Alina</p>
                        </div>

                        <div className="flex justify-between text-sm text-white font-semibold">
                            <p>Graphics Designer</p>
                            <p>Fashion Designer</p>
                            <p>Bank Manager</p>
                            <p>UI-UX Designer</p>
                        </div>

                    </div>

                


                </div>

                

            </div>

        </div>
    )



}

export default Testimonial;