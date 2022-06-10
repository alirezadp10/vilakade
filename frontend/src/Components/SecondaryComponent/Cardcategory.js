import React from "react";
import { Link } from "react-router-dom";

function Cardcategory(props) {
    return (
        <Link to={`stays/${props.linkto}`}>
            <div className="p-0 w-full md:h-40 h-40 bg-red-50 rounded-3xl text-center overflow-hidden relative hover:-translate-y-1 hover:shadow-2xl duration-300 ">
                <img src={props.bg} alt="" className="w-full h-full" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t h-3/6 flex flex-col justify-end pb-4 from-black text-white text-base">
                    {props.text}
                </div>
            </div>
        </Link>
    );
}

export default Cardcategory;
