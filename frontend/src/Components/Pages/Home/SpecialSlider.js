import React, { useState } from "react";
import MainTitle from "../../GlobalComponenet/Titles/MainTitle";
import styled from "styled-components";
import HomeCardSlider from "../../SecondaryComponent/HomeCardSlider";
import SpecialMainCard from "./SpecialMainCard";

const SliderContent = styled.div``;

function SpecialSlider() {
    return (
        <div>
            <MainTitle title="اقامتگاه های ویژه" />
            <div dir="ltr" className="grid grid-cols-6 gap-4 pb-7">
                <div className="col-span-3">
                    <div className="bg-white w-full h-full rounded-3xl px-5 py-4">
                        <SpecialMainCard />
                    </div>
                </div>
                <div className="col-span-3">
                    {/* <Slider {...settings}>
                        <SliderContent>
                            <HomeCardSlider item="45" />
                        </SliderContent>
                        <SliderContent>
                            <HomeCardSlider item="45" />
                        </SliderContent>
                        <SliderContent>
                            <HomeCardSlider item="45" />
                        </SliderContent>
                        <SliderContent>
                            <HomeCardSlider item="45" />
                        </SliderContent>
                        <SliderContent>
                            <HomeCardSlider item="45" />
                        </SliderContent>
                        <SliderContent>
                            <HomeCardSlider item="45" />
                        </SliderContent>
                        <SliderContent>
                            <HomeCardSlider item="45" />
                        </SliderContent>
                        
                    </Slider> */}
                </div>
            </div>
        </div>
    );
}

export default SpecialSlider;
