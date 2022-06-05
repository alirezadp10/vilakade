import React from "react";
import styled from "styled-components";

const GrounByContainer = styled.div`
    .group-title {
        position: absolute;
        top: -10px;
        background: #fff;
    }
`;

function GroupByComponent(props) {
    const { name } = props;
    return (
        <GrounByContainer className="border-2 border-gray-200 rounded-2xl mt-3 px-6 py-3 pb-6 relative ">
            <div className="group-title px-3 absolute right-3 text-sm text-gray-400">
                {name}
            </div>
            <div className="mt-3">{props.children}</div>
        </GrounByContainer>
    );
}

export default GroupByComponent;
