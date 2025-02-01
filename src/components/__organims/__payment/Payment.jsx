import React from "react";
import "./Payment.css";
import CardBack from "../../__molecules/__paymentCards/CardBack";
import CardFront from "../../__molecules/__paymentCards/cardFront";



function Payment(){

    return(
        <>
        <div className="payment_main">
            <div className="payment_main_box">
            <div className="payment_cards">
                <div className="payment_front_card">
                <CardFront />
                </div>
                <div className="payment_back_card">
                <CardBack />
                </div>
            </div>
            </div>
        </div>
        </>
    )
}

export default Payment;