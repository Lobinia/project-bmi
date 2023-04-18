import './CalculatorInput.css'

type CalculatorInputProps = {
    placeholder: string,
    inputType: string,
    id: string,
    name: string,
    value: string,
    onChangeHandler: (e: React.FormEvent<HTMLInputElement>) => void,
    endText?: string
}

function CalculatorInput(props: CalculatorInputProps) {
    const { placeholder, inputType, id, name, value, onChangeHandler, endText } = props;

    return (
        <div className='input-container'>
            <input type={inputType} id={id} name={name} placeholder={placeholder} value={value} onChange={onChangeHandler}/>
            {endText && <span>{endText}</span> }
        </div>
    )
  }
  
  export default CalculatorInput