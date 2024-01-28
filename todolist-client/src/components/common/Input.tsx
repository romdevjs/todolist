import { FC, InputHTMLAttributes } from 'react';
import { Color } from '../../types/Color';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  color?:Color
}

export const Input: FC<InputProps> = ({placeholder, color, className, ...props }) => {
  const modification = color ? `text-field_${color}` : '';
  const styles = `text-field ${modification}`;

  return (
    <div className={className ? `${styles} ${className}` : styles}>
      <input className="text-field__input" {...props}/>
      <span className="text-field__label">{placeholder}</span>
    </div>
  )
}