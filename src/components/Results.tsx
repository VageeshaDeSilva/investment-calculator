import type { userInputValuesType } from "../types/userInputValues";
import { calculateInvestmentResults, formatter } from "../utils/investment.ts";

export default function Results({
  userInputValues,
}: {
  userInputValues: userInputValuesType;
}) {
  //   console.log("Received values in Results component:", userInputValues);

  const calculatedResults = calculateInvestmentResults(userInputValues);
  if (calculatedResults.length === 0) {
    return <p>Please enter a duration greater than 0 to see results.</p>;
  }

  const initialInvestment =
    calculatedResults[0].valueEndOfYear -
    calculatedResults[0].interest -
    calculatedResults[0].annualInvestment;

  return (
    <>
      <h1>Results</h1>
      {/* <p>Initial Investment: {calculatedResults.year}</p>
      <p>Annual Investment: {calculatedResults.interest}</p>
      <p>Expected Return: {calculatedResults.valueEndOfYear}</p>
      <p>Duration: {calculatedResults.annualInvestment}</p> */}
      <table className="table-auto border-collapse border border-gray-400">
        <thead>
          <tr>
            <th className="border border-gray-400 px-4 py-2">Year</th>
            <th className="border border-gray-400 px-4 py-2">
              Investment value
            </th>
            <th className="border border-gray-400 px-4 py-2">Interest(year)</th>
            <th className="border border-gray-400 px-4 py-2">Total Interest</th>
            <th className="border border-gray-400 px-4 py-2">
              Invested Capital
            </th>
          </tr>
        </thead>
        <tbody>
          {calculatedResults.map((results) => {
            const totalInterest =
              results.valueEndOfYear -
              results.annualInvestment * results.year -
              initialInvestment;

            const totalAmountInvested = results.valueEndOfYear - totalInterest;

            return (
              <tr key={results.year}>
                <td className="border border-gray-400 px-4 py-2">
                  {results.year}
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  {formatter.format(results.valueEndOfYear)}
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  {formatter.format(results.interest)}
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  {formatter.format(totalInterest)}
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  {formatter.format(totalAmountInvested)}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
