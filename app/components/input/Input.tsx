'use client'
import variables from '../../style/variable.module.scss'

type InputProps = {
    value : string;
    onChange: ()=>void;
}
const Input = ({value,onChange} : InputProps) => {
    return (
        <input 
        value={value}
        onChange={onChange}
        style={{ backgroundColor: variables.primaryColor }} />
    )
}
export default Input