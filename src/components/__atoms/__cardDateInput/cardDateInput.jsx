import React, { useState } from "react";
import "../CardInputs/CardInput.css";
import { use } from "react";

function CardDateInput(props) {
  const [inputError, setInputError] = useState("");
  function cardFun(e) {
    props.cardData(e.target.value);
    const { value } = e.target;
    if (isNaN(value) ) {
        setInputError("Please Enter a Number");
    }   
    else{
        setInputError("")
    }
    if( value.length > 2){
      setInputError(" long")
    } 
    
  }
  return (
    <>
      <div className="card_num_input_div">
        <input
          type="text"
          className={props.className}
          placeholder={props.placeHolder}
          inputMode="numeric"
          autoComplete="cc-number"
          onChange={cardFun}
        />
        <p >{inputError}</p>
      </div>
    </>
  );
}
export default CardDateInput;
