import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Results from "./components/Results";
import UserInputs from "./components/UserInputs";

interface userInputValuesType {
  initialInvestment: number;
  annualInvestment: number;
  expectedReturn: number;
  duration: number;
}

function App() {
  const [userInputValues, setUserInputValues] = useState<userInputValuesType>({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0,
  });

  return (
    <>
      <div className="app-shell">
        <Header />
        <div className="calculator-layout">
          <div className="calculator-form">
            <UserInputs setUserInputValues={setUserInputValues} />
          </div>
          <div className="results-wrap">
            <Results userInputValues={userInputValues} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
