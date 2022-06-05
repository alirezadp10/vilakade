import React, { useContext, useState } from "react";

const UserContext = React.createContext();
const UserSetStateContext = React.createContext();

function UserProvider({ children }) {
   
    const [userInformation, setUserInformation] = useState({
        id: 12321,
        _TOKEN: "kdcndjkvnkdlvnlkdvc-sklceklsc",
        fullname: "سپهران بابایی",
        useanme: "sepehran",
        email: "",
        imgProfile: "",
        gender: "male",
        birthdayDate: "1375/03/10",
        country: "iran",
        state: "tehran",
        city: "tehran",
        telephone: "1234567896",
        cellPhoneNumber: "9030949095",
        bio: "",
        address: "تهران - خیابان فرشته - خیابان اریا - پلاک 5",
        favCites: [
            {
                id: 120,
                cityName: "تهران",
            },
            {
                id: 121,
                cityName: "بابل",
            },
            {
                id: 122,
                cityName: "بندر انزلی",
            },
        ],
    });


    return (
        <UserContext.Provider value={userInformation}>
            <UserSetStateContext.Provider value={setUserInformation}>
                {children}
            </UserSetStateContext.Provider>
        </UserContext.Provider>
    );
}

function useUserState() {
    const resultState = useContext(UserContext);
    // console.log(resultState)
    return resultState;
}

function useUsersetState() {
    return useContext(UserSetStateContext);
}

export { useUserState, useUsersetState };
export default UserProvider;
