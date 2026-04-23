import { useState } from "react";
import Button from "./Button";
import type { userInputValuesType } from "../types/userInputValues";

export default function UserInputs({
  setUserInputValues,
}: {
  setUserInputValues: React.Dispatch<React.SetStateAction<userInputValuesType>>;
}) {
  const [userInputs, setUserInputs] = useState<userInputValuesType>({
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
    setUserInputValues(userInputs);
  }

  return (
    <>
      <div className="input-grid">
        <p className="field">
          <label className="labels">Initial Investment</label>
          <input
            type="number"
            required
            className="field-input"
            name="initialInvestment"
            placeholder="e.g., 1000"
            value={userInputs.initialInvestment}
            onChange={handleChange}
          />
        </p>
        <p className="field">
          <label className="labels">Annual Investment</label>
          <input
            type="number"
            required
            className="field-input"
            name="annualInvestment"
            placeholder="e.g., 1000"
            value={userInputs.annualInvestment}
            onChange={handleChange}
          />
        </p>
        <p className="field">
          <label className="labels">Expected Return</label>
          <input
            type="number"
            required
            className="field-input"
            name="expectedReturn"
            placeholder="e.g., 6%"
            value={userInputs.expectedReturn}
            onChange={handleChange}
          />
        </p>
        <p className="field">
          <label className="labels">Duration</label>
          <input
            type="number"
            required
            className="field-input"
            name="duration"
            placeholder="e.g., 1 Year"
            value={userInputs.duration}
            onChange={handleChange}
          />
        </p>
      </div>

      <div className="action-row">
        <Button name="Calculate" onClick={handleSubmit} />
      </div>
    </>
  );
}
