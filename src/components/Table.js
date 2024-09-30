const Table = props => {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });

    let tableContent = <p style={{textAlign: 'center'}}>"No results"</p>
    if (props.userInputResult) {
        tableContent = props.userInputResult.map(result => {
            return <tr key={result.year}>
                <td>{result.year}</td>
                <td>{formatter.format(result.savingsEndOfYear)}</td>
                <td>{formatter.format(result.yearlyInterest)}</td>
                <td>{formatter.format(result.savingsEndOfYear - props.initialInvesment - result.yearlyContribution * result.year)}</td>
                <td>{formatter.format(props.initialInvesment + result.yearlyContribution * result.year)}</td>
            </tr>
        })
    }

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
            {tableContent}
        </tbody>
    </table>
}

export default Table