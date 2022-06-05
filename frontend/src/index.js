import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import 'swiper/css';
import { BrowserRouter } from "react-router-dom"
import "swiper/css/bundle";
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById("root")
);
