import React, { useContext, useState } from "react";

const StaysContext = React.createContext();
const StaysSetStateContext = React.createContext();

function StaysProvider({ children }) {
    const [staysInformation, setStaysInformation] = useState([
        {
            id: 125,
            name: "سوییت نقلی «دینا» در رشت",
            country: "iran",
            State: "مازندران",
            city: "نوشهر",
            datecreate: "1398/02/20",
            dateReserved: {},
            reserveStartDate: "1400/12/28",
            reserveEndDate: "1401/01/15",
            price: "1000000",
            url: "125685",
            mainImg: "kdjklsmc",
            imgs: {},
            reserveStatus: 1,
            discount : 20,
        },
        {
            id: 126,
            name: "سوییت نقلی «دینا» در رشت",
            country: "iran",
            State: "مازندران",
            city: "نوشهر",
            datecreate: "1398/02/20",
            dateReserved: {},
            reserveStartDate: "1400/12/28",
            reserveEndDate: "1401/01/15",
            price: "2200000",
            url: "125685",
            mainImg: "kdjklsmc",
            imgs: {},
            reserveStatus: 1,
            discount : 20,
        },
        {
            id: 127,
            name: "سوییت نقلی «دینا» در رشت",
            country: "iran",
            State: "مازندران",
            city: "نوشهر",
            datecreate: "1398/02/20",
            dateReserved: {},
            reserveStartDate: "1400/12/28",
            reserveEndDate: "1401/01/15",
            price: "800000",
            url: "125685",
            mainImg: "kdjklsmc",
            imgs: {},
            reserveStatus: 1,
            discount : 20,
        },
        {
            id: 128,
            name: "سوییت نقلی «دینا» در رشت",
            country: "iran",
            State: "گیلان",
            city: "نوشهر",
            datecreate: "1398/02/20",
            dateReserved: {},
            reserveStartDate: "1400/12/28",
            reserveEndDate: "1401/01/8",
            price: "1300000",
            url: "125685",
            mainImg: "kdjklsmc",
            imgs: {},
            reserveStatus: 2,
            discount : 20,
        },
        {
            id: 129,
            name: "سوییت در رشت",
            country: "iran",
            State: "گیلان",
            city: "نوشهر",
            datecreate: "1398/02/20",
            dateReserved: {},
            reserveStartDate: "1400/12/28",
            reserveEndDate: "1401/01/8",
            price: "1300000",
            url: "125685",
            mainImg: "kdjklsmc",
            imgs: {},
            reserveStatus: 2,
            discount : 20,
        },
        {
            id: 130,
            name: "سوییت نقلی «دینا» در رشت",
            country: "iran",
            State: "گیلان",
            city: "نوشهر",
            datecreate: "1398/02/20",
            dateReserved: {},
            reserveStartDate: "1400/12/28",
            reserveEndDate: "1401/01/8",
            price: "1300000",
            url: "125685",
            mainImg: "kdjklsmc",
            imgs: {},
            reserveStatus: 2,
            discount : 20,
        },
        {
            id: 131,
            name: "سوییت در رشت",
            country: "iran",
            State: "گیلان",
            city: "نوشهر",
            datecreate: "1398/02/20",
            dateReserved: {},
            reserveStartDate: "1400/12/28",
            reserveEndDate: "1401/01/8",
            price: "1300000",
            url: "125685",
            mainImg: "kdjklsmc",
            imgs: {},
            reserveStatus: 2,
            discount : 20,
        },
    ]);

    return (
        <StaysContext.Provider value={staysInformation}>
            <StaysSetStateContext.Provider value={setStaysInformation}>
                {children}
            </StaysSetStateContext.Provider>
        </StaysContext.Provider>
    );
}

function useStaysState() {
    const resultState = useContext(StaysContext);
    return resultState;
}

function useStaysSetState() {
    return useContext(StaysSetStateContext);
}

export { useStaysState, useStaysSetState };
export default StaysProvider;
