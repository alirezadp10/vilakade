import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { NavLink, useNavigate } from "react-router-dom";

import { IoMdRefresh } from "react-icons/io";
import { BsArrowRightShort } from "react-icons/bs";

import SideBar from "./components/SideBar";
import CounterDownVerify from "./components/CounterDownVerify";
import VerifyCodeForm from "./components/VerifyCodeForm";

// OTP
import OtpInput from "react-otp-input";

const LoginContainer = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
`;

const CloseBtn = styled.button`
    position: absolute;
    top: 2rem;
    left: 2rem;
    color: lightgray;
`;

const correctCode = "12345";

function Verify() {
    const { innerWidth: width, innerHeight: height } = window;

    const [verificationCode, setverificationCode] = useState("");
    // code resukt status  0 => default   1 => correct    2 => false
    const [codeStatusResult, setCodeStatusResult] = useState(0);

    const navigate = useNavigate();

    const time = new Date();
    time.setSeconds(time.getSeconds() + 90); // 10 minutes timer

    const HanldeResendCode = () => {
        time.setSeconds(time.getSeconds() + 90);
        alert("resend code");
    };

    const HandleExpertContDown = () => {
        alert("enpert time out");
    };

    const handleChangeOTP = (otp) => {
        setCodeStatusResult(0);
        const otpCode = "" + otp;
        setverificationCode(otp);
        if (otpCode.length > 4) {
            console.log("verify");
            verifucationFun(otpCode);
        } else {
            console.log("not verify");
            return false;
        }
    };

    const verifucationFun = (code) => {
        console.log(code);
        if (code !== correctCode) {
            alert("have error from back-end");
            setCodeStatusResult(2);
        } else {
            setCodeStatusResult(1);
            setTimeout(() => {
                if (localStorage.getItem("USER_TOKEN")) {
                    navigate("/");
                } else {
                    localStorage.setItem("USER_TOKEN", "123456");
                    navigate("/register");
                }
            }, 3000);
        }
    };

    return (
        <LoginContainer
            className="md:h-screen h-screen
         md:flex md:flex-row flex-col justify-between p-0 m-0 md:items-center
          bg-white z-50"
        >
            <SideBar width={width} />
            <div className="md:w-4/6 w-full flex justify-center text-center align-bottom ">
                <div className=" md:w-3/5 w-5/6 text-right ">
                    <h1 className="md:text-4xl text-3xl md:mb-5 mb-2 md:mt-0 mt-5">
                        کد اعبتار سنجی
                    </h1>
                    <p className="text-gray-500   ">
                        لطفا شماره همراهت رو داخل کارد پایین وارد کن تا کد اهراز
                        هویت رو برات بفرستیم که خیال راحت وارد حساب کاربریت بشی
                    </p>
                    <div className="mt-16" dir="ltr">
                        {/* <VerifyCodeForm /> */}
                        <OtpInput
                            value={verificationCode}
                            onChange={handleChangeOTP}
                            numInputs={5}
                            placeholder={"*"}
                            isInputNum={true}
                            containerStyle="justify-evenly w-full flex gap-x-1 "
                            inputStyle={`border-2 
                            ${codeStatusResult === 1 ? "border-green-400" : ""}
                             ${codeStatusResult === 2 ? "border-red-400" : ""}
                             ${codeStatusResult === 2 ? "border-gray-200s" : ""}
                             inputStyle text-3xl rounded-2xl`}
                        />
                        <div className="w-full h-24 mt-5 ">
                            <div className="text-center p-2 ">
                                <CounterDownVerify
                                    expiryTimestamp={time}
                                    HandleExpertContDown={HandleExpertContDown}
                                />
                            </div>
                            <div className="flex justify-center gap-6 pt-1">
                                <button
                                    className="text-blue-400"
                                    onClick={HanldeResendCode}
                                >
                                    دریافت مجدد کد
                                    <IoMdRefresh
                                        size={15}
                                        className="inline-block text-blue-400"
                                    />
                                </button>
                                <div className="">کد را دریافت نکردم ؟</div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center flex justify-center">
                        <NavLink
                            to="/login"
                            className="absolute bottom-3 text-md text-gray-400 text-center flex justify-center "
                        >
                            <BsArrowRightShort size={30} />
                            بازگشت و اطلاح شماره
                        </NavLink>
                    </div>
                </div>
            </div>
        </LoginContainer>
    );
}
export default Verify;
