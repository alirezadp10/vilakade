import React, { useState, useEffect } from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";

function InfoModal(props) {
    const { open, title, text } = props;

    const [OpenState, setOpenState] = useState();
    console.log("norm");

    useEffect(() => {
        setOpenState(open);
        console.log("eff");
    }, [open ,OpenState]);

    const oncloseModal = () => {
        setOpenState(false);
        console.log("clsoe");
    };
    const onOpenModal = () => {
        setOpenState(true);
    };

    return (
        <div>
            <Modal open={OpenState} onClose={oncloseModal} center>
                <p> Sepehran modal </p>
            </Modal>
        </div>
    );
}

export default InfoModal;
