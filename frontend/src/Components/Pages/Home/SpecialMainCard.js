import React, { useState } from "react";
import { image } from "../../variables";

// swipert requires
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, EffectFade } from "swiper";
import { getWindowDimensions } from "../../DimentionWidthHeightScreen";
import NumberFormat from "react-number-format";
import { ComputePrice } from "../../../GeneralFunction/Functions";
import { Link } from "react-router-dom";

function SpecialMainCard(props) {
    const [windowDimensions, setWindowDimensions] = useState(
        getWindowDimensions()
    );

    const { ActiveVillaMain } = props;
    // console.log('ActiveVillaMain')
    // console.log(ActiveVillaMain)

    return (
        <div
            className="bg-white p-4 pb-10 rounded-2xl"
            hidden={windowDimensions.width < 600 ? true : false}
        >
            <Swiper
                navigation={true}
                effect={"fade"}
                modules={[EffectFade, Navigation]}
                className="mySwiper"
            >
                {ActiveVillaMain.imgs.map((item, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <img
                                src={item}
                                alt=""
                                className="rounded-3xl w-full h-72 mb-4"
                            />
                        </SwiperSlide>
                    );
                })}
            </Swiper>
            <div>
                <Link to={`stay/${ActiveVillaMain.url}`}>
                    <h3 className="text-lg font-semibold mb-4 hover:text-red-400">
                        {ActiveVillaMain.name}
                    </h3>
                </Link>
                <span className="text-red-400 text-lg ">
                    {" "}
                    {ActiveVillaMain.city}{" "}
                </span>
                <div className="float-left text-left">
                    <div className="mb-2">
                        <span className="rounded-full bg-red-400 px-3 mr-2 py-1 text-white ">
                            {ActiveVillaMain.discount}
                        </span>
                        <span className="text-gray-500 line-through">
                            <NumberFormat
                                value={ActiveVillaMain.price}
                                displayType="text"
                                thousandSeparator={true}
                            />
                        </span>
                    </div>
                    <div className="text-lg font-semibold mt-1">
                        <NumberFormat
                            value={ComputePrice(
                                ActiveVillaMain.price,
                                ActiveVillaMain.discount
                            )}
                            displayType="text"
                            thousandSeparator={true}
                        />
                        <span> ریال</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SpecialMainCard;
