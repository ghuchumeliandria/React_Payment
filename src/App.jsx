import Payment from "./components/__organims/__payment/Payment";
import CardData from "./components/__organims/__cardData/CardData";
import "./App.css";
import { useEffect, useState } from "react";
import { use } from "react";
import ThankYou from "./components/__molecules/__thankYou/ThankYou";

function App() {
  const [cardNum, setCardNum] = useState("");
  const [cardHolder, setCardHolder] = useState("JANE APPLESEED");
  const [cardMonth, setCardMonth] = useState("00");
  const [cardYear, setCardYear] = useState("00");
  const [cardCvc, setCardCvc] = useState("000");
  const [isTrue, setIsTrue] = useState(true)
  const [btnTrue,setBtnTrue] = useState(false)

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
       { 
       isTrue && <CardData
          cardNum={setCardNum}
          cardHolder={setCardHolder}
          setCardMonth={setCardMonth}
          setCardYear={setCardYear}
          setCardCvc={setCardCvc}
          true={setIsTrue}
          isTrue={isTrue}
          setBtnTrue={setBtnTrue}
        />
      }
      {

      btnTrue && <ThankYou  />
      }
      </div>
    </>
  );
}

export default App;
