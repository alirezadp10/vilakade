import React from "react";
import styled from "styled-components";

const SecondayTitleContainer = styled.div``;

function SecondaryTitle(props) {
    return (
        <SecondayTitleContainer className="my-4">
            <h3 className="text-center font-semibold text-2xl  ">
                {props.title}
            </h3>
        </SecondayTitleContainer>
    );
}

export default SecondaryTitle;
