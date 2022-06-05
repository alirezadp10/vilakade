import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

import { IoIosClose } from "react-icons/io";
import { Notify } from "../../GlobalComponenet/Toast/Notify";

const FaveritCitiesContainer = styled.div``;

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

function FaveritCitiesComponent(props) {
    const { CityAvaliableList, setCityAvaliableList } = props;

    const addFavCity = (cityid) => {
        const favCity = CityAvaliableList.filter((item) => item.fav === true);
        if (favCity.length < 4) {
            setCityAvaliableList(
                CityAvaliableList.map((item) => {
                    if (item.id === cityid) {
                        return { ...item, fav: true };
                    }
                    return item;
                })
            );
        } else {
            Notify("تعداد شهر های علاقه من باید کمتر از 4 باشد");
        }
    };

    const deletFavCityHandler = (id) => {
        setCityAvaliableList(
            CityAvaliableList.map((item) => {
                if (item.id === id) {
                    return { ...item, fav: false };
                }
                return item;
            })
        );
    };

    // city list popup sho /hide
    const [activeFavCities, setActiveFavCities] = useState(false);

    // use ref in main search in hero
    const refFavCities = useRef();

    useEffect(() => {
        const checkIfClickOutside = (event) => {
            if (
                activeFavCities &&
                refFavCities.current &&
                !refFavCities.current.contains(event.target)
            ) {
                setActiveFavCities(false);
            }
        };

        document.addEventListener("click", checkIfClickOutside);
        return () => {
            document.addEventListener("click", checkIfClickOutside);
        };
    }, [activeFavCities]);

    console.log("activeFavCities");
    console.log(activeFavCities);

    // let showCityesFilter = citiesList;
    // if (cityState.length > 0) {
    //     showCityesFilter = citiesList.filter((item) =>
    //         item.name.match(cityState)
    //     );
    // }
    return (
        <div ref={refFavCities}>
            <FaveritCitiesContainer className="relative fav-city-box">
                <input
                    type="text"
                    multiple
                    // value={favCities}
                    value={CityAvaliableList.map((item) =>
                        item.fav === true ? item.name : null
                    ).filter((el) => el !== null)}
                    placeholder="عاشق چه شهر هایی هستی ..."
                    className="w-full input focus:outline-none mt-3"
                    onFocus={() => setActiveFavCities(true)}
                    // onBlur={() => setActiveFavCities(false)}
                />
                {activeFavCities ? (
                    <div className="absolute w-full bottom-0">
                        <div className="py-2 bg-white rounded-xl rounded-tr-none rounded-tl-none w-full h-fit shadow-xl ">
                            <div className="">
                                {/* <input
                                    type="text"
                                    placeholder="جستجو در بین شهر ها ..."
                                    className="w-full h-16 bg-gray-100 p-4 focus:outline-none absolute bottom-full rounded-tl-xl rounded-tr-xl"
                                /> */}
                                <div className="mx-2 my-2 flex gap-2 flex-wrap">
                                    {CityAvaliableList.map((item, index) =>
                                        item.fav ? (
                                            <span
                                                key={index}
                                                className="px-2 py-1 border-2 text-base flex items-center gap-2 text-gray-700 rounded-full bg-gray-100"
                                            >
                                                {item.name}
                                                <IoIosClose
                                                    size={20}
                                                    color="gray"
                                                    onClick={() =>
                                                        deletFavCityHandler(
                                                            item.id
                                                        )
                                                    }
                                                />
                                            </span>
                                        ) : null
                                    )}
                                </div>
                                <ul className="space-y-1 p-2 overflow-x-hidden overflow-y-scroll max-h-72">
                                    {CityAvaliableList.map((item) =>
                                        !item.fav ? (
                                            <li
                                                key={item.id}
                                                className="px-5 py-3 text-lg text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-900"
                                                onClick={() =>
                                                    addFavCity(item.id)
                                                }
                                            >
                                                {item.name}
                                            </li>
                                        ) : null
                                    )}
                                </ul>
                            </div>
                        </div>
                    </div>
                ) : null}
            </FaveritCitiesContainer>
        </div>
    );
}

export default FaveritCitiesComponent;
