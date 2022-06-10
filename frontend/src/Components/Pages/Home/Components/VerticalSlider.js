import React, { useState, useRef } from "react";
import styled from "styled-components";

//  swiper required
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper";
import VerticalCard from "./VerticalCard";
import { getWindowDimensions } from "../../../DimentionWidthHeightScreen";

// context stays
import { useStaysState } from "../../../../Providers/StaysProvider";

const VerticalSliderContainer = styled.div`
    .swiper {
        padding-right: 2rem;
    }
    @media only screen and (max-width: 600px) {
        .swiper {
            padding-right: 0rem;
        }
    }
`;

function VerticalSlider(props) {
    // props
    const { setActiveVillaMain , villaInformations } = props;

    // windows dimention
    const [windowDimensions, setWindowDimensions] = useState(
        getWindowDimensions()
    );

    const staysInfo = useStaysState();

    // refrence
    const verticalRef = useRef();

    const [realSwiperIndex, setRealSwiperIndex] = useState(0);

    const verticalSliderChange = (event) => {
        console.log("slider");
        setRealSwiperIndex(event.realIndex);
    };

    const handleactiveitem = (item) =>{
        if(item){
            setActiveVillaMain(item)
        }
    }

    return (
        <VerticalSliderContainer>
            <Swiper
                direction={"vertical"}
                slidesPerView={windowDimensions.width < 600 ? 5 : 3}
                spaceBetween={0}
                slidesPerGroup={1}
                centeredSlides={windowDimensions.width < 600 ? false : true}
                loop={windowDimensions.width < 600 ? false : true}
                loopFillGroupWithBlank={true}
                mousewheel={windowDimensions.width < 600 ? false : true}
                pagination={
                    windowDimensions.width < 600
                        ? false
                        : {
                              clickable: true,
                          }
                }
                modules={[Mousewheel, Pagination]}
                className="mySwiper pb-10 md:pr-4"
                style={{ height: windowDimensions.width < 600 ? 720 : 450 }}
                onSlideChange={(e) => verticalSliderChange(e)}
            >
                {villaInformations.map((item, index) => {
                    index === realSwiperIndex ?  handleactiveitem(item) :handleactiveitem();
                    return (
                        <SwiperSlide
                            className="md:h-40 h-96 ssssssssssss"
                            key={item.id}
                        >
                            <div
                                className="bg-white w-full h-fit p-4 rounded-xl"
                                style={{ boxShadow: "0 3px 8px #e5e5e5" }}
                            >
                                <VerticalCard item={item} />
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </VerticalSliderContainer>
    );
}

export default VerticalSlider;
