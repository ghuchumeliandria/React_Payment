import React from "react";
import "./paymentInputs.css";
import CardInput from "../../__atoms/CardInputs/CardInput";
import ConfirmBtn from "../../__atoms/__confirmBtn/confirmBtn";
function PaymentInputs() {
  return (
    <>
      <form className="payment_inputs">
        <div className="card_input_side">
          <label>Cardholder Name</label>
          <CardInput className="card_input" placeHolder="e.g. Jane Appleseed" />
        </div>
        <div className="card_input_side">
            <label>
            Card Number
            </label>
            <CardInput className="card_input" placeHolder='e.g. 1234 5678 9123 0000'/>
        </div>
        <div className="form_date_inputs">
          <div className="date_inputs">
            <label>
            Exp. Date MM/YY
            </label>
            <div>
                <CardInput className='card_input date_input' placeHolder="MM" />
                <CardInput className='card_input date_input' placeHolder="YY" />
            </div>
          </div>
          <div className="form_cvc">
            <label >CVC</label>
            <CardInput className="card_input card_cvc" placeHolder="e.g. 123"/>
          </div>
        </div>
        <div className="confirm_btn">
          <ConfirmBtn />
        </div>
      </form>
    </>
  );
}
export default PaymentInputs;
