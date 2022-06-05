import React from "react";
import styled from "styled-components";

const GrounByBigContainer = styled.div`
    .group-title {
        position: absolute;
        top: -15px;
        background: #fff;
    }
`;

function GroupByBig(props) {
    const { name } = props;
    return (
        <GrounByBigContainer className="border-2 border-gray-200 rounded-2xl mt-5 px-6 py-3 pb-6 relative ">
            <div className="group-title px-3 absolute right-3 text-2xl text-gray-400">
                {name}
            </div>
            <div className="mt-3">{props.children}</div>
        </GrounByBigContainer>
    );
}

export default GroupByBig;
