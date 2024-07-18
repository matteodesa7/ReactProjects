import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";
import { useState } from "react";
function App() {
  
  const [userInput, setUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
})

const inputIsValid = userInput.duration>=1; // booleano necessario per evitare bug

function handleChange(inputIdentifier, newValue){
    setUserInput(prevUserInput => {
        return{
            
            ...prevUserInput,//copio l'array userInput in uno nuovo evitando il side effect
            [inputIdentifier]: +newValue, // + mi permette di trasformare una stringa in un int o double

        };
    });

}
  return (
    <>
    <Header />
    <UserInput userInput={userInput} onChange={handleChange}/>
     {!inputIsValid && <p className="center">Please enter a duration greader than 0</p>}
    {inputIsValid && <Results input={userInput}/>} 
    </>

  );
}

export default App;
