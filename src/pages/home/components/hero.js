import React from "react";
import spider from "../../../assets/images/chabaka.png";
// * icons
import { FaFacebookSquare, FaInstagram, FaTwitter } from "react-icons/fa";

// * end icons

export const HeroComponent = () => {
    return (
        <>
            <div className="h-[100vh] bg-main  pt-[10vh] relative flex justify-evenly items-center ">
                {/* //** spider  image  in top left */}
                <img className="absolute top-0 left-0 select-none" src={spider} alt="" />

                {/*//* left side */}


                <div className="w-[40%] h-[70%] flex  flex-col justify-evenly">

                    <p className="text-side text-3xl uppercase">Webleek Agency</p>

                    <h1 className="text-white font-semibold text-6xl">Turning visions into digital experience</h1>

                    <p className="text-third">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus modi adipisci nesciunt sint commodi
                        accusamus illo at neque iusto, ad incidunt, quos velit nobis. Quis saepe tempore minus necessitatibus. Dolorum?</p>

                    <div className=" flex items-center gap-2">

                        <a className="btn btn-side px-3  rounded-pill" href="">Services</a>

                        <div className="text-white flex gap-1">
                            <FaFacebookSquare className="text-2xl" />
                            <FaTwitter className="text-2xl" />
                            <FaInstagram className="text-2xl" />
                        </div>

                    </div>

                </div>

                <div className="w-[40%] h-[75%">
                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#FF9305" d="M54.5,-69.8C70.2,-63.5,82.4,-47.1,85.1,-29.8C87.9,-12.4,81.2,5.9,73.6,22.3C66.1,38.7,57.7,53.3,45.3,59.9C32.8,66.6,16.4,65.3,1.1,63.9C-14.3,62.4,-28.6,60.7,-41.9,54.4C-55.3,48,-67.7,37,-73.1,23.1C-78.6,9.1,-77.2,-7.7,-68.7,-18.8C-60.3,-29.9,-44.9,-35.3,-32.3,-42.6C-19.7,-49.9,-9.8,-59.2,4.8,-65.7C19.4,-72.3,38.7,-76.1,54.5,-69.8Z" transform="translate(100 100)" />
                    </svg>
                </div>


            </div>


        </>
    );
};
