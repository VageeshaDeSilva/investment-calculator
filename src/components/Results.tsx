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
      <table className="table-auto border-collapse border border-gray-400">
        <thead>
          <tr>
            <th className="border border-gray-400 px-4 py-2">Year</th>
            <th className="border border-gray-400 px-4 py-2">Interest</th>
            <th className="border border-gray-400 px-4 py-2">
              Value at End of the Year
            </th>
            <th className="border border-gray-400 px-4 py-2">
              Annual Investment
            </th>
          </tr>
        </thead>
        <tbody>
          {calculatedResults.map((results) => (
            <tr key={results.year}>
              <td className="border border-gray-400 px-4 py-2">
                {results.year}
              </td>
              <td className="border border-gray-400 px-4 py-2">
                {results.interest}
              </td>
              <td className="border border-gray-400 px-4 py-2">
                {results.valueEndOfYear}
              </td>
              <td className="border border-gray-400 px-4 py-2">
                {results.annualInvestment}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
