import calculateBMI from "./calculate";

describe('calculateBMI', () => {
    it('should calculate the BMI corretly', () => {
        const weight = '70';
        const height = '170';
        const expectedLevel = { title: 'Normal', color: 'normal', icon: 'up', bmiRange: [18.51, 24.99], currentBmi: 24.22 };

        const result = calculateBMI(weight, height);

        expect(result).toEqual(expectedLevel);

    })

    it('should return undefined for an invalid weight or height', () => {
        const weight = 'invalid';
        const height = 'invalid';
    
        const result = calculateBMI(weight, height);
    
        expect(result).toBeUndefined();
    });
})