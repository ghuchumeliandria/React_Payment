import React, { useState } from "react";
import "../CardInputs/cardInput.css";

function CardNumInput(props) {
    const [inputError, setInputError] = useState("")
  function cardFun(e) {
    props.cardData(e.target.value);
    const { value } = e.target;
   if(value.length > 16){
        setInputError("Please enter less than 16 digits")
   }else{
    setInputError("")
   }

   if(isNaN(value)){
    setInputError('Please enter a number')
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
        <p>{inputError}</p>
        </div>
    </>
  );
}
export default CardNumInput;