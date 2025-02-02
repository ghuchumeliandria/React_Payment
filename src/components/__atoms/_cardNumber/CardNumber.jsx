import React, { useState } from "react";
import "../../__molecules/__paymentCards/Card.css";

function CardNumber(props) {
  return (
    <>
      <div className="card_number">
        <input
          type="text"
          inputMode="numeric"
          autoComplete="cc-number"
          placeholder={props.cardNum}
          className="card_number_input"
          onChange={(e) => {
            const { value } = e.target;
            e.target.value = normalizedCardNumber(value);
          }}
        />
      </div>
    </>
  );
}

export default CardNumber;
