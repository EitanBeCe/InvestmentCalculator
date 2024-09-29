import { useState } from 'react';
import logo from './assets/investment-calculator-logo.png';
import Form from './components/Form.js';
import Table from './components/Table.js';

function App() {
  const [userInputResult, setUserInputResult] = useState(null)

  const calculateHandler = userInput => {
    const yearlyData = []; // per-year results

    let currentSavings = +userInput['current-savings'];
    const yearlyContribution = +userInput['yearly-contribution'];
    const expectedReturn = +userInput['expected-return'] / 100;
    const duration = +userInput['duration'];

    // Calculates yearly results
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        id: Math.random(),
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }

    setUserInputResult(yearlyData)
  };

  return (
    <div>
      <header className="header">
        <img src={logo} alt="logo" />
        <h1>Investment Calculator</h1>
      </header>

      <Form calculateHandler={calculateHandler} />

      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}

      <Table userInputResult={userInputResult} />
    </div>
  );
}

export default App;
