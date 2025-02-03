import React, { useState } from "react";
import "../../__molecules/__paymentCards/Card.css";
import InputMask from "react-input-mask";

function CardNumber(props) {
  return (
    <>
      <div className="card_number">
        <InputMask
          placeholder="0000 0000 0000 0000"
          value={props.cardNum}
          maskChar={null}
          mask="9999 9999 9999 9999" 
          className="card_number_input"
        />
      </div>
    </>
  );
}

export default CardNumber;
