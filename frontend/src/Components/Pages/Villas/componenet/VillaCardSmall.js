import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { image2 } from "../../../variables";

const VillaCardSmallContainer = styled.div``;

function VillaCardSmall(props) {
    return (
        <VillaCardSmallContainer>
            <Link to={`/stay/sepehran`}>
                <div className="hover:shadow-2xl rounded-3xl overflow-hidden duration-300 pb-3">
                    <img
                        src={image2}
                        alt="one"
                        className="w-full rounded-3xl"
                    />
                    <div className="content mt-3 px-3">
                        <h3 className="flex items-start justify-between ">
                            <span className="font-medium">
                                {" "}
                                اقامتگاه جنگل یجن استخردار{" "}
                            </span>
                            <span className="flex items-start justify-end gap-1">
                                <span> 4.4 </span>
                                <span>
                                    {" "}
                                    <FaStar size={20} color="#F8BE4D" />{" "}
                                </span>
                            </span>
                        </h3>
                        <div className="text-red-400 text-sm">بندر انزلی</div>
                        <div className="text-gray-400 text-sm">
                            <span> 2خوابه </span>
                            <span> - </span>
                            <span> اتاق بازی </span>
                        </div>
                        <div className="flex flex-col items-end justify-end gap-1">
                            <div className="flex justify-end items-center gap-2">
                                <span className="line-through text-gray-400 ">
                                    {" "}
                                    1،300،000{" "}
                                </span>
                                <span className="bg-red-400 text-white px-2 py-1 rounded-3xl text-sm">
                                    {" "}
                                    30%{" "}
                                </span>
                            </div>
                            <div className=" text-black font-semibold">
                                1،300،000 ریال
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </VillaCardSmallContainer>
    );
}

export default VillaCardSmall;
