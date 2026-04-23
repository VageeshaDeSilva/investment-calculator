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
      <div className="flex flex-col items-center justify-center py-10">
        <section className="flex flex-col items-center justify-start">
          <Header />
        </section>
        <section className="flex flex-col items-center justify-start mt-10">
          <UserInputs setUserInputValues={setUserInputValues} />
        </section>
        <section className="flex flex-col items-center justify-start mt-10">
          <Results userInputValues={userInputValues} />
        </section>
      </div>
    </>
  );
}

export default App;
