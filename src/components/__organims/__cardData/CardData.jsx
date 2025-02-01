import React from "react";
import "./CardData.css";
import PaymentInputs from "../../__molecules/paymentInputs/paymentInputs";
function CardData(){

    return(
        <>
        <div className="card_data">
            <div className="payment_inputs_main">
                <PaymentInputs />
            </div>
            </div>
        </>
    )
}

export default CardData;