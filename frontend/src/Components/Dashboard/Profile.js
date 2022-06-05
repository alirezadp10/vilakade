import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import styled from "styled-components";
import Avatar from "../GlobalComponenet/Avatar";
import BoxShadow from "../GlobalComponenet/BoxShadow";
import Header from "../GlobalComponenet/Header";

// imgae
import { image } from "../variables";
import Menu from "./Component_dashboard/Menu";
import PanelComponenet from "./Component_dashboard/PanelComponenet";
import Sidebar from "./Component_dashboard/Sidebar";
import UserHistoryPanelComponent from "./Component_dashboard/UserHistoryPanelComponent";
import UserNoticPanelComponent from "./Component_dashboard/UserNoticPanelComponent";
import UserPaymentList from "./Component_dashboard/UserPaymentList";

const ProfileContainer = styled.div``;

const MainSection = styled.section`
    margin-top: ${(props) => props.props};
    padding-bottom: 50px;
`;

function Profile() {
    
    const [User, setUser] = useState({
        imgsrc: image,
        name: "سپهران بابایی",
        number: "09030949095",
    });

    const [MenuItems, setMenuItems] = useState([
        {
            id: 0,
            title: "تنظمیات پروفایل",
            icon: "setting",
            active: true,
            param: "account",
        },
        {
            id: 0,
            title: "تاریخچه سفرهای شما",
            icon: "setting",
            active: false,
            param: "user-history",
        },
        {
            id: 0,
            title: "تاریخچه پرداخت من",
            icon: "setting",
            active: false,
            param: "user-payment",
        },
        {
            id: 0,
            title: "اطلاعیه های شما",
            icon: "setting",
            active: false,
            param: "user-notice",
        },
        {
            id: 0,
            title: "خبرنامه",
            icon: "setting",
            active: false,
            param: "user-news",
        },
        {
            id: 0,
            title: "دعوت از دوستان",
            icon: "setting",
            active: false,
            param: "user-invite",
        },
    ]);

    const [activePanel, setActivePanel] = useState("account");

    const MyLocation = useLocation();

    const panelShow = () => {
        const PageAddress = MyLocation.pathname;
        switch (PageAddress) {
            case "/profile/account":
                setActivePanel("account");
                break;
            case "/profile/user-history":
                setActivePanel("user-history");
                break;

            case "/profile/user-payment":
                setActivePanel("user-payment");
                break;

            case "/profile/user-notice":
                setActivePanel("user-notice");
                break;
            case "/profile/user-news":
                setActivePanel("user-news");
                break;

            case "/profile/user-invite":
                setActivePanel("user-invite");
                break;

            default:
                // console.log("hishkodom");
                break;
        }
    };

    useEffect(() => {
        panelShow();
    }, [MyLocation]);

    return (
        <MainSection className="container mx-auto">
            <div className="w-10/12 mx-auto">
                <ProfileContainer>
                    <div className="grid md:grid-cols-4 grid-cols-1 md:gap-5">
                        <div className="col-span-1 md:h-fit md:sticky top-8 ">
                            <Sidebar
                                user={User}
                                menuItems={MenuItems}
                                activePanel={activePanel}
                            />
                        </div>
                        <div className="col-span-3">
                            <BoxShadow>
                                {activePanel === "account" && (
                                    <PanelComponenet />
                                )}
                                {activePanel === "user-history" && (
                                    <UserHistoryPanelComponent />
                                )}
                                {activePanel === "user-payment" && (
                                    <UserPaymentList />
                                )}
                                {activePanel === "user-notice" && (
                                    <UserNoticPanelComponent />
                                )}
                                {activePanel === "user-news" && (
                                    <div> خبر خبر خبر </div>
                                )}
                                {activePanel === "user-invite" && (
                                    <div> دمت گرم مشتی هستی </div>
                                )}
                            </BoxShadow>
                        </div>
                    </div>
                </ProfileContainer>
            </div>
        </MainSection>
    );
}

export default Profile;
