import "./App.css";
import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { themeLight } from "./Theme/theme";
import styled from "styled-components";
//  pages Componenet
import Home from "./Components/Pages/Home/Home";
import About from "./Components/Pages/About/About";
import Login from "./Components/Pages/LogReg/Login";
import { ThemeProvider } from "styled-components";
import Verify from "./Components/Pages/LogReg/Verify";
import Register from "./Components/Pages/LogReg/Register";

// impo them
import { defaultMarginTop } from "./Components/variables";
import Profile from "./Components/Dashboard/Profile";
import SupportPage from "./Components/Pages/Support/SupportPage";
import Villas from "./Components/Pages/Villas/Villas";
import MyVilla from "./Components/Pages/MyVilla/MyVilla";
import Header from "./Components/GlobalComponenet/Header";
import Footer from "./Components/GlobalComponenet/Footer";

//  import context
import UserProvider from "./Providers/UserProvider";
import StaysProvider from "./Providers/StaysProvider";
import Invoices from "./Components/Pages/Payment/Invoices";

const MainSection = styled.section`
    margin-top: ${(props) => props.props};
    padding-bottom: 10px;
    @media only screen and (max-width: 600px) {
        padding-bottom: 10px;
    }
`;

function App() {
    return (
        <ThemeProvider theme={themeLight}>
            <UserProvider>
                <StaysProvider>
                    <MainSection className="container mx-auto">
                        <div className="md:w-10/12 w-11/12 mx-auto h-fit">
                            <Header />
                        </div>
                    </MainSection>
                    <AnimatePresence exitBeforeEnter>
                        <Routes>
                            <Route path="/" exact element={<Home />} />
                            <Route path="/verify-code" element={<Verify />} />
                            <Route path="/register" element={<Register />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/about" element={<About />} />
                            {/* {localStorage.getItem("USER_TOKEN") ? (
                                <> */}
                            <Route
                                path="/profile/account"
                                element={<Profile />}
                            />
                            <Route
                                path="/profile/user-history"
                                element={<Profile />}
                            />
                            <Route
                                path="/profile/user-payment"
                                element={<Profile />}
                            />
                            <Route
                                path="/profile/user-notice"
                                element={<Profile />}
                            />
                            <Route
                                path="/profile/user-news"
                                element={<Profile />}
                            />
                            <Route
                                path="/profile/user-invite"
                                element={<Profile />}
                            />
                            <Route path="/support" element={<SupportPage />} />
                            <Route path="/stays/:city" element={<Villas />} />
                            <Route path="/stays/" element={<Villas />} />
                            <Route path="/stay/:slug" element={<MyVilla />} />
                            <Route path="/invoice" element={<Invoices />} />
                        </Routes>
                    </AnimatePresence>

                    {/* footer */}
                    <MainSection
                        className="w-full bg-gray-100"
                        props={defaultMarginTop}
                    >
                        <div className="md:w-11/12 w-11/12 mx-auto">
                            <Footer />
                        </div>
                    </MainSection>
                </StaysProvider>
            </UserProvider>
        </ThemeProvider>
    );
}

export default App;
