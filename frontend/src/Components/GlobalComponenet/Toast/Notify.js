import { toast } from "react-toastify";
import { phone } from "../../variables";

toast.configure();
export const Notify = (message) => {
    // console.log(message);
    toast.warning(message, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        icon : `${phone}`
    });
};
