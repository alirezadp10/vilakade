import React from "react";
import styled from "styled-components";

const MainTitleContainer = styled.h2``;

function MainTitle(props) {
    return (
        <MainTitleContainer props={props} className="text-black text-2xl font-bold text-center pb-6 ">
            {props.title}
        </MainTitleContainer>
    );
}

export default MainTitle;
