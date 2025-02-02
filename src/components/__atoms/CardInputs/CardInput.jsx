import React, { useState } from "react";
import "./cardInput.css";

function CardInput(props) {
  function cardFun(e) {
    props.cardData(e.target.value);
    const { value } = e.target;
    
  }
  return (
    <>
      <input
        type="text"
        className={props.className}
        placeholder={props.placeHolder}
        inputMode="numeric"
        autoComplete="cc-number"
        // value={inputValue}
        onChange={cardFun}
        
      />
    </>
  );
}
export default CardInput;
