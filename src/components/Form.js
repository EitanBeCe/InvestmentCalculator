import { useState } from "react";

const Form = props => {
    const initialInput = {
        'current-savings': 10000,
        'yearly-contribution': 1400,
        'expected-return': 7,
        duration: 10
    }

    const [input, setInput] = useState(initialInput)

    const inputChangeHandler = (inputName, value) => {
        setInput(prevState => {
            return {
                ...prevState,
                [inputName]: +value
            }
        })
    }

    const submitHandler = e => {
        e.preventDefault()

        props.calculateHandler(input)
    }

    const resetHandler = () => {
        setInput(initialInput)
    }

    return <form className="form" onSubmit={submitHandler}>
        <div className="input-group">
            <p>
                <label htmlFor="current-savings">Current Savings ($)</label>
                <input type="number" id="current-savings" value={input["current-savings"]} onChange={e => inputChangeHandler('current-savings', e.target.value)} />
            </p>
            <p>
                <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
                <input type="number" id="yearly-contribution" value={input["yearly-contribution"]} onChange={e => inputChangeHandler('yearly-contribution', e.target.value)} />
            </p>
        </div>
        <div className="input-group">
            <p>
                <label htmlFor="expected-return">
                    Expected Interest (%, per year)
                </label>
                <input type="number" id="expected-return" value={input["expected-return"]} onChange={e => inputChangeHandler('expected-return', e.target.value)} />
            </p>
            <p>
                <label htmlFor="duration">Investment Duration (years)</label>
                <input type="number" id="duration" value={input.duration} onChange={e => inputChangeHandler('duration', e.target.value)} />
            </p>
        </div>
        <p className="actions">
            <button type="reset" className="buttonAlt" onClick={resetHandler}>
                Reset
            </button>
            <button type="submit" className="button">
                Calculate
            </button>
        </p>
    </form>
}

export default Form