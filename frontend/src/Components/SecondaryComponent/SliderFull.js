import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// import Swiper core and required modules
import SwiperCore, { Autoplay, Pagination, Keyboard } from "swiper";
import Cardcategory from "./Cardcategory";
import { image } from "../variables";
import { getWindowDimensions } from "../DimentionWidthHeightScreen";
import VilaCardBig from "./VilaCardBig";
// import { useStaysState } from "../../Providers/StaysProvider";

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Keyboard]);

function SliderFull(props) {
    const [windowDimensions, setWindowDimensions] = useState(
        getWindowDimensions()
    );

    const { villaInformations} = props;

    // const styInfo = useStaysState();
    return (
        <div dir="rtl">
            <Swiper
                slidesPerView={windowDimensions.width < 600 ? 2.3 : 4.2}
                spaceBetween={25}
                allowTouchMove={true}
                loop={false}
                pagination={false}
                autoplay={{ delay: 1000  }}
                keyboard={windowDimensions.width < 600 ? false : true}
                // pagination={{
                //     clickable: true,
                // }}
                className="mySwiper"
            >
                {villaInformations.map((item, index) => (
                    <SwiperSlide key={index} className='my-2 mb-16'>
                        <VilaCardBig
                            bg={item.imgs[4]}
                            text={item.name}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default SliderFull;
