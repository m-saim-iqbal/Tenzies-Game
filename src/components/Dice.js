import React from "react"

export default function Dices(props) {
    const styles = {
        backgroundColor: props.on ? "#59E391" : "white"
    }
    
    return (
        <div 
            style={styles} 
            className="dice"
            onClick={props.toggle}
        >
            {props.num}
        </div>
    )
}