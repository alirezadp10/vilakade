import React, { useState } from "react";
import { BsStarFill } from "react-icons/bs";
import { FaRegStar } from "react-icons/fa";
import styled from "styled-components";
import { getWindowDimensions } from "../../../DimentionWidthHeightScreen";

const RateContainer = styled.div``;
function RateComponent(props) {
    const { rate } = props;

    const [windowDimensions, setWindowDimensions] = useState(
        getWindowDimensions()
    );
    return (
        <RateContainer className="flex gap-x-2" dir="ltr">
            {[...Array( windowDimensions.width < 600 ? 1 : 5 )].map((item, index) =>
                index < rate ? (
                    <BsStarFill key={index} size={25} color="#F8BE4D" />
                ) : (
                    <FaRegStar key={index} size={25} color="#F8BE4D" />
                )
            )}
        </RateContainer>
    );
}

export default RateComponent;
