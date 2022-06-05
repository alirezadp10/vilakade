import React, { useState  } from "react";
import { BiUser, BiTrash } from "react-icons/bi";
import { FiEdit } from "react-icons/fi";
import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";

//  import image
import imgBehidLogo from "./../../../assets/imgs/li-yang-FKsKhlTrx78-unsplash.jpg";
import RightLogReg from "../../GlobalComponenet/RightLogReg";
import SideBar from "./components/SideBar";
import CloseBtn from "../../GlobalComponenet/SecondaryComponent/CloseBtn";
import InputComponent from "../../Dashboard/Component_dashboard/InputComponent";
import FaveritCitiesComponent from "./FaveritCitiesComponent";
import { image2 } from "../../variables";

const LoginContainer = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
`;

function Register() {
    const { innerWidth: width, innerHeight: height } = window;

    const [profileImage, setProfileImage] = useState("");
    const [favCities, setFavCities] = useState([]);

    const addFavCityHandle = (city) => {
        setFavCities([
            ...favCities,
            {
                id: city.id,
                name: city.name,
            },
        ]);
    };

    const deletFavCity = (cityId) => {
        console.log("cityId");
        console.log(cityId);
        const newwFav = favCities.filter((item) => item.id != cityId);
        setFavCities(newwFav);
    };

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate("/");
    };

    const profileImageHandler = (event) => {
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
                setProfileImage(reader.result);
            }
        };
        reader.readAsDataURL(event.target.files[0]);
    };

    const deleteProfileImage = () => {
        alert("delet image");
        setProfileImage("");
    };

    const handleChnageImage = () => {
        setProfileImage("");
        profileImageHandler();
    };

    const [CityAvaliableList, setCityAvaliableList] = useState([
        {
            id: 0,
            name: "تهران",
            fav: true,
        },
        {
            id: 1,
            name: "بابل",
            fav: true,
        },
        {
            id: 2,
            name: "بندر انزلی",
            fav: false,
        },
        {
            id: 3,
            name: "بوشهر",
            fav: false,
        },
        {
            id: 4,
            name: "گرگان",
            fav: false,
        },
        {
            id: 5,
            name: "رشت",
            fav: false,
        },
        {
            id: 6,
            name: "ساری",
            fav: false,
        },
        {
            id: 7,
            name: "امل",
            fav: false,
        },
        {
            id: 8,
            name: "اضفهان",
            fav: false,
        },
        {
            id: 9,
            name: "مشهد",
            fav: false,
        },
        {
            id: 10,
            name: "قائم شهر",
            fav: false,
        },
        {
            id: 11,
            name: "ساوه",
            fav: false,
        },
        {
            id: 12,
            name: "تبریز",
            fav: false,
        },
        {
            id: 13,
            name: "فریدونکنار",
            fav: false,
        },
        {
            id: 14,
            name: "بابلسر",
            fav: false,
        },
    ]);

    

    return (
        <LoginContainer
            className="md:h-screen 
        h-screen  md:flex md:flex-row flex-col justify-between p-0 m-0 md:items-center bg-white z-50"
        >
            <SideBar width={width} />
            <div className="md:w-4/6 w-full flex justify-center text-center align-bottom ">
                <div className=" md:w-3/5 w-5/6 text-right ">
                    <h1 className="md:text-4xl text-3xl md:mb-5 mb-2 md:mt-0 mt-5">
                        ساخت اکانت
                    </h1>
                    <p className="text-gray-500">
                        لطفا شماره همراهت رو داخل کارد پایین وارد کن تا کد اهراز
                        هویت رو برات بفرستیم که خیال راحت وارد حساب کاربریت بشی
                    </p>
                    <div className="mt-8" dir="rtl">
                        <form
                            className="FormLogin "
                            onSubmit={(event) => handleSubmit(event)}
                        >
                            <div className=" flex mx-auto text-center justify-center">
                                <div className="mb-3">
                                    <input
                                        type="file"
                                        id="profileImage"
                                        accept="image/jpeg"
                                        className="my-btn hidden bg-red-400 w-full mt-5 cursor-pointer"
                                        onChange={profileImageHandler}
                                    />
                                    {!profileImage ? (
                                        <>
                                            <label htmlFor="profileImage">
                                                <div className=" bg-gray-100 border-2 mb-4 border-dashed border-gray-300 rounded-2xl px-4 py-2">
                                                    <BiUser
                                                        className="m-auto text-gray-300"
                                                        size={50}
                                                    />
                                                    <p className="text-gray-400">
                                                        اضافه کردن تصویر پروفایل
                                                    </p>
                                                </div>
                                            </label>
                                        </>
                                    ) : (
                                        <>
                                            <img
                                                src={profileImage}
                                                alt="profile user"
                                                className="profileImage mx-auto my-3 w-32 h-32 rounded-full"
                                            />
                                            <div className="flex gap-8">
                                                <div
                                                    className="text-red-400 flex "
                                                    onClick={deleteProfileImage}
                                                >
                                                    <BiTrash size={20} />
                                                    <span className="mr-2">
                                                        {" "}
                                                        حذف تصویر{" "}
                                                    </span>
                                                </div>
                                                <div className="text-blue-400">
                                                    <label
                                                        htmlFor="profileImage"
                                                        className="flex"
                                                    >
                                                        <FiEdit size={20} />
                                                        <span className="mr-2">
                                                            {" "}
                                                            ویرایش تصویر{" "}
                                                        </span>
                                                    </label>
                                                </div>
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>
                            <input
                                type="text"
                                placeholder="نام و نام خانوادگی ..."
                                className="w-full input focus:outline-none mt-3"
                            />

                            <FaveritCitiesComponent
                                CityAvaliableList={CityAvaliableList}
                                setCityAvaliableList={setCityAvaliableList}
                                favCities={favCities}
                                addFavCityHandle={addFavCityHandle}
                                deletFavCity={deletFavCity}
                            />

                            <input
                                type="submit"
                                value="ادامه"
                                className="my-btn bg-red-400 w-full mt-5 cursor-pointer"
                            />
                        </form>
                    </div>
                </div>
            </div>

            <CloseBtn />
        </LoginContainer>
    );
}

export default Register;
