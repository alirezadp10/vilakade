import React , {useState} from "react";
import { BsPhone } from "react-icons/bs";
import { GrLocation } from "react-icons/gr";
import styled from "styled-components";
import InputComponent from "../../Dashboard/Component_dashboard/InputComponent";
import TextAreaComponent from "../../Dashboard/Component_dashboard/TextAreaComponent";
import BoxShadow from "../../GlobalComponenet/BoxShadow";
import BoxHeader from "../../GlobalComponenet/Titles/BoxHeader";
import { image2 } from "../../variables";

const SupportContainer = styled.div``;

const MainSection = styled.section`
    margin-top: ${(props) => props.props};
    padding-bottom: 50px;
`;

function SupportPage() {

    const [UserTicket, setUserTicket] = useState({
        fullname : '',
        supportMessage : '',
        email : '',
    });


    const handleChangeSupportMessage = (event) =>{
        console.log('message')
    }

    return (
        <SupportContainer>
            <MainSection className="container mx-auto">
                <div className="w-10/12 mx-auto">
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
                        <div className="col flex flex-col gap-4 md:order-1 order-2">
                            <BoxShadow>
                                <div className="flex justify-between gap-3 items-center">
                                    <div>
                                        <BoxHeader>
                                            راهنمای رزرو اقامتگاه
                                        </BoxHeader>
                                        <p className="text-gray-500">
                                            جهت مشاهده راهنمای آنلاین رزرو
                                            اقامتگاه به روی این کارت کلیک کنید.
                                        </p>
                                    </div>
                                    <img src={image2} className="w-44" />
                                </div>
                            </BoxShadow>
                            <BoxShadow>
                                <BoxHeader> تلفن تماس با پشتیبانی </BoxHeader>
                                <p className="text-gray-500">
                                    مشاوره تلفنی با ما میتوانید رزرو خود را
                                    مشاوره تلفنی با ما میتوانید رزرو خود را
                                    بصورت تلفنی انجام دهید
                                </p>
                                <ul className="flex flex-row flex-wrap mt-4 gap-x-8 gap-y-4">
                                    <li className="flex gap-2 text-xl  cursor-pointer">
                                        <BsPhone size={20} className="" />
                                        09030949095
                                    </li>
                                    <li className="flex gap-2 text-xl  cursor-pointer">
                                        <BsPhone size={20} className="" />
                                        09030949095
                                    </li>
                                    <li className="flex gap-2 text-xl  cursor-pointer">
                                        <BsPhone size={20} className="" />
                                        09030949095
                                    </li>
                                </ul>
                            </BoxShadow>
                            <BoxShadow>
                                <BoxHeader> ادرس ما </BoxHeader>
                                <p className="text-gray-500">
                                    مشاوره تلفنی با ما میتوانید رزرو خود را
                                    مشاوره تلفنی با ما میتوانید رزرو خود را
                                    بصورت تلفنی انجام دهید
                                </p>
                                <ul className="flex flex-col mt-4 gap-x-8 gap-y-4">
                                    <li className="flex gap-2 text-base  cursor-pointer">
                                        <GrLocation size={25} className="" />
                                        مشاوره تلفنی با ما میتوانید رزرو خود را
                                        مشاوره تلفنی با ما میتوانید رزرو خود را
                                        مشاوره تلفنی با ما میتوانید رزرو خود را
                                    </li>
                                </ul>
                            </BoxShadow>
                        </div>
                        <div className="col md:order-2 order-1">
                            <BoxShadow>
                                <BoxHeader> فرم ارتباط با ما </BoxHeader>
                                <form className="flex flex-col gap-3 mt-5">
                                    <div>
                                        <InputComponent
                                            type="text"
                                            title="نام کامل"
                                            value={UserTicket.fullname}
                                            // onchangeHandler={handleChangeSupportMessage}
                                            placeholder="نام کامل خود را وارد کنید ..."
                                            name="fullname"
                                        />
                                    </div>
                                    <div>
                                        <InputComponent
                                            type="email"
                                            title="ایمیل"
                                            value={UserTicket.email}
                                            // onchangeHandler={handleChangeSupportMessage}
                                            placeholder="ایمیل خود را وراد کنید ..."
                                            name="email"
                                        />
                                    </div>
                                    <div>
                                        <TextAreaComponent
                                            type="text"
                                            title="پیام شما"
                                            value={UserTicket.supportMessage}
                                            // onchangeHandler={handleChangeSupportMessage}
                                            placeholder="پیام خود را به پشتیبانی ارسال کنید ..."
                                            name="supportMessage"
                                        />
                                    </div>
                                </form>
                            </BoxShadow>
                        </div>
                    </div>
                </div>
            </MainSection>
        </SupportContainer>
    );
}

export default SupportPage;
