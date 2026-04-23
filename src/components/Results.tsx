import type { userInputValuesType } from "../types/userInputValues";
import { calculateInvestmentResults, formatter } from "../utils/investment.ts";
import Chart from "./Chart";

export default function Results({
  userInputValues,
}: {
  userInputValues: userInputValuesType;
}) {
  const calculatedResults = calculateInvestmentResults(userInputValues);

  if (calculatedResults.length === 0) {
    return (
      <p className="results-empty">
        Enter your values and press <strong>Calculate</strong> to see
        projections.
      </p>
    );
  }

  const initialInvestment =
    calculatedResults[0].valueEndOfYear -
    calculatedResults[0].interest -
    calculatedResults[0].annualInvestment;

  const lastResult = calculatedResults[calculatedResults.length - 1];
  const totalInterestFinal =
    lastResult.valueEndOfYear -
    lastResult.annualInvestment * lastResult.year -
    initialInvestment;
  const totalInvested = lastResult.valueEndOfYear - totalInterestFinal;

  const chartData = calculatedResults.map((r) => ({
    year: r.year,
    value: r.valueEndOfYear,
  }));

  return (
    <>
      {/* <h2 className="results-heading">Results</h2> */}

      {/* Projection chart card */}
      <div className="projection-card">
        <p className="projection-card-title">Projection Summary</p>
        <Chart data={chartData} />
      </div>

      {/* Stat boxes */}
      <div className="stat-row">
        <div className="stat-box">
          <p className="stat-label">Total Invested</p>
          <p className="stat-value">{formatter.format(totalInvested)}</p>
        </div>
        <div className="stat-box">
          <p className="stat-label">Total Interest Earned</p>
          <p className="stat-value">{formatter.format(totalInterestFinal)}</p>
        </div>
        <div className="stat-box">
          <p className="stat-label">Value After {lastResult.year} Years</p>
          <p className="stat-value">
            {formatter.format(lastResult.valueEndOfYear)}
          </p>
        </div>
      </div>

      {/* Year-by-year table */}
      <div className="table-card">
        <p className="table-card-title">Year-by-Year Growth</p>
        <table className="results-table">
          <thead>
            <tr>
              <th>Year</th>
              <th>Invested Capital</th>
              <th>Interest</th>
              <th>Total Interest</th>
              <th>Total Value</th>
            </tr>
          </thead>
          <tbody>
            {calculatedResults.map((results) => {
              const totalInterest =
                results.valueEndOfYear -
                results.annualInvestment * results.year -
                initialInvestment;
              const totalAmountInvested =
                results.valueEndOfYear - totalInterest;

              return (
                <tr key={results.year}>
                  <td>{results.year}</td>
                  <td>{formatter.format(totalAmountInvested)}</td>
                  <td>{formatter.format(results.interest)}</td>
                  <td>{formatter.format(totalInterest)}</td>
                  <td>{formatter.format(results.valueEndOfYear)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
