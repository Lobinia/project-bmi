import { Level } from "../BMICalculator/calculate";
import "./RightSide.css";
import upImage from "../../assets/up.png"
import downImage from "../../assets/down.png"

type RightSideProps = {
  bmiLevel: Level | undefined;
};

function RightSide(props: RightSideProps) {
  const { bmiLevel } = props;

  const rightContainerClass = bmiLevel ? 'right-side' : 'right-side hide'

  return (
    <div className={rightContainerClass}>
      <div className={`right-side-container ${bmiLevel?.color}`}>
        {bmiLevel?.icon === 'up' && <img src={upImage} alt="Thumbs up" />}
        {bmiLevel?.icon === 'down' && <img src={downImage} alt="Thumbs down" />}
        {bmiLevel?.title && <h3>{bmiLevel.title}</h3>}
        {bmiLevel?.title && <h3>{bmiLevel.currentBmi}</h3>}
        {bmiLevel?.bmiRange && <h4>Your BMI level is between {bmiLevel.bmiRange[0]} and {bmiLevel.bmiRange[1]}</h4>}
      </div>
    </div>
  );
}

export default RightSide;
