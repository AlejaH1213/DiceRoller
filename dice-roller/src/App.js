import React, {useState} from "react"
import Dice from "./components/Dice"
import Roller from "./components/Roller"
import './App.css';



const App = () => {
  // const numbers = [1, 2, 3, 4, 5, 6]
  const [currentNumber, setCurrentNumber] = useState()
  
  const triggerRandomNum = () => {
    setCurrentNumber(Math.floor(Math.random()* 7))
  } // we put set current number because we want it to change the current number to the random number that we just created with our randomizer 
return (
  <>
  <h1>Dice Roll Application</h1>
  <div className="container">
  <Dice 
  currentNumber={currentNumber} 
  triggerRandomNum={triggerRandomNum}/> 
  <Roller />
  </div>
  </>
  
)

}

export default App;
