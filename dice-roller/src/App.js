import React, {useState} from "react"
import Dice from "./components/Dice"
import Roller from "./components/Roller"
import './App.css';
import diceone from "./assets/diceone.png"
import dicetwo from "./assets/dicetwo.png"
import dicethree from "./assets/dicethree.png"
import dicefour from "./assets/dicefour.png"
import dicefive from "./assets/dicefive.png"
import dicesix from "./assets/dicesix.png"

const App = () => {
 
  const [currentDice, setCurrentDice] = useState("")
  const [lastRoll, setLastRoll] = useState ([])
  const diceNums = [diceone, dicetwo, dicethree, dicefour, dicefive, dicesix]
  const rollThatDice = () => {
    const randomRoll = Math.ceil(Math.random() * diceNums.length)
    setCurrentDice(diceNums[randomRoll - 1])
    setLastRoll([...lastRoll, randomRoll])
  } 
return (
  <>
  <h1>Rolling Dice</h1>
  <Dice 
  rollThatDice={rollThatDice} 
  currentDice={currentDice}
  />
  <Roller 
  lastRoll = {lastRoll} />
  </>
  
)

}

export default App;
