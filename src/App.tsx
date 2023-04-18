import { useState } from 'react';
import './App.css'
import Header from './components/Header/Header'
import LeftSide from './components/LeftSide/LeftSide'
import RightSide from './components/RightSide/RightSide'
import { Level } from './components/BMICalculator/calculate';

function App() {
  const [bmiLevel, setBmiLevel] = useState<Level>();

  const updateBmiLevel = (level: Level | undefined) => {
    setBmiLevel(level);
  }

  const containerClass = bmiLevel ? 'calc-container' : 'calc-container center'

  return (
    <div className='container'>
      <Header />
      <div className={containerClass}>
        <LeftSide updateBmiLevel={updateBmiLevel}/>
        {bmiLevel && <RightSide bmiLevel={bmiLevel}/>}
      </div>
    </div>
  )
}

export default App
