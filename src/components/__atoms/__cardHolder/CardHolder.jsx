import React from "react";
import "../../__molecules/__paymentCards/Card.css"

function CardHolder(props){
    return (
        <>
        <div className="card_holder">
            <p className="name_paragraph"> {props.cardHolder} </p>
            <p>{props.cardMonth}/{props.cardYear} </p>

        </div>
        </>
    )
}

export default CardHolder;