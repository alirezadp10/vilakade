import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NumberFormat from "react-number-format";
import styled from "styled-components";

import OAuth from "./components/OAuth";
import SideBar from "./components/SideBar";
import CloseBtn from "../../GlobalComponenet/SecondaryComponent/CloseBtn";
import LogRegForm from "./components/LogRegForm";
import { Notify } from "../../GlobalComponenet/Toast/Notify";

const LoginContainer = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
`;

function Login() {
    const { innerWidth: width, innerHeight: height } = window;
    const [codeCity, setCodeCity] = useState("+98");
    const [phoenNumber, setPhoenNumber] = useState("");

    const navigate = useNavigate();

    const handleSubmitt = (event) => {
        event.preventDefault();
        if (phoenNumber.toString().length < 10) {
            Notify("برای مثال شماره 903 094 9095 را وارد کنید");
        } else {
            navigate("/verify-code");
        }
    };

    return (
        <LoginContainer
            className="md:h-screen h-80 md:items-center md:flex md:flex-row flex-col
         justify-between p-0 m-0 bg-white z-50 "
        >
            <SideBar width={width} />
            <div className="md:w-4/6 w-full flex justify-center text-center align-bottom ">
                <div className=" sm:w-3/5 w-5/6 text-right ">
                    <h1 className="md:text-4xl text-3xl md:mb-5 mb-2 md:mt-0 mt-5 ">
                        ورود ثبت نام
                    </h1>
                    <p className="text-gray-500">
                        لطفا شماره همراهت رو داخل کارد پایین وارد کن تا کد اهراز
                        هویت رو برات بفرستیم که خیال راحت وارد حساب کاربریت بشی
                    </p>
                    <div className="md:mt-16 mt-5" dir="ltr">
                        <LogRegForm
                            handleSubmit={handleSubmitt}
                            codeCity={codeCity}
                            phoenNumber={phoenNumber}
                            setPhoenNumber={setPhoenNumber}
                            width={width}
                        />
                    </div>
                    <div className="mt-10">
                        <OAuth width={width} />
                    </div>
                </div>
            </div>
            <CloseBtn />
        </LoginContainer>
    );
}

export default Login;
