import React from "react";
import styled from "styled-components";

const AvatraContainer = styled.div`
    // img{
    //     width:${(props) => props.size} ;
    //     width:100;
    //     height:${(props) => props.size} ;
    //     border-radius :${(props) => props.size} ;
    // }
`;

function Avatar(props) {
    return (
        <AvatraContainer size={props.size}>
            <img
                src={props.src}
                alt="user image"
                className={` mx-auto h-32 w-32 rounded-3xl`}
            />
        </AvatraContainer>
    );
}

export default Avatar;
