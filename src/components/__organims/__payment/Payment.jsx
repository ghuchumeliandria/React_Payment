import React from "react";
import "./Payment.css";
import CardBack from "../../__molecules/__paymentCards/CardBack";
import CardFront from "../../__molecules/__paymentCards/cardFront";



function Payment(){

    return(
        <>
        <div className="payment_main">
            <div className="payment_card">
                <CardFront />
                <CardBack />
            </div>
        </div>
        </>
    )
}

export default Payment;