import { useState } from "react";
import Button from "./Button";

export default function UserInputs() {
  const [userInputs, setUserInputs] = useState({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0,
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setUserInputs((prev) => ({ ...prev, [name]: Number(value) }));
  }

  function handleSubmit() {
    console.log("Submitted values:", userInputs);
  }

  return (
    <>
      <form>
        <div className="flex flex-row gap-2">
          <p className="flex flex-col gap-2">
            <label className="labels">Initial Investment</label>
            <input
              type="number"
              required
              className="border "
              name="initialInvestment"
              onChange={handleChange}
            />
          </p>
          <p className="flex flex-col gap-2">
            <label className="labels">Annual Investment</label>
            <input
              type="number"
              required
              className="border"
              name="annualInvestment"
              onChange={handleChange}
            />
          </p>
        </div>
        <div className="flex flex-row gap-2">
          <p className="flex flex-col gap-2">
            <label className="labels">Expected Return</label>
            <input
              type="number"
              required
              className="border"
              name="expectedReturn"
              onChange={handleChange}
            />
          </p>
          <p className="flex flex-col gap-2">
            <label className="labels">Duration</label>
            <input
              type="number"
              required
              className="border"
              name="duration"
              onChange={handleChange}
            />
          </p>
        </div>
      </form>

      <div className="mt-4">
        <Button name="Calculate" onClick={handleSubmit} />
      </div>
    </>
  );
}
