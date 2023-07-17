import React from "react"
import reset from "../images/reset.png"
import Confetti from "./Confetti"

export default function Win(props) {
    // const styles = {
    //     backgroundColor: props.on ? "#59E391" : "white"
    // }

    // function r(){
    //     console.log("lol")
    // }

    return (
        <div className="Win">
            {/* <Confetti /> */}
            <h1 style={{ color: "white", fontSize: "4rem" }}>You Won</h1>
            <div onClick={() => props.onClick()} role="button" >
                <img src={reset} style={{ width: "80px", filter: "invert(100%)" }} alt="reset button" className="reset--button" />
            </div>
        </div>
    )
}