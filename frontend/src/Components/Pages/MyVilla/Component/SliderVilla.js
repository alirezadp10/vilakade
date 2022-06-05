import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, EffectFade, Navigation, Thumbs } from "swiper";
import styled from "styled-components";
import { getWindowDimensions } from "../../../DimentionWidthHeightScreen";

const SliderVillaContainer = styled.div``;
function SliderVilla() {
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
                modules={[FreeMode, Navigation, Thumbs , EffectFade]}
                className="mySwiper2 h-96"
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: true,
                }}
                effect={"fade"}
                // modules={[Zoom, Navigation, Pagination]}
            >
                <SwiperSlide className="relative">
                    <img
                        src="https://swiperjs.com/demos/images/nature-1.jpg"
                        className="rounded-xl h-full w-full"
                    />
                    <div className="absolute top-5"> 45 </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="https://swiperjs.com/demos/images/nature-2.jpg"
                        className="rounded-xl h-full w-full"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="https://swiperjs.com/demos/images/nature-3.jpg"
                        className="rounded-xl h-full w-full"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="https://swiperjs.com/demos/images/nature-4.jpg"
                        className="rounded-xl h-full w-full"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="https://swiperjs.com/demos/images/nature-5.jpg"
                        className="rounded-xl h-full w-full"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="https://swiperjs.com/demos/images/nature-6.jpg"
                        className="rounded-xl h-full w-full"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="https://swiperjs.com/demos/images/nature-7.jpg"
                        className="rounded-xl h-full w-full"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="https://swiperjs.com/demos/images/nature-8.jpg"
                        className="rounded-xl h-full w-full"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="https://swiperjs.com/demos/images/nature-9.jpg"
                        className="rounded-xl h-full w-full"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="https://swiperjs.com/demos/images/nature-10.jpg"
                        className="rounded-xl h-full w-full"
                    />
                </SwiperSlide>
            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                loop={true}
                spaceBetween={10}
                slidesPerView={ windowDimensions.width <600 ? 2.5 : 8}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper h-20 mt-3"
            >
                <SwiperSlide>
                    <img
                        src="https://swiperjs.com/demos/images/nature-1.jpg"
                        className="rounded-xl h-full w-full"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="https://swiperjs.com/demos/images/nature-2.jpg"
                        className="rounded-xl h-full w-full"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="https://swiperjs.com/demos/images/nature-3.jpg"
                        className="rounded-xl h-full w-full"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="https://swiperjs.com/demos/images/nature-4.jpg"
                        className="rounded-xl h-full w-full"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="https://swiperjs.com/demos/images/nature-5.jpg"
                        className="rounded-xl h-full w-full"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="https://swiperjs.com/demos/images/nature-6.jpg"
                        className="rounded-xl h-full w-full"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="https://swiperjs.com/demos/images/nature-7.jpg"
                        className="rounded-xl h-full w-full"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="https://swiperjs.com/demos/images/nature-8.jpg"
                        className="rounded-xl h-full w-full"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="https://swiperjs.com/demos/images/nature-9.jpg"
                        className="rounded-xl h-full w-full"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="https://swiperjs.com/demos/images/nature-10.jpg"
                        className="rounded-xl h-full w-full"
                    />
                </SwiperSlide>
            </Swiper>
        </SliderVillaContainer>
    );
}

export default SliderVilla;
