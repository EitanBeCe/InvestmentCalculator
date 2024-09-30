import { useState } from 'react';
import logo from './assets/investment-calculator-logo.png';
import Form from './components/Form.js';
import Table from './components/Table.js';

function App() {
  const [userInputResult, setUserInputResult] = useState(null)

  const yearlyData = []; // per-year results
  const calculateHandler = userInput => {
    setUserInputResult(userInput)
    

    let currentSavings = +userInput['current-savings'];
    const yearlyContribution = +userInput['yearly-contribution'];
    const expectedReturn = +userInput['expected-return'] / 100;
    const duration = +userInput['duration'];

    // Calculates yearly results
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // id: Math.random(),
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

      <Table userInputResult={yearlyData} initialInvesment={userInputResult['current-savings']} />
    </div>
  );
}

export default App;
