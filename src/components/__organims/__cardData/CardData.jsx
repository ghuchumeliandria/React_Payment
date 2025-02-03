import React from "react";
import "./CardData.css";
import PaymentInputs from "../../__molecules/paymentInputs/paymentInputs";
function CardData(props) {
  return (
    <>
      <div className="card_data">
        <div className="payment_inputs_main">
          <PaymentInputs
            cardNum={props.cardNum}
            cardHolder={props.cardHolder}
            setCardMonth={props.setCardMonth}
            setCardYear={props.setCardYear}
            setCardCvc={props.setCardCvc}
            true={props.true}
            isTrue={props.isTrue}
            setBtnTrue={props.setBtnTrue}
          />
        </div>
      </div>
    </>
  );
}

export default CardData;
