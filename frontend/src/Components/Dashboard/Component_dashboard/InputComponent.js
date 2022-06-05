import React from "react";
import styled from "styled-components";
import { useUsersetState , useUserState } from "../../../Providers/UserProvider";

const InputContainer = styled.div``;

function InputComponent(props) {
    const { type, name, placeholder, value, title } = props;

    const userSetInfo = useUsersetState();

    const onInputChnage = (e) =>{
        let name = e.target.name;
        let value = e.target.value;
        console.log('!!!!!');
        console.log(name , value);
        userSetInfo(prevstate => {
            return{
                ...prevstate ,
                [name] : value
            }
        } );
    }
    return (
        <InputContainer>
            <label
                htmlFor={`${name}`}
                className="mr-3 text-base text-gray-700 "
            >
                {title}
            </label>
            <div>
                <input
                    className="border-2 border-gray-200 w-full rounded-lg px-2 py-3 text-base mt-1 focus:outline-none"
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    value={value}
                    onChange={onInputChnage}
                />
            </div>
        </InputContainer>
    );
}

export default InputComponent;
