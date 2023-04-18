export type Level = {
    title: string;
    color: string;
    icon: 'down' | 'up';
    bmiRange: number[];
    currentBmi: number | undefined;
}

const levels: Level[] = [
    { title: 'Thinness', color: 'thinness', icon: 'down', bmiRange: [0, 18.5], currentBmi: undefined },
    { title: 'Normal', color: 'normal', icon: 'up', bmiRange: [18.51, 24.99], currentBmi: undefined  },
    { title: 'Overweight', color: 'overweight', icon: 'down', bmiRange: [25, 30], currentBmi: undefined  },
    { title: 'Obesity', color: 'obesity', icon: 'down', bmiRange: [30.01, 99], currentBmi: undefined  }
];

const calculateBMI = (weightValue:string, heightValue:string):Level | undefined => {
    const weight = parseInt(weightValue);
    const height = parseInt(heightValue);
    let bmi = weight / (Math.pow(height / 100, 2));
    for(let i in levels) {
        if(bmi >= levels[i].bmiRange[0] && bmi < levels[i].bmiRange[1]) {
            levels[i].currentBmi = parseFloat(bmi.toFixed(2));
            return levels[i];
        }
    }
    return undefined;
}

export default calculateBMI;