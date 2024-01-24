import { FC, InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
  error:boolean
}

export const Input:FC<InputProps> = ({error,...props}) => {
  const finalClassName = error ? `input error` : 'input';
  return <input className={finalClassName} {...props}/>
}