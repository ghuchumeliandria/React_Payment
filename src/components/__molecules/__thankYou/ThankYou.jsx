import React from "react";
import './ThankYou.css'
import img from '../../../assets/done.png'
function ThankYou(props){
    function reloadPage(){
        window.location.reload()
        props.setBtnTrue(true)
    }
    return(
        <>
        <div className="main_thank_you">
            <div className="thank_you">
                <div className="thank_you_img">
                    <img src={img} alt="" />
                </div>
                <div className="thank_you_text">
                    <h1>THANK YOU!</h1>
                    <p>We’ve added your card details</p>
                </div>
                <button className="confirm_btn" onClick={reloadPage}>Continue</button>
            </div>
            </div>
        </>
    )
}
export default ThankYou;