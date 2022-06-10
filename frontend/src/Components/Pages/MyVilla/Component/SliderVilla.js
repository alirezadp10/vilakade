import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, EffectFade, Navigation, Thumbs } from "swiper";
import styled from "styled-components";
import { getWindowDimensions } from "../../../DimentionWidthHeightScreen";

const SliderVillaContainer = styled.div``;
function SliderVilla(props) {
    const { mystayImage } = props;
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    const [windowDimensions, setWindowDimensions] = useState(
        getWindowDimensions()
    );

    return (
        <SliderVillaContainer>
            <Swiper
                style={{
                    "--swiper-navigation-color": "#fff",
                    "--swiper-pagination-color": "#fff",
                }}
                loop={true}
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs, EffectFade]}
                className="mySwiper2 h-96"
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: true,
                }}
                effect={"fade"}
                // modules={[Zoom, Navigation, Pagination]}
            >
                {mystayImage.map((item, index) => {
                    return (
                        <SwiperSlide className="relative">
                            <img
                                src={item}
                                className="rounded-xl h-full w-full"
                            />
                            {/* <div className="absolute top-5"> 45 </div> */}
                        </SwiperSlide>
                    );
                })}
            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                loop={true}
                spaceBetween={10}
                slidesPerView={windowDimensions.width < 600 ? 2.5 : 8}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper h-20 mt-3"
            >
                {mystayImage.map((item, index) => {
                    return (
                        <SwiperSlide>
                            <img
                                src={item}
                                className="rounded-xl h-full w-full"
                            />
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </SliderVillaContainer>
    );
}

export default SliderVilla;
