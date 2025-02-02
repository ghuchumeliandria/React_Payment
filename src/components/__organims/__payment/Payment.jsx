import React from "react";
import "./Payment.css";
import CardBack from "../../__molecules/__paymentCards/CardBack";
import CardFront from "../../__molecules/__paymentCards/cardFront";



function Payment(props){

    return(
        <>
        <div className="payment_main">
            <div className="payment_main_box">
            <div className="payment_cards">
                <div className="payment_front_card">
                <CardFront cardNum={props.cardNum} cardHolder={props.cardHolder} cardMonth={props.cardMonth} cardYear={props.cardYear} />
                </div>
                <div className="payment_back_card">
                <CardBack cardCvc={props.cardCvc}/>
                </div>
            </div>
            </div>
        </div>
        </>
    )
}

export default Payment;