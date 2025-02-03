import React, { useState } from "react";
import "./paymentInputs.css";
import CardInput from "../../__atoms/CardInputs/CardInput";
import ConfirmBtn from "../../__atoms/__confirmBtn/confirmBtn";
import CardNumInput from "../../__atoms/_cardNumInput/CardNumInput";
import CardDateInput from "../../__atoms/__cardDateInput/cardDateInput";
import CardCvcInput from "../../__atoms/__cardCvcInput/CardCvcInput";
function PaymentInputs(props) {
  
    function SubmitFun(e){
      props.true(!props.isTrue)
      props.setBtnTrue(true)
    }
  return (
    <>
      <form onSubmit={SubmitFun} className="payment_inputs">
        <div className="card_input_side">
          <label>Cardholder Name</label>
          <CardInput className="card_input" placeHolder="e.g. Jane Appleseed" cardData={props.cardHolder} />
        </div>
        <div className="card_input_side">
            <label>
            Card Number
            </label>
            
            <CardNumInput className="card_input" placeHolder='e.g. 1234 5678 9123 0000' cardData={props.cardNum}/>
        </div>
        <div className="form_date_inputs">
          <div className="date_inputs">
            <label>
            Exp. Date MM/YY
            </label>
            <div>
                <CardDateInput className='card_input date_input' placeHolder="MM" cardData={props.setCardMonth} />
                <CardDateInput className='card_input date_input' placeHolder="YY" cardData={props.setCardYear}/>
            </div>
          </div>
          <div className="form_cvc">
            <label >CVC</label>
            <CardCvcInput className="card_input card_cvc" placeHolder="e.g. 123" cardData={props.setCardCvc}/>
          </div>
        </div>
        <div className="confirm_btn">
          <ConfirmBtn/>
        </div>
      </form>
    </>
  );
}
export default PaymentInputs;
