import React from "react";
import "../../__molecules/__paymentCards/Card.css"

function CardSafeCode(props){
    return (
        <>
        <div className="card_safe_code_div">
            <p>{props.cardCvc}</p>

        </div>
        </>
    )
}

export default CardSafeCode;