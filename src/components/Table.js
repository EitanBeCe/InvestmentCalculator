const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
});

const Table = props => {
    return <table className="result">
        <thead>
            <tr>
                <th>Year</th>
                <th>Total Savings</th>
                <th>Interest (Year)</th>
                <th>Total Interest</th>
                <th>Invested Capital</th>
            </tr>
        </thead>

        <tbody>
            {props.data.map(result => {
                return <tr key={result.year}>
                    <td>{result.year}</td>
                    <td>{formatter.format(result.savingsEndOfYear)}</td>
                    <td>{formatter.format(result.yearlyInterest)}</td>
                    <td>{formatter.format(result.savingsEndOfYear - props.initialInvestment - result.yearlyContribution * result.year)}</td>
                    <td>{formatter.format(props.initialInvestment + result.yearlyContribution * result.year)}</td>
                </tr>
            })}
        </tbody>
    </table>
}

export default Table