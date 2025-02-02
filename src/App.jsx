import Payment from "./components/__organims/__payment/Payment";
import CardData from "./components/__organims/__cardData/CardData";
import "./App.css";
import { useState } from "react";
import { use } from "react";

function App() {
  const [cardNum, setCardNum] = useState("0000 0000 0000 0000");
  const [cardHolder, setCardHolder] = useState("JANE APPLESEED");
  const [cardMonth, setCardMonth] = useState("00");
  const [cardYear, setCardYear] = useState("00");
  const [cardCvc, setCardCvc] = useState("000");
  return (
    <>
      <div className="main_container">
        <Payment
          cardNum={cardNum}
          cardHolder={cardHolder}
          cardMonth={cardMonth}
          cardYear={cardYear}
          cardCvc={cardCvc}
        />
        <CardData
          cardNum={setCardNum}
          cardHolder={setCardHolder}
          setCardMonth={setCardMonth}
          setCardYear={setCardYear}
          setCardCvc={setCardCvc}
        />
      </div>
    </>
  );
}

export default App;
