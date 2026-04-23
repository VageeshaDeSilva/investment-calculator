import type { userInputValuesType } from "../types/userInputValues";
import { calculateInvestmentResults } from "../utils/investment.ts";

export default function Results({
  userInputValues,
}: {
  userInputValues: userInputValuesType;
}) {
  //   console.log("Received values in Results component:", userInputValues);

  const calculatedResults = calculateInvestmentResults(userInputValues);
  console.log("Calculated Results:", calculatedResults);

  return (
    <>
      <h1>Results</h1>
      {/* <p>Initial Investment: {calculatedResults.year}</p>
      <p>Annual Investment: {calculatedResults.interest}</p>
      <p>Expected Return: {calculatedResults.valueEndOfYear}</p>
      <p>Duration: {calculatedResults.annualInvestment}</p> */}
    </>
  );
}
