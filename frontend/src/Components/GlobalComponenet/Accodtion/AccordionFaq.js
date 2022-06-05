import React, { useState } from "react";
import styled from "styled-components";
import { BiChevronDown } from "react-icons/bi";
import { text } from "../../variables";
import { AnimatePresence, motion } from "framer-motion";

const AccordionFaqContainer = styled.div``;

function AccordionFaq({ windowDimensions }) {
    const [activeAccordtion, setActiveAccordtion] = useState(false);

    return (
        <AccordionFaqContainer className="">
            <div
                className="ui rounded-xl transition-all duration-200 bg-inherit border-2
             border-gray-200 hover:shadow-md w-full h-auto relative"
            >
                <div
                    className={`text-sm flex flex-row justify-between ${
                        windowDimensions.width < 600
                            ? "items-start"
                            : "items-center"
                    } px-3 py-4 ${
                        activeAccordtion ? "font-semibold" : "font-normal"
                    } `}
                    onClick={() => setActiveAccordtion(!activeAccordtion)}
                >
                    اجاره ویلا و سوئیت از سایت سپهران را چگونه انجام دهم؟
                    <BiChevronDown
                        size={20}
                        className={`text-gray-400 transition-all duration-500 ${
                            activeAccordtion ? "rotate-180" : "rotate-0"
                        }`}
                    />
                </div>
                <AnimatePresence initial={false}>
                    {activeAccordtion && (
                        <motion.div
                            initial="collapsed"
                            animate="open"
                            exit="collapsed"
                            variants={{
                                open: { height: "auto" },
                                collapsed: { height: 0 },
                            }}
                            transition={{
                                duration: 0.4,
                                ease: [0.04, 0.62, 0.23, 0.98],
                            }}
                            className="border-t-2 border-gray-200 text-sm leading-6 mx-3"
                        >
                            <motion.div
                                initial="collapsed"
                                animate="open"
                                exit="collapsed"
                                variants={{
                                    open: { opacity: 1 },
                                    collapsed: { opacity: 0 },
                                }}
                                transition={{
                                    duration: 0.3,
                                    type: "spring",
                                }}
                            >
                                {text}
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </AccordionFaqContainer>
    );
}

export default AccordionFaq;
