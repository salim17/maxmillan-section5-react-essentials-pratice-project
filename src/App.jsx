import { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";


console.log("App File loading....");
function App() {

  console.log("App component loading....")

  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration >= 1;

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue, // + converts string to number.. since event.target.value is always a string
      };
    });
  }


  return (
  <>
    <Header />
    <UserInput onChange={handleChange} userInput={userInput}/>
    {!inputIsValid && <p className="center">Please enter a duration greater than zero.</p>}
    {inputIsValid && <Results input={userInput}/>}
  </>);
}

export default App;
