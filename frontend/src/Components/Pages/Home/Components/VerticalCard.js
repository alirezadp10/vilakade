import React from "react";
import NumberFormat from "react-number-format";
import { Link } from "react-router-dom";
import { image2 } from "../../../variables";

import { ComputePrice } from "./../../../../GeneralFunction/Functions";

function VerticalCard(props) {
    const { item } = props;


    
    return (
        <Link to={'/stay/sepehrandn'}>
        <div className="flex justify-start gap-x-3 relative ">
            <img
                className="rounded-lg"
                src={image2}
                alt="kndc"
                style={{ maxWidth: 150 }}
            />
            <div className="">
                <h4 className="text-lg"> {item.name} </h4>
                <div className="text-red-400">
                    {" "}
                    {item.State} - {item.city}{" "}
                </div>
                <div className="absolute bottom-0 left-0 flex flex-col items-end gap-y-1">
                    <div className="flex justify-end gap-2 items-end">
                        <span className="line-through text-gray-400 ">
                            <NumberFormat
                                value={item.price}
                                displayType="text"
                                thousandSeparator={true}
                            />
                        </span>
                        <span className="bg-red-400 rounded-3xl text-white text-sm px-2 py-1">
                            {item.discount} %
                        </span>
                    </div>
                    <div className="text-black font-semibold">
                        <span className="text-lg ">
                            <NumberFormat
                                value={ComputePrice(item.price, item.discount)}
                                displayType="text"
                                thousandSeparator={true}
                            />
                        </span>
                        <span className="text-base"> ريال </span>
                    </div>
                </div>
            </div>
        </div>
        </Link>

    );
}

export default VerticalCard;
