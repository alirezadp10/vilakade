import React from "react";

function VerifyCodeForm() {
    
    return (
        <form className="FormLogin">
            <div className="flex md:gap-8 gap-2">
                {[...Array(5)].map((item, index) => (
                    <input
                        key={index}
                        type="number"
                        className="border-2 h-24 w-1/5 border-gray-300 bg-inherit rounded-lg text-4xl text-center focus:outline-none"
                    />
                ))}
                {/* <VerifyCodeContainer>
            <ReactCodeInput
                type="number"
                fieldWidth={100}
                fieldHeight={100}
                autoFocus={true}
                onComplete={() =>
                    console.log("complet pin code")
                }
            />
        </VerifyCodeContainer> */}
            </div>
        </form>
    );
}

export default VerifyCodeForm;
