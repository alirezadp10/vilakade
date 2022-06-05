import React from "react";

import imgBehidLogo from "./../../assets/imgs/li-yang-FKsKhlTrx78-unsplash.jpg";

function HomeCardSlider(props) {
    return (
        <div className="w-full h-36  ">
            <div className="h-32 bg-white rounded-3xl p-2 px-3">
                <div className="flex items-center justify-end gap-4">
                    <div dir="rtl" className="w-8/12">
                        <h3 className="text-lg font-semibold mb-4">
                            {" "}
                            سوییت نقلی «دینا» در رشت{" "}
                        </h3>
                        <span className="text-red-400 text-lg ">
                            {" "}
                            بندر انزلی{" "}
                        </span>
                        <div className="float-left text-left">
                            <div>
                                <span className="text-gray-500 line-through">
                                    45,500,000{" "}
                                </span>
                                <span className="rounded-full bg-red-400 px-3 py-1 text-white ">
                                    45%
                                </span>
                            </div>
                            <div className="text-lg font-semibold mt-1">
                                45545 ريال
                            </div>
                        </div>
                    </div>
                    <img
                        src={imgBehidLogo}
                        alt=""
                        className="float-right h-28 w-4/12 rounded-3xl"
                    />
                </div>
            </div>
        </div>
    );
}

export default HomeCardSlider;
