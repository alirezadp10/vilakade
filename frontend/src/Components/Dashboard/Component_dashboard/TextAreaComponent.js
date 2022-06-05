import React from "react";
import styled from "styled-components";
import { useUsersetState } from "../../../Providers/UserProvider";

const TextareaContainer = styled.div``;

function TextAreaComponent(props) {
    const { type, name, placeholder, value, title } = props;

    const userSetInfo = useUsersetState();

    const textAreaChange = (e) => {
        console.log("text area change");
        let name = e.target.name;
        let value = e.target.value;
        console.log(name, value);
        userSetInfo((prevstate) => {
            return {
                ...prevstate,
                [name]: value,
            };
        });
    };

    // const onInputChnage = (e) =>{
    //     let name = e.target.name;
    //     let value = e.target.value;
    //     console.log('!!!!!');
    //     console.log(name , value);
    //     userSetInfo(prevstate => {
    //         return{
    //             ...prevstate ,
    //             [name] : value
    //         }
    //     } );
    // }

    return (
        <TextareaContainer>
            <label
                htmlFor={`${name}`}
                className="mr-3 text-base text-gray-700 "
            >
                {title}
            </label>
            <div>
                <textarea
                    style={{ resize: "none" }}
                    rows="3"
                    maxLength="20"
                    className="border-2 border-gray-200 w-full rounded-lg px-2 py-3 text-base mt-1 focus:outline-none"
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    value={value ? value : ""}
                    onChange={textAreaChange}
                />
            </div>
        </TextareaContainer>
    );
}

export default TextAreaComponent;
