import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import NumberFormat from "react-number-format";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { image2 } from "../../../variables";
// 
import { ComputePrice } from "../../../../GeneralFunction/Functions";


const VillaCardSmallContainer = styled.div``;

function VillaCardSmall(props) {
    const { villa } = props;
    const [VilaImage, setVilaImage] = useState(villa.imgs[0]);

    const handleEnterMouseHoverImage = () => {
        setVilaImage(villa.imgs[1]);
    };
    const handleLeaveMouseHoverImage = () => {
        setVilaImage(villa.imgs[0]);
    };

    return (
        <VillaCardSmallContainer>
            <Link to={`/stay/sepehran`}>
                <div
                    className="hover:shadow-2xl rounded-3xl overflow-hidden duration-300 pb-3"
                    onMouseEnter={handleEnterMouseHoverImage}
                    onMouseLeave={handleLeaveMouseHoverImage}
                >
                    <img
                        src={VilaImage}
                        alt="one"
                        className="w-full rounded-3xl h-56"
                    />
                    <div className="content mt-3 px-3">
                        <h3 className="flex items-start justify-between ">
                            <span className="font-medium">{villa.name}</span>
                            <span className="flex items-start justify-end gap-1">
                                <span> 4.4 </span>
                                <span>
                                    <FaStar size={20} color="#F8BE4D" />
                                </span>
                            </span>
                        </h3>
                        <div className="text-red-400 text-sm">
                            {" "}
                            {villa.State} - {villa.city}{" "}
                        </div>
                        <div className="text-gray-400 text-sm">
                            <span> 2خوابه </span>
                            <span> - </span>
                            <span> اتاق بازی </span>
                        </div>
                        <div className="flex flex-col items-end justify-end gap-1">
                            <div className="flex justify-end items-center gap-2">
                                <span className="line-through text-gray-400 ">
                                   
                                    <NumberFormat
                                    value={villa.price}
                                    displayType="text"
                                    thousandSeparator={true}
                                />
                                </span>
                                <span className="bg-red-400 text-white px-2 py-1 rounded-3xl text-sm">
                                    {villa.discount} %
                                </span>
                            </div>
                            <div className=" text-black font-semibold">
                                <NumberFormat
                                    value={ComputePrice(
                                        villa.price,
                                        villa.discount
                                    )}
                                    displayType="text"
                                    thousandSeparator={true}
                                />
                                <span> ریال</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </VillaCardSmallContainer>
    );
}

export default VillaCardSmall;
