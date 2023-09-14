import React from "react"

const Dice = (props) => {
    console.log(props);
  return( 
  <div className="dice-block">
    <button className="button" onClick={props.triggerRandomNum}>
    click here to roll the dice
    </button>
    {props.currentNumber}
</div>
    )  
}







export default Dice