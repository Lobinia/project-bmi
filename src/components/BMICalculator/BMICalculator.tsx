import calculateBMI, { Level } from "./calculate";
import './BMICalculator.css'
import { useState } from "react";
import CalculatorInput from "../CalculatorInput/CalculatorInput";

type BMICalculatorProps = {
    handleBmiLevelUpdate: (level: Level | undefined) => void;
  }

  function BMICalculator({handleBmiLevelUpdate}: BMICalculatorProps) {
    const [heightValue, setHeightValue] = useState<string>('');
    const [weightValue, setWeightValue] = useState<string>('');

    const heightInputHandler = (e: React.FormEvent<HTMLInputElement>) => {
        setHeightValue(e.currentTarget.value)
    }
    const weightInputHandler = (e: React.FormEvent<HTMLInputElement>) => {
        setWeightValue(e.currentTarget.value)
    }

    const formSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const bmi = calculateBMI(weightValue, heightValue);
        handleBmiLevelUpdate(bmi)
    }

    return (
        <form name={'BMICalculator'} onSubmit={formSubmitHandler}>
            <CalculatorInput placeholder="180" inputType="number" id="height-input" name="height-input" value={heightValue} onChangeHandler={heightInputHandler} endText="CM"/>
            <CalculatorInput placeholder="70" inputType="number" id="weight-input" name="weight-input" value={weightValue} onChangeHandler={weightInputHandler} endText="KG"/>
            <button>Check BMI</button>
        </form>
    )
}

export default BMICalculator;