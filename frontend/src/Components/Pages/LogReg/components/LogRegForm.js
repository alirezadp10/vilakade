import React, { useState } from "react";
import NumberFormat from "react-number-format";
import Flag from "react-world-flags";
import styled from "styled-components";

const InputNumber = styled.div`
    position: relative;
    width: 100%;
    height: 70px;
    input {
        position: absolute;
        width: 80%;
        height: 100%;
        top: 0;
        right: 0;
        padding-left: 0;
        left: 3.5rem;
        z-index: 4;
        font-size: 1.3rem;
    }
    .flagContainer {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 0.5rem;
        display: flex;
    }
`;

function LogRegForm(props) {
    const { handleSubmit, phoenNumber, codeCity, setPhoenNumber, width } =
        props;

    const [ActiveStep, setActiveStep] = useState(false);

    // error phone
    const [errorPhoneNumber, setErrorPhoneNumber] = useState("");

    const handlePhoneNumberChange = (values) => {
        const { floatValue, value } = values;
        setPhoenNumber(floatValue);

        if (value.length > 9) {
            setActiveStep(true);
        } else {
            setActiveStep(false);
        }
    };

    //  form login submit
    const submitLoginForm = (event) =>{
        event.preventDefault();
        console.log('submit login');
        handleSubmit(event);
    }
    

    return (
        <form className="FormLogin" onSubmit={submitLoginForm}>
            <InputNumber className="rounded-md bg-gray-200 ">
                <NumberFormat
                    prefix="+98"
                    className="w-full input focus:outline-none tracking-wider"
                    format={`${codeCity} (###) ### ####`}
                    mask="_"
                    placeholder="example +98 (903) 094 9095"
                    allowEmptyFormatting
                    allowLeadingZeros={true}
                    value={phoenNumber}
                    onValueChange={(values) => handlePhoneNumberChange(values)}
                />
                <div className="flagContainer flex gap-2 text-lg text-gray-800 font-semibold">
                    <Flag
                        code="ir"
                        width={width < 700 ? 30 : 35}
                        className="rounded"
                    />
                </div>
            </InputNumber>
            {errorPhoneNumber && (
                <p className="text-red-400  text-base mt-2">
                    {" "}
                    الگوشوارد شده نادرست استس{" "}
                </p>
            )}

            <input
                // disabled ={ ActiveStep ? '' : 'disabled' }
                type="submit"
                value="ورود و ثبت نام"
                className={`my-btn bg-red-400 w-full mt-5  ${
                    ActiveStep ? "cursor-pointer" : "opacity-40 cursor-help"
                } `}
            />
        </form>
    );
}

export default LogRegForm;
