import BMICalculator from '../BMICalculator/BMICalculator'
import { Level } from '../BMICalculator/calculate';
import './LeftSide.css'

type LeftSideProps = {
  updateBmiLevel: (level: Level | undefined) => void;
}

function LeftSide({updateBmiLevel}: LeftSideProps) {

  const handleBmiLevelUpdate = (level: Level | undefined) => {
    updateBmiLevel(level);
  }


    return (
      <div className={'left-side'}>
        <h2>Calculate your BMI</h2>
        <p>BMI is short for Body Mass Index, parameter adopted my the WHO to calculate the ideal weight for each person</p>
        <BMICalculator handleBmiLevelUpdate={handleBmiLevelUpdate}/>
      </div>
    )
  }
  
  export default LeftSide