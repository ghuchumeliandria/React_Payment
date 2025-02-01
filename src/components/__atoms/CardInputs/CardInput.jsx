import React from "react";
import './cardInput.css'

function CardInput(props){
    return(
        <>
            <input type="text" className={props.className} placeholder={props.placeHolder}/>
        </>
    )
}
export default CardInput