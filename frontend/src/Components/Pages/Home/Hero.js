import React, { useState, useRef ,useEffect} from "react";
import styled from "styled-components";
import { image } from "../../variables";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { motion } from "framer-motion";
import { useUserState } from "../../../Providers/UserProvider";
import { useNavigate } from "react-router-dom";

const HeroContainer = styled.div`
    height: 75vh;

    @media only screen and (max-width: 600px) {
        height: 55vh;
        .imageHero {
            height: 450px;
        }
    }
`;

const citiesList = [
    {
        id: 1,
        name: "تهران",
        state: "تهران",
        rate: 0.5,
        villas: 25,
    },
    {
        id: 2,
        name: "بندر انزلی",
        state: "گیلان",
        rate: 0.8,
        villas: 50,
    },
    {
        id: 3,
        name: "رشت",
        state: "گیلان",
        rate: 0.6,
        villas: 12,
    },
    {
        id: 4,
        name: "لاهیچان",
        state: "گیلان",
        rate: 0.3,
        villas: 3,
    },
    {
        id: 5,
        name: "کردان",
        state: "تهران",
        rate: 0.15,
        villas: 25,
    },
    {
        id: 6,
        name: "بابلسر",
        state: "مازندران",
        rate: 0.9,
        villas: 25,
    },
];

function Hero() {
    const navigator = useNavigate();

    // show search bottom bar or hide
    const [activeSearchCity, setActiveSearchCity] = useState(false);
    // search state input city
    const [cityState, setCityState] = useState("");
    //  use USER contect
    const userInfo = useUserState();
    let showCityesFilter = citiesList;

    // search input handler
    const handleChangeSearchInput = (event) => {
        const NameCity = event.target.value;
        setCityState(NameCity);
    };

    if (cityState.length > 0) {
        showCityesFilter = citiesList.filter((item) =>
            item.name.match(cityState)
        );
    }

    // use ref in main search in hero
    const refsearchHeroInput = useRef();

    useEffect(() => {
        const checkIfClickOutside = (event) => {
            if (
                activeSearchCity &&
                refsearchHeroInput.current &&
                !refsearchHeroInput.current.contains(event.target)
            ) {
                setActiveSearchCity(false);
            }
        };

        document.addEventListener("click", checkIfClickOutside);
        return () => {
            document.addEventListener("click", checkIfClickOutside);
        };
    }, [activeSearchCity]);

    //  hanlde lisy clicked for search
    const handleSearchFromList = (name) => {

        searchCity(name);
    };

    //  submit search input
    const onSearchCity =(event) =>{
        event.preventDefault();
        searchCity(cityState)
    }

    // navigate with city search 
    const searchCity = (city)=>{
        navigator(`/stays/${city}`);
    }

    return (
        <HeroContainer className="mt-3">
            <div className="relative w-full md:h-full h-fit">
                <img
                    src={image}
                    alt="kmdc"
                    className="imageHero absolute z-0 w-full md:h-full 
                    top-0 bottom-0 left-0 right-0 rounded-3xl"
                    style={{ maxHeight: 600 }}
                />
                <div
                    className="bg-white py-0  h-auto rounded-3xl px-3 pr-0 md:w-8/12 w-11/12
                 relative z-20 top-10 mx-auto object-center overflow-hidden"
                >
                    <label
                        htmlFor="city"
                        className="absolute right-8 flex items-center justify-start pt-2"
                    >
                        <HiOutlineLocationMarker
                            size={30}
                            className="text-gray-400"
                        />
                        <span className="text-lg font-medium"> مقصد </span>
                    </label>
                    <form className="md:flex md:justify-between justify-center">
                        <input
                        ref={refsearchHeroInput}
                            // onBlur={() => setActiveSearchCity(false)}
                            onFocus={() => setActiveSearchCity(true)}
                            id="city"
                            value={cityState}
                            onChange={handleChangeSearchInput}
                            type="text"
                            placeholder="شهری میخوای بری رو انتخاب کن ؟"
                            className="w-full h-20 py-8 pb-1 focus:outline-none bg-white pr-8"
                        />
                        {
                            cityState.length > 0  ? (
                                <input
                                    type="submit"
                                    className="bg-red-400 cursor-pointer text-white text-lg md:px-8 md:py-5 py-3
                                      -translate-y-1/2 rounded-full md:absolute md:left-4 md:top-12 md:right-auto md:w-40 relative top-10 right-2 w-11/12 mx-auto block"
                                    value="برو ک بریم !"
                                    onClick={onSearchCity}
                                />
                            ) : (
                                <input
                                disabled
                                    type="submit"
                                    className="bg-red-400 cursor-not-allowed text-white text-lg md:px-8 md:py-5 py-3
                                      -translate-y-1/2 rounded-full md:absolute md:left-4 md:top-12 md:right-auto md:w-40 relative top-10 right-2 w-11/12 mx-auto block"
                                    value="برو ک بریم !"
                                    onClick={onSearchCity}
                                />
                            )
                        }
                    </form>
                    <div
                        className={`border-t-2 border-gray-200 md:mr-8 ml-3 mr-2 md:mt-4 mt-6 ${
                            activeSearchCity ? "h-auto" : "h-0"
                        } `}
                    >
                        <div className="pb-3 pt-2">
                            <div> مقصد های منتخب شما </div>
                            <div className="flex justify-start gap-2 flex-wrap mt-2">
                                {userInfo.favCites.map((item) => (
                                    <span
                                        className="border-2 rounded-3xl border-gray-200 px-5 py-1 text-sm hover:border-red-400 transition-colors duration-500 "
                                        onClick={() =>
                                            handleSearchFromList(item.cityName)
                                        }
                                    >
                                        {item.cityName}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="">
                            <ul className="mb-2">
                                {showCityesFilter.map((item, index) =>
                                    index < 5 ? (
                                        <li
                                            key={item.id}
                                            className="px-2 py-3 border-b-2 border-gray-50 hover:bg-gray-50 hover:text-red-400 rounded-lg "
                                            onClick={() =>
                                                handleSearchFromList(item.name)
                                            }
                                        >
                                            {item.name}
                                            <span className="text-sm text-gray-400 mr-3">
                                                {item.villas}
                                            </span>
                                        </li>
                                    ) : null
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </HeroContainer>
    );
}

export default Hero;
