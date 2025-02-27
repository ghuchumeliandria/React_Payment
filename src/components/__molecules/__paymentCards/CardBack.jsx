import React from "react";
import "./Card.css";
import CardSafeCode from "../../__atoms/__cardSafeCode/CardSafeCode";

function CardBack(props) {
  return (
    <>
      <div className="card card_back">
        <div className="black_line"></div>
        <CardSafeCode cardCvc={props.cardCvc} />
        <svg 
          xmlns="http://www.w3.org/2000/svg"
          width="186"
          height="26"
          viewBox="0 0 186 26"
          fill="none">
          <rect width="115" height="4" rx="2" fill="#ADB5BE" />
          <rect x="121" width="22" height="4" rx="2" fill="#ADB5BE" />
          <rect x="149" width="22" height="4" rx="2" fill="#ADB5BE" />
          <rect x="177" width="9" height="4" rx="2" fill="#ADB5BE" />
          <rect
            width="115"
            height="4"
            rx="2"
            transform="matrix(-1 0 0 1 186 22)"
            fill="#ADB5BE"
          />
          <rect
            width="22"
            height="4"
            rx="2"
            transform="matrix(-1 0 0 1 65 22)"
            fill="#ADB5BE"
          />
          <rect
            width="22"
            height="4"
            rx="2"
            transform="matrix(-1 0 0 1 37 22)"
            fill="#ADB5BE"
          />
          <rect
            width="9"
            height="4"
            rx="2"
            transform="matrix(-1 0 0 1 9 22)"
            fill="#ADB5BE"
          />
          <rect x="42" y="11" width="60" height="4" rx="2" fill="#ADB5BE" />
          <rect x="14" y="11" width="22" height="4" rx="2" fill="#ADB5BE" />
          <rect x="108" y="11" width="46" height="4" rx="2" fill="#ADB5BE" />
          <rect x="160" y="11" width="9" height="4" rx="2" fill="#ADB5BE" />
        </svg>
      </div>
    </>
  );
}
export default CardBack;
