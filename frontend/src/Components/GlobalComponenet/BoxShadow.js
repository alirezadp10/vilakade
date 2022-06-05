import React from "react";
import styled from "styled-components";

const BoxShadowContainer = styled.div``;

function BoxShadow(props) {
    return (
        <BoxShadowContainer>
            <div
                className={`shadow rounded-2xl py-4 px-5 text-${props.align}`}
            >
                {props.children}
            </div>
        </BoxShadowContainer>
    );
}

export default BoxShadow;
