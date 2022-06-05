import React from "react";
import { FaApple, FaFacebookF, FaGoogle } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

function OAuth(props) {
    const {width} = props;
    return (
        <>
            <p className="text-center text-gray-500">
                {" "}
                یا ورود به کمک شبکه های اجتماعی{" "}
            </p>
            <div
                className="flex items-center justify-evenly md:w-3/5 w-5/6 gap-2 mx-auto mt-4"
                rtl="ltr"
            >
                <div className="border-2 rounded-2xl p-3 text-gray-400 hover:text-gray-600 hover:shadow-sm transition-all duration-300">
                    <HiOutlineMail size={width < 700 ? 20 : 35} />
                </div>
                <div className="border-2 rounded-2xl p-3 text-gray-400 hover:text-gray-600 hover:shadow-sm transition-all duration-300">
                    <FaFacebookF size={width < 700 ? 20 : 35} />
                </div>

                <div className="border-2 rounded-2xl p-3 text-gray-400 hover:text-gray-600 hover:shadow-sm transition-all duration-300">
                    <FaApple size={width < 700 ? 20 : 35} className="" />
                </div>
                <div className="border-2 rounded-2xl p-3 text-gray-400 hover:text-gray-600 hover:shadow-sm transition-all duration-300">
                    <FaGoogle size={width < 700 ? 20 : 35} />
                </div>
            </div>
        </>
    );
}

export default OAuth;
