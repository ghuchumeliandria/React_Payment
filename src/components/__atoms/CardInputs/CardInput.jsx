import React, { useState } from "react";
import "./cardInput.css";
import { use } from "react";

function CardInput(props) {
  const [inputError, setInputError] = useState("");
  function cardFun(e) {
    props.cardData(e.target.value);
    const { value } = e.target;
    if (isNaN(value) || value.length == 0 ) {
      setInputError("")
    }   
    else{
      setInputError("Please Enter a String");
    }
    if( value.length > 22){
      setInputError("Such a long first and last name does not exist")
    } 
    
  }
  return (
    <>
      <div className="card_num_input_div">
        <input
          type="text"
          className={props.className}
          placeholder={props.placeHolder}
          onChange={cardFun}
        />
        <p >{inputError}</p>
      </div>
    </>
  );
}
export default CardInput;
