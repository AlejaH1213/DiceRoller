import React from "react"

const Dice = (props) => {
  return( 
  <>
    <div onClick={props.rollThatDice} >
      <img src={props.currentDice}/>
  </div>
  </>
    )  
}
export default Dice